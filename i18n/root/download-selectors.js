/*global define*/
define([
    'jquery',
    'i18n!nls/common'
], function ($, Common) {

    'use strict';

    return $.extend(true, {}, Common, {
        "section_survey" : "Household survey",
        "section_country" : "Household survey and cross country"
    });
});