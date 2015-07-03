/*global define*/
define({
    "rows": [
        "Source","Source label","Country","Country_label","Qualifier","Qualifier_label"
    ],
    "cols": ["Year","Year_label"],
    "vals": [
        "Value","Unit","Flag"
    ],
    "hiddenAttributes": [
        "Value","Unit","Flag"
    ],
    "InstanceRenderers": [
        {label: "Grid", func: "Table"},
        {label: "Table", func: "Table2"}
    ],
    "InstanceAggregators": [
        {label: "SumUnit", func: "Sum2"},
        {label: "Sum", func: "Sum"},
        { label: "Average", func: "Average" }
    ],
    derivedAttributes: {

    },
    linkedAttributes:[],
    "showAgg": false,
    "showRender": false,
    "showUnit":true,
    "showCode":true,
    "showFlags":true

});

