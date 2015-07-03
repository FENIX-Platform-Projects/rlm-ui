/*global define*/
define({
    "rows": [
        ["Indicator_label","Indicator"], ["Source label","Source"],["Country_label","Country"],
        ["Qualifier_label","Qualifier"]
    ],
    "cols": ["Year"],
    "vals": [
        "Value","Flag"  ,"Unit"
    ],
    "hiddenAttributes": [
        "Value","Flag","Year_label","Unit"
    ],
    "InstanceRenderers": [
        {label: "Grid", func: "Table"}
    ],
    "InstanceAggregators": [
        {label: "SumUnit", func: "Sum2"}
    ],
    derivedAttributes: {

    },
    linkedAttributes:[["Qualifier","Qualifier_label"],
        ["Indicator_label","Indicator"],
        ["Source label","Source"],["Country","Country_label"]],
    "showAgg": false,
    "showRender": false,
    "showUnit":false,
    "showCode":false,
    "showFlags":false

});

