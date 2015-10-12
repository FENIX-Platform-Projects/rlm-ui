/*global define*/
define({
    "rows": [
        ["Indicator","Indicator_Code"], ["Source","Source_Code"],["Country","Country_Code"],
        ["Qualifier","Qualifier_Code"]
    ],
    "cols": ["Year"],
    "vals": [
        "Value","Flag"  ,"Unit"
    ],
    "hiddenAttributes": [
        "Value","Flag","Year_Code","Unit"
    ],
    "InstanceRenderers": [
        {label: "Grid", func: "Table"}
    ],
    "InstanceAggregators": [
        {label: "SumUnit", func: "Sum2"}
    ],
    derivedAttributes: {

    },
    linkedAttributes:[["Qualifier","Qualifier_Code"],
        ["Indicator_Code","Indicator"],
        ["Source_Code","Source"],["Country","Country_Code"]],
    "showAgg": false,
    "showRender": false,
    "showUnit":false,
    "showCode":false,
    "showFlags":false,
	 "csvText": "RLM"

});

