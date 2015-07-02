 /*global define*/
define(function ( ) {

    'use strict';

    return {

        //WDS and Data
        DB_NAME : 'rlm',
        WDS_URL : 'http://fenixapps2.fao.org/wds_5.1/rest/fenix/query',
        WDS_OUTPUT_TYPE : 'object',

        //Selectors
        SEL_YEAR_FROM : 2000,
        SEL_YEAR_TO : 2006,
        SELECTOR_THRESHOLD : 9999,

        DEFAULT_SEL_INDICATOR : [],
        DEFAULT_SEL_COUNTRY : [],
        DEFAULT_SEL_QUALIFIER : [],
        DEFAULT_SEL_YEAR : [],

        DOWNLOAD_BY_COUNTRY : 'country',
        DOWNLOAD_BY_INDICATOR : 'indicator',

        SELECTOR_MULTISELECTION : {
            COUNTRY : ['year', 'qualifier'],
            INDICATOR: ['country', 'year', 'qualifier']
        }

    };
});
