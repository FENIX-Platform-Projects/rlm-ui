/*global define*/
define([
    'jquery',
    'i18n!nls/common'
], function ($, Common) {

    'use strict';
    return $.extend(true, {}, Common, {
        "map_selector_title": "Check Food Insecurity (F.I) for geographic area",
        "other_selectors_title": "Additional Filter",
        "checkbox_show_total": "Show total",
        "section_survey" : "Household survey",
        "section_country" : "Household survey and cross country"
    });
});