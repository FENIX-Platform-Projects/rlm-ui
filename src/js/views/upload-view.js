/*global define, amplify*/
define([
    'jquery',
    'views/base/view',
    'text!templates/upload/upload.hbs',
    'i18n!nls/upload',
    'config/Events',
    'jquery.fileupload',
    'amplify'
], function ($, View, template, i18nLabels, E) {

    'use strict';

    var s = {
        INPUT_UPLOAD: '#fileupload'
    };

    var AboutView = View.extend({

        // Automatically render after initialize
        autoRender: true,

        className: 'upload',

        // Save the template string in a prototype property.
        // This is overwritten with the compiled template function.
        // In the end you might want to used precompiled templates.
        template: template,

        getTemplateData: function () {
            return i18nLabels;
        },

        attach: function () {

            View.prototype.attach.call(this, arguments);


            //update State
            amplify.publish(E.STATE_CHANGE, {menu: 'upload'});

            this.initUploadComponent();

        },

        initUploadComponent: function() {

            $(s.INPUT_UPLOAD).fileupload({

                dataType: 'json',

                url : "/my_upload_url",

                done: function (e, data) {
                    $.each(data.result.files, function (index, file) {
                        $('<p/>').text(file.name).appendTo(document.body);
                    });
                }
            });
        }
    });

    return AboutView;
});
