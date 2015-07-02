/*global define*/
define(function ( ) {

    'use strict';

    return {


        CL_INDICATOR : "select indicator_parent_code as parent, indicator_code as code, indicator_label as label from codes_indicators order by parent nulls first, label",
        CL_QUALIFIER: "SELECT qualifier_parent_code as parent, qualifier_code as code, qualifier_label as label FROM codes_qualifiers ORDER BY parent, label;",
        CL_COUNTRY : "SELECT country_code as code, country_label as label FROM codes_countries;",

        REFRESH_INDICATOR : "select p, c, l from indicatorsList(string_to_array('{qualifier}'),string_to_array('{country}'),string_to_array('{year}'))",
        REFRESH_QUALIFIER : "select p, c, l qualifiersList(string_to_array('{indicator}'), string_to_array('{country}'), string_to_array('{year}'))",
        REFRESH_YEAR : "select y from yearsList(string_to_array('{year}'),string_to_array('{qualifier}'),string_to_array('{country}'))",
        REFRESH_COUNTRY : "select c, l from countriesList(string_to_array('{indicator}'), string_to_array('{qualifier}'), string_to_array('{year}'))"



    };
});