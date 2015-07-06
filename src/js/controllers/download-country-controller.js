/*global define, Backbone*/
define([
    'chaplin',
    'underscore',
    'controllers/base/controller',
    'views/download/country-view'
], function (Chaplin, _, Controller, View) {

    'use strict';

    var DownloadCountryController = Controller.extend({

        show: function (params) {

            this.view = new View({
                region: 'main',
                params: params
            });
        }
    });

    return DownloadCountryController;
});
