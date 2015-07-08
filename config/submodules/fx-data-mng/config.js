/*global define*/
define(['jquery',
        'fx-submodules/config/baseConfig'],
    function ($, config_base) {

        'use strict';

        var cfg = {};
        $.extend(cfg, config_base);

        cfg.TOP_MENU = {
            url: './config/submodules/fx-menu/top_menu.json',
            active: "datamng"
        };

        cfg.SECONDARY_MENU = {
            url: './config/submodules/fx-data-mng/secondary_menu.json',
            disable: ['delete', 'close']
        };

        cfg.DSD_EDITOR_CONTEXT_SYSTEM = "RLM";
        cfg.DSD_EDITOR_DATASOURCES = ["D3S"];


        //cfg.DATA_MANAGEMENT_NOT_LOGGEDIN_URL="index.html"


        //cfg.METADATA_EDITOR_AJAX_EVENT_CALL = "config/submodules/metadataEditor/fx-editor-ajax-config_PROD.json";
        //cfg.METADATA_EDITOR_AJAX_EVENT_CALL = "config/submodules/metadataEditor/fx-editor-ajax-config_DEMO.json";

        return cfg;
    });