/*global define*/
define({
    "rows": [
        ["Indicator", "Indicator_Code"], ["Source_Type", "Source_Code"], ["Country", "Country_Code"],
        ["Qualifier", "Qualifier_Code"]
    ],
    "cols": ["Year"],
    "vals": [
        "Value", "Flag", "Unit"
    ],
    "hiddenAttributes": [
        "Value", "Flag", "Year_Code", "Unit"
    ],
    "InstanceRenderers": [
        {label: "Grid", func: "Table"},
		{label: "OLAP", func: "OLAP"},
		{label: "Area", func: "Area"}
    ],
    "InstanceAggregators": [
        {label: "SumUnit", func: "Sum2"}
    ],
    derivedAttributes: {
        "Qualifier":function(mp){return "<span class=ordre>" + mp["qualifierOrder"] + "</span>" + mp["Qualifier_"];}

    },
    linkedAttributes: [["Qualifier", "Qualifier_Code"],
        ["Indicator_Code", "Indicator"],
        ["Source_Code", "Source"], ["Country", "Country_Code"]],
    "showAgg": false,
    "showRender": false,
    "showUnit": false,
    "showCode": false,
    "showFlags": true,
    "csvText": "RLM",
    "cellRenderFunction": function (value, unit, flag, showUnit, showFlag) {
        var ret = "";

        ret += "<div class='result-value'>" + value + "</div>";

        if (showUnit) {
            ret += " [" + unit + "]";
        }

        if (showFlag && flag!="") {
            ret += "<div class='result-amount'>(" + flag + ")</div>";
        }

        return ret + "";
    }
});

