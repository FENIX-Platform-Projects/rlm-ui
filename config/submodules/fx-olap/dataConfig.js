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
    "showFlags":true,
	 "csvText": "RLM",
	
	 "cellrnderfonction":function(v1,v2,v3,su,sf){
		 
		// ret=inputOpts.cellrnderfonction(addSeparators(r.tree[ligne][coldInd].value()[0],r.tree[ligne][coldInd].value()[1],r.tree[ligne][coldInd].value()[2],options.showUnit, options.showFlags);
												ret="";
											
											 ret+=v1;
											
											if(su){ret+=" ["+v2+"]";}
											if(sf){ret+=" ("+v3+") ";}
											
		 return ret
		 
	 }
});

