/*global define, amplify*/
define([
    'jquery',
    'chaplin',
    'underscore',
    'config/Events',
    'globals/State',
    'views/base/view',
    'fx-menu/start',
    'fx-common/AuthManager',
    'i18n!nls/site',
    'text!templates/site.hbs'
], function ($, Chaplin, _, E, State, View, Menu, AuthManager, i18nLabels, template) {

    'use strict';

    var SiteView = View.extend({

        container: 'body',

        id: 'site-container',

        regions: {
            main: '#main-container'
        },

        template: template,

        getTemplateData: function () {
            return i18nLabels;
        },

        attach: function () {

            View.prototype.attach.call(this, arguments);

            this.bindEventListeners();
            this.initComponents();
        },

        bindEventListeners : function () {
            amplify.subscribe(E.STATE_CHANGE, this, this.onStateUpdate);
        },

        initComponents : function () {

            var self = this,
                menuConf = {
                    url: 'config/submodules/fx-menu/top_menu.json',
                    //active: State.menu,
                    container: '#top-menu-container',
                    callback: _.bind(this.onMenuRendered, this),
                    breadcrumb : {
                        active : true,
                        container : "#breadcrumb-container",
                        showHome : true
                    },
                    footer : {
                        active : true,
                        container : "#footer-menu-container"
                    }
                },
                menuConfAuth = _.extend({}, menuConf, {
                    hiddens: ['login']
                }),
                menuConfPub = _.extend({}, menuConf, {
                    hiddens: ['datamng','logout']
                });

            this.authManager = new AuthManager({
                onLogin: function() {
                    self.topMenu.refresh(menuConfAuth);
                },
                onLogout: function() {
                    self.topMenu.refresh(menuConfPub);
                }
            });

            //Top Menu
            this.topMenu = new Menu(this.authManager.isLogged() ? menuConfAuth : menuConfPub);


        },

        onMenuRendered : function () {

            this.onMenuUpdate();
            amplify.subscribe('voh.menu.update', this, this.onMenuUpdate);
        },

        onStateUpdate : function ( s ) {

            State = $.extend(true, State, s);

            amplify.publish("voh.menu.update");
        },

        onMenuUpdate : function () {
            this.topMenu.select(State.menu);
        }

    });

    return SiteView;
});
