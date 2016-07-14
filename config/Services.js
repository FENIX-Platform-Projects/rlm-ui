/*global define*/
define(function ( ) {

    'use strict';

    return {

        CL_INDICATOR : "select indicator_parent_code as parent, indicator_code as code, indicator_label as label, indicator_source as source from codes_indicators order by parent nulls first, label",
        CL_QUALIFIER: "SELECT qualifier_parent_code as parent, qualifier_code as code, qualifier_label as label FROM codes_qualifiers ORDER BY parent, label;",
        CL_COUNTRY : "SELECT country_code as code, country_label as label FROM codes_countries;",

        REFRESH_INDICATOR : "select p as parent,c as code, l as label, s as source from indicatorsList(string_to_array('{qualifier}',','), string_to_array('{country}',','), string_to_array('{year}',','))",
        REFRESH_QUALIFIER : "select p as parent,c as code, l as label from qualifiersList(string_to_array('{indicator}',','), string_to_array('{country}',','), string_to_array('{year}',','))",
        REFRESH_YEAR : "select y as code, y as label from yearsList(string_to_array('{indicator}',','),string_to_array('{qualifier}',','),string_to_array('{country}',',')) order by label",
        REFRESH_COUNTRY : "select c as code, l as label from countriesList(string_to_array('{indicator}',','), string_to_array('{qualifier}',','), string_to_array('{year}',','))",

        DOWNLOAD_SEARCH : "select 'qualifierOrder' as ctid, 'Indicator_Code' as Indicator, 'Indicator' as Indicator_label, 'Source_Code'  as Source,'Source_Type' as Source_label,'Country_Code' as Country,'Country' as Country_label,'Year_Code' as Year,'Year' as Year_label,'Qualifier_Code' as Qualifier,'Qualifier_' as Qualifier_label,'Value' as Value,'Unit' as Unit,'Flag' as Flag union all (select ctid, Indicator,Indicator_label,Source,Source_label,Country,Country_label,Year,Year_label,Qualifier,Qualifier_label,Value,Unit,CASE when Flag is null then ''  else Flag end as Flag from masterDataSelection( string_to_array('{indicator}',','), string_to_array('{country}',','), string_to_array('{year}',','), string_to_array('{qualifier}',',') ) order by ctid)"

    };
});