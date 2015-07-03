/*global define, _:false, amplify, $*/
define([
    'handlebars',
    'views/base/view',
    'views/download/selectors-view',
    'config/Config',
    'config/Services',
    'config/Events',
    'text!templates/download/survey.hbs',
    'text!templates/common/error.hbs',
    'text!templates/common/courtesy-message.hbs',
    'i18n!nls/download-survey',
    'i18n!nls/errors',
    'fx-common/WDSClient',

    'pivot',
    'pivotRenderers',
    'pivotAggregators',
    'text!pivotDataTest',
    'pivotDataConfig',

    'underscore',
    'q',
    'jstree',
    'amplify'
//TODO REMOVE
], function (Handlebars, View, SelectorsView, Config, Services, E, template, errorTemplate, courtesyMessageTemplate, i18nLabels, i18Errors, WDSClient,
             Pivot,
             pivotRenderers,
             pivotAggregators,
             pivotDataTest,
             pivotDataConfig,
             _) {

    'use strict';

    var s = {
        GO_BTN: "#table-go-btn",
        RESET_BTN: "#table-reset-btn",
        ERROR_HOLDER: ".error-holder",
        COURTESY_MESSAGE_HOLDER: ".courtesy-message-holder",
        RESULTS_CONTAINER: '#results-container',
        RESULT_SELECTOR: '.voh-result',
        SELECTORS_CONTAINER : '.download-selectors-container'
    };

    var DownloadSurveyView = View.extend({

        // Automatically render after initialize
        autoRender: true,

        className: 'download-survey',

        template: template,

        getTemplateData: function () {
            return i18nLabels;
        },

        initVariables: function () {

            this.$goBtn = this.$el.find(s.GO_BTN);
            this.$resetBtn = this.$el.find(s.RESET_BTN);
            this.$errorHolder = this.$el.find(s.ERROR_HOLDER);
            this.$courtesyMessageHolder = this.$el.find(s.COURTESY_MESSAGE_HOLDER);

            //results
            this.$resultsContainer = this.$el.find(s.RESULTS_CONTAINER);

        },

        initComponents: function () {

            this.WDSClient = new WDSClient({
                //serviceUrl: Config.WDS_URL,
                datasource: Config.DB_NAME,
                outputType: Config.WDS_OUTPUT_TYPE
            });

            this.WDSClientOlap = new WDSClient({
                serviceUrl: Config.WDS_URL_ARRAY,
                datasource: Config.DB_NAME
                //,outputType: Config.WDS_OUTPUT_TYPE
            });

        },

        attach: function () {

            View.prototype.attach.call(this, arguments);

            //update State
            amplify.publish(E.STATE_CHANGE, {menu: 'table'});

            this.initVariables();

            this.bindEventListeners();

            this.initComponents();

            this.onReady();

        },

        render: function() {

            View.prototype.render.apply(this, arguments);

            var selectorsView = new SelectorsView({autoRender: true, container: this.$el.find(s.SELECTORS_CONTAINER), section : Config.DOWNLOAD_BY_COUNTRY});

            this.subview('selectors', selectorsView);
        },

        onReady: function () {

            this.initPage();

            this.unlockForm();
        },

        initPage: function () {

            this.printDefaultSelection();
        },

        printDefaultSelection: function () {

            this.subview('selectors').printDefaultSelection();
        },

        /* Event binding and callback */

        bindEventListeners: function () {

            this.$goBtn.on('click', _.bind(this.onClickGoBtn, this));

            this.$resetBtn.on('click', _.bind(this.onClickResetBtn, this));
        },

        onClickGoBtn: function () {

            var inputs = this.getInputs(),
                valid = this.validateInput(inputs);

            if (valid === true) {

                this.lockForm();

                this.resetError();

                this.resetCourtesyMessage();

                this.resetResults();

                this.createRequest(inputs);

                this.search();

            } else {

                this.printError(valid);
            }
        },

        onClickResetBtn: function () {

            this.printDefaultSelection();

            this.resetResults();

            this.resetError();
        },

        /* Data request process */

        validateInput: function (inputs) {

            var errors = [];

            if (!inputs.hasOwnProperty("country") || !inputs.hasOwnProperty("indicator") || !inputs.hasOwnProperty("qualifier") || !inputs.hasOwnProperty("year") ) {
                errors.push("no_input");
            }

            if (inputs.country.length < 1 ) {
                errors.push("country_empty");
            }

            if (inputs.indicator.length < 1 ) {
                errors.push("indicator_empty");
            }

            if (inputs.qualifier.length < 1 ) {
                errors.push("qualifier_empty");
            }

            if (inputs.year.length < 1 ) {
                errors.push("year_empty");
            }

            return (Object.keys(errors).length === 0) ? true : errors;
        },

        printError: function (errors) {

            var template = Handlebars.compile(errorTemplate);
            this.$errorHolder.html(template({error: i18Errors[errors[0]]}));
        },

        printCourtesyMessage: function () {

            var template = Handlebars.compile(courtesyMessageTemplate);
            this.$courtesyMessageHolder.html(template(i18nLabels));
        },

        lockForm: function () {

            this.$goBtn.attr('disabled', 'disabled');
            this.$resetBtn.attr('disabled', 'disabled');
        },

        unlockForm: function () {

            this.$goBtn.removeAttr('disabled');
            this.$resetBtn.removeAttr('disabled');
        },

        getInputs: function () {

           return this.subview('selectors').getInputs();
        },

        createRequest: function (inputs) {

            this.currentRequest = {
                inputs: inputs,
                processedInputs: prepareInputsForWds(inputs)
            };

            function prepareInputsForWds(inputs) {

                var result = {},
                    keys = Object.keys(inputs);

                _.each(keys, function (k) {
                    result[k] = Array.isArray(inputs[k]) ? processArray(inputs[k]) : inputs[k];
                });

                return result;
            }

            function processArray(input) {

                var result = '',
                    concat = ",";

                _.each(input, function (item) {
                    result += item + concat;
                });

                return result.substring(0, result.length - concat.length);
            }
        },

        search: function () {

            this.WDSClientOlap.retrieve({
                payload: {
                    query:  Services.DOWNLOAD_SEARCH,
                    queryVars: this.currentRequest.processedInputs
                },
                outputType: 'array',
                success: _.bind(this.onSearchSuccess, this),
                error: _.bind(this.onSearchError, this)
            });
        },

        onSearchError: function () {

            this.unlockForm();
            this.printError(['request_error']);
        },

        onSearchSuccess: function (response) {

            this.currentRequest.response = response;

            this.unlockForm();

            if (this.currentRequest.response.length === 0) {
                this.printCourtesyMessage();
            } else {
                this.initOlapCreator();
            }
        },

        /* Results rendering */

        processResponse: function (response) {

            var fields = ['geo', 'geo_label', 'variable', 'group_code', 'ms', 's'];

            response.unshift(fields);

            return response;
        },

        initOlapCreator: function () {

            console.log("Print olap here");
           // return;

            this.pivot = new Pivot();

            var pivotDataConf = $.extend(true, {}, pivotDataConfig);

            pivotDataConf.rendererDisplay = pivotRenderers;
            pivotDataConf.aggregatorDisplay = pivotAggregators;
          /*  pivotDataConf.vals.push(this.currentRequest.inputs.status);
            pivotDataConf.derivedAttributes.group_code = function (row) {

                var cl_group_code = amplify.store.sessionStorage("cl_" + row.variable);
                if (cl_group_code) {
                    var obj = _.findWhere(cl_group_code, {code: row.group_code});
                    return obj ? obj.label : null;
                }

            };           */
                  console.log("TEST",this.currentRequest.response,pivotDataConf)
            this.pivot.render("pivot1", this.currentRequest.response, pivotDataConf);
        },

        resetResults: function () {

            //Destroy OLAP
            if (this.pivot && this.pivot.hasOwnProperty('destroy')) {
                this.pivot.destroy();
                $("#pivot1").empty();
            }
        },

        /* Utils */

        resetError: function () {

            this.$errorHolder.empty();
        },

        resetCourtesyMessage: function () {

            this.$courtesyMessageHolder.empty();
        },

        /* Disposition */

        unbindEventListeners: function () {

            this.$goBtn.off();
            this.$resetBtn.off();

        },

        dispose: function () {

            this.resetResults();

            this.resetCourtesyMessage();

            this.unbindEventListeners();

            View.prototype.dispose.call(this, arguments);
        }

    });

    return DownloadSurveyView;
});

