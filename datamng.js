/*global require*/

/*global require*/

var projectRoot = ".";

require.config({
    config: {
        text: {
            useXhr: function (url, protocol, hostname, port) {
                return true;
            }
        }
    },
    paths : {
        compilerPaths : projectRoot + '/submodules/fenix-ui-common/js/Compiler',
        commonPaths : projectRoot + '/submodules/fenix-ui-common/js/paths',
        dataEditorPaths : projectRoot + '/submodules/fenix-ui-DataEditor/js/paths',
        menuPaths: projectRoot + '/submodules/fenix-ui-menu/js/paths',
        metadataPaths :projectRoot + '/submodules/fenix-ui-metadata-viewer/js/paths',
        dataUploadPaths :projectRoot + '/submodules/fenix-ui-dataUpload/js/paths',
        dsdEditorPaths :projectRoot + '/submodules/fenix-ui-DSDEditor/js/paths',
        metadataEditorPaths :projectRoot + '/submodules/fenix-ui-metadata-editor/js/paths',
        catalogPaths :projectRoot + '/submodules/fenix-ui-catalog/js/paths',
        dataMngPaths :projectRoot + '/submodules/fenix-ui-data-management/src/js/paths'
    }
});

// relative or absolute path of Components' main.js
require([
    'compilerPaths',
    'commonPaths',
    'dataEditorPaths',
    'dataUploadPaths',
    'dsdEditorPaths',
    'metadataEditorPaths',
    'catalogPaths',
    'menuPaths',
    'dataMngPaths'
], function (Compiler, Commons, DataEditor, DataUpload, DSDEditor, MetadataEditor, Catalog, Menu, DataMng) {

    'use strict';

    var submodules_path = projectRoot + '/../../submodules';

    var commonsConfig = Commons;
    commonsConfig.baseUrl = submodules_path + '/fenix-ui-common/js';

    var dataEditorConfig = DataEditor;
    dataEditorConfig.baseUrl = submodules_path + '/fenix-ui-DataEditor/js';

    var dataUploadConfig = DataUpload;
    dataUploadConfig.baseUrl = submodules_path + '/fenix-ui-dataUpload/js/';

    var dsdEditorConfig = DSDEditor;
    dsdEditorConfig.baseUrl = submodules_path + '/fenix-ui-DSDEditor/js';

    var metadataEditorConfig = MetadataEditor;
    metadataEditorConfig.baseUrl = submodules_path + '/fenix-ui-metadata-editor/js/';

    var catalogConfig = Catalog;
    catalogConfig.baseUrl = submodules_path + '/fenix-ui-catalog/js/';

    var menuConfig = Menu;
    menuConfig.baseUrl = submodules_path + '/fenix-ui-menu/js';

    var dataMngConfig = DataMng;
    dataMngConfig.baseUrl = submodules_path +  '/fenix-ui-data-management/src/js';

    Compiler.resolve([commonsConfig, dataEditorConfig, dataUploadConfig, dsdEditorConfig, metadataEditorConfig, catalogConfig, menuConfig, dataMngConfig],
        {
            placeholders: {
                //"FENIX_CDN": "http://www.fao.org/fenixrepo/cdn",
                "FENIX_CDN": "http://fenixrepo.fao.org/cdn"
            },

            config: {

                //Set the config for the i18n
                i18n: {
                    locale: 'en'
                },

                // The path where your JavaScripts are located
                baseUrl: './src/js',

                // Specify the paths of vendor libraries
                paths: {
                    underscore: "{FENIX_CDN}/js/underscore/1.7.0/underscore.min",
                    backbone: "{FENIX_CDN}/js/backbone/1.1.2/backbone.min",
                    handlebars: "{FENIX_CDN}/js/handlebars/2.0.0/handlebars",
                    chaplin: "{FENIX_CDN}/js/chaplin/1.0.1/chaplin.min",
                    amplify: '{FENIX_CDN}/js/amplify/1.1.2/amplify.min',
                    rsvp: '{FENIX_CDN}/js/rsvp/3.0.17/rsvp',
                    pnotify: '{FENIX_CDN}/js/pnotify/2.0.1/pnotify.custom.min',

                    'fx-d-m/config/config': '../../config/submodules/fx-data-mng/config',
                    "fx-d-m/routes": submodules_path + "/fenix-ui-data-management/src/js/routes/metadata",
                    'fx-d-m/templates/landing' : submodules_path +  "/fenix-ui-data-management/src/js/templates/landing/metadata.hbs",
                    'fx-d-m/templates/resume' : submodules_path + "/fenix-ui-data-management/src/js/templates/resume/metadata.hbs",

                    'fx-d-m/templates/site' : "./templates/site.hbs",

                    'fx-cat-br/config/config': '../../config/submodules/fx-catalog/config',

                    'fx-submodules/config/baseConfig': '../../config/submodules/config_base'

                },

                // Underscore and Backbone are not AMD-capable per default,
                // so we need to use the AMD wrapping of RequireJS
                shim: {
                    underscore: {
                        exports: '_'
                    },
                    backbone: {
                        deps: ['underscore', 'jquery'],
                        exports: 'Backbone'
                    },
                    handlebars: {
                        exports: 'Handlebars'
                    },
                    amplify: {
                        deps: ['jquery'],
                        exports: 'amplifyjs'
                    }
                }
                // For easier development, disable browser caching
                // Of course, this should be removed in a production environment
                //, urlArgs: 'bust=' +  (new Date()).getTime()
            }
        });

    // Bootstrap the application
    require([
        'fx-d-m/start',
        'fx-d-m/routes',
        'domReady!'
    ], function (Application, routes) {

        var app = new Application({
            routes: routes,
            controllerSuffix: '-controller',
            controllerPath: submodules_path + '/fenix-ui-data-management/src/js/controllers/',
            root: '/rlm/',
            pushState: false
        });
    });
});