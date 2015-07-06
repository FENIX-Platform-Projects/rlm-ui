/*global define*/
define([
    'jquery',
    'i18n!nls/common'
], function ($, Common) {

    'use strict';

    return $.extend(true, {}, Common, {
        "section_one" : "Indicator",
        "section_two" : "Country"
    });
});