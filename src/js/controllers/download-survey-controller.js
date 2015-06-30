/*global define, Backbone*/
define([
    'chaplin',
    'underscore',
    'controllers/base/controller',
    'views/download/survey-view'
], function (Chaplin, _, Controller, View) {

    'use strict';

    var DownloadSurveyController = Controller.extend({

        show: function (params) {

            this.view = new View({
                region: 'main',
                params: params
            });
        }
    });

    return DownloadSurveyController;
});
