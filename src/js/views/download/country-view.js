/*global define, _:false, amplify, $*/
define([
    'views/base/view',
    'views/download/download-view',
    'config/Config',
    'config/Services',
    'config/Events',
    'text!templates/download/country.hbs',
    'i18n!nls/download-survey'
], function (View, DownloadView, Config, Services, E, template, i18nLabels) {

    'use strict';

    var s = {
        DOWNLOAD_CONTAINER : '.download-container'
    };

    var CountryView = View.extend({

        // Automatically render after initialize
        autoRender: true,

        className: 'download-section',

        template: template,

        getTemplateData: function () {
            return i18nLabels;
        },

        initVariables: function () {  },

        initComponents: function () {  },

        bindEventListeners: function () { },

        onReady: function () {

        },

        attach: function () {

            View.prototype.attach.call(this, arguments);

            this.initVariables();

            this.bindEventListeners();

            this.initComponents();

            this.onReady();

        },

        render: function() {

            View.prototype.render.apply(this, arguments);

            var selectorsView = new DownloadView({
                autoRender: true,
                container: this.$el.find(s.DOWNLOAD_CONTAINER),
                section : Config.DOWNLOAD_BY_COUNTRY
            });

            this.subview('selectors', selectorsView);
        },

        /* Disposition */

        unbindEventListeners: function () {  },

        dispose: function () {

            this.unbindEventListeners();

            View.prototype.dispose.call(this, arguments);
        }

    });

    return CountryView;
});

