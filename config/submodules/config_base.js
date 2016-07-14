/*global define*/
define([], function () {

    'use strict';

    var services = {

        SERVICE_BASE_ADDRESS: "http://fenixservices.fao.org/d3s/msd",
        DSD_EDITOR_CODELISTS: "config/submodules/DSDEditor/CodelistsCstatAFG.json",

        //Analysis
        catalog: {
            baseFilter: {
                "dsd.contextSystem": {"enumeration": ["RLM"]},
                "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
            },
            defaultSelectors: ["resourceType"],
            hideCloseButton: true,
            findServiceParams: {
                full: true,
                maxSize: 999,
                order: "meMaintenance.seUpdate.updateDate:desc" //order by last update
            }

        },
    };

    return services;
});