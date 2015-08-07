/*global define*/
define(['jquery',
        'fx-submodules/config/baseConfig'],
    function ($, config_base) {

        'use strict';

        var cfg = {};
        $.extend(cfg, config_base);

        cfg.TOP_MENU = {
            url: './config/submodules/fx-menu/top_menu_data_mng.json',
            active: "datamng",
            template: 'fx-menu/templates/blank-fluid.html',
            container: "#top-menu-container"
        };

        cfg.SECONDARY_MENU = {
            url: './config/submodules/fx-data-mng/secondary_menu.json',
            template: 'fx-menu/templates/blank-fluid.html',
            disable: ['delete', 'close']
        };

        cfg.DSD_EDITOR_CONTEXT_SYSTEM = "RLM";
        cfg.DSD_EDITOR_DATASOURCES = ["D3S"];

        cfg.FAKE_AUTHENTICATION = false;

        //cfg.DATA_MANAGEMENT_NOT_LOGGEDIN_URL="index.html"

        cfg.DEFAULT_META = {
            "dsd": {
                "contextSystem": "RLM",
                "datasources": ["RLM"],
                "columns": [
                    {
                        "id": "COUNTRY",
                        "subject": "geo",
                        "title": { "EN": "Country" },
                        "dataType": "code",
                        "key": true,
                        "domain": { "codes": [{ "idCodeList": "GAUL0", "version": "2014" }] }
                    },
                    {
                        "id": "YEAR",
                        "subject": "time",
                        "title": { "EN": "Year" },
                        "dataType": "year",
                        "key": true,
                        "domain": { "period": { "from": 2000, "to": 2015 } }
                    },
                    {
                        "id": "YEAR_LABEL",
                        "title": { "EN": "Year Label" },
                        "dataType": "text"
                    },
                    {
                        "id": "QUALIFIER",
                        "title": { "EN": "Qualifier" },
                        "dataType": "code",
                        "key": true,
                        "domain": { "codes": [{ "idCodeList": "RLM_QualifierCodeList" }] }
                    },
                    {
                        "id": "SOURCE",
                        "title": { "EN": "Source" },
                        "dataType": "code",
                        "key": true,
                        "domain": { "codes": [{ "idCodeList": "RLM_SourceCodeList" }] }
                    },
                    {
                        "id": "UM",
                        "title": { "EN": "Unit of measure" },
                        "dataType": "text"
                    },
                    {
                        "id": "VALUE",
                        "subject": "value",
                        "title": { "EN": "Production (Tonnes)" },
                        "dataType": "text"
                    }
                ]
            }
        };

        cfg.METADATA_EDITOR_AJAX_EVENT_CALL = "./config/submodules/fx-data-mng/fx-metadata-editor-ajax-config.json";

        return cfg;
    });