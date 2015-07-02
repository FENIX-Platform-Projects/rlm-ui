/*global define*/
define(function ( ) {

    'use strict';

    return {


        CL_INDICATOR : "select indicator_parent_code as parent, indicator_code as code, indicator_label as label from codes_indicators order by parent nulls first, label",
        CL_QUALIFIER: "SELECT qualifier_parent_code as parent, qualifier_code as code, qualifier_label as label FROM codes_qualifiers ORDER BY parent, label;",
        CL_COUNTRY : "SELECT country_code as code, country_label as label FROM codes_countries;"

    };
});
