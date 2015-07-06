/*global define*/
define(function () {

    'use strict';

    var sel_indicator = 'indicator',
        sel_country = 'country',
        sel_year = 'year',
        sel_qualifier='qualifier';

    return {

        //WDS and Data
        DB_NAME: 'rlm',
        WDS_URL: 'http://fenixapps2.fao.org/wds_5.2/rest/crud',
        WDS_OUTPUT_TYPE: 'object',
        WDS_OLAP_OUTPUT_TYPE : 'array',

        //Selectors
        SEL_YEAR_FROM: 2000,
        SEL_YEAR_TO: 2015,
        SELECTOR_THRESHOLD: 9999,

        DEFAULT_SEL_INDICATOR: [],
        DEFAULT_SEL_COUNTRY: [],
        DEFAULT_SEL_QUALIFIER: [],
        DEFAULT_SEL_YEAR: [],

        DOWNLOAD_BY_COUNTRY: sel_country,
        DOWNLOAD_BY_INDICATOR: sel_indicator,

        SELECTOR_MULTISELECTION: {
            COUNTRY: [sel_year, sel_qualifier],
            INDICATOR: [sel_country, sel_year, sel_qualifier]
        },

        SELECTOR_REFRESH_SETTINGS: {
            COUNTRY: {
                INIT : {
                    ENABLE: [sel_country],
                    DISABLE: [sel_indicator, sel_year, sel_qualifier]
                },
                COUNTRY: {
                    REFRESH: [sel_indicator],
                    ENABLE: [sel_country, sel_indicator],
                    DISABLE: [sel_year, sel_qualifier]
                },
                INDICATOR: {
                    REFRESH: [sel_year],
                    ENABLE: [sel_country, sel_indicator, sel_year],
                    DISABLE: [sel_qualifier]
                },
                YEAR: {
                    REFRESH: [sel_qualifier],
                    ENABLE: [sel_country, sel_indicator, sel_year, sel_qualifier],
                    DISABLE: []
                },
                QUALIFIER: {
                    REFRESH: [],
                    ENABLE: [],
                    DISABLE: []
                }
            },
            INDICATOR: {
                INIT : {
                    ENABLE: [sel_indicator],
                    DISABLE: [sel_country, sel_year, sel_qualifier]
                },
                INDICATOR: {
                    REFRESH: [sel_country],
                    ENABLE: [sel_country, sel_indicator],
                    DISABLE: [sel_year, sel_qualifier]
                },
                COUNTRY: {
                    REFRESH: [sel_year],
                    ENABLE: [sel_country, sel_indicator, sel_year],
                    DISABLE: [sel_qualifier]
                },
                YEAR: {
                    REFRESH: [sel_qualifier],
                    ENABLE: [sel_country, sel_indicator, sel_year, sel_qualifier],
                    DISABLE: []
                },
                QUALIFIER: {
                    REFRESH: [],
                    ENABLE: [],
                    DISABLE: []
                }
            }
        }

    };
});
