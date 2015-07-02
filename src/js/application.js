/*global define, amplify*/
define([
    'jquery',
    'chaplin',
    'amplify'
], function ($, Chaplin) {

    'use strict';

    // The application object
    // Choose a meaningful name for your application
    var Application = Chaplin.Application.extend({

        // Set your application name here so the document title is set to
        // “Controller title – Site title” (see Layout#adjustTitle)
        title: 'Rural Livelihood Monitor',

     /*   initialize: function() {
            // ...
            this.initLayout({

                isExternalLink : function (a) {
                    console.log(a);

                    return false;
                }
            });

            Chaplin.Application.prototype.initialize.call(this, arguments);
        },
*/


        start: function () {
            var args = [].slice.call(arguments);
            // You can fetch some data here and start app
            // (by calling supermethod) after that.
            Chaplin.Application.prototype.start.apply(this, args);
        }

    });

    return Application;
});
