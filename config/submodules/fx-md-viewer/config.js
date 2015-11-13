/* global define */
define(function () {

    'use strict';

    return {

        WHITELIST: {
           /* 'uid': true,

             "abstract": true,
             "organization": true,
             "organizationUnit": true,
             "position": true,
             "role": true,
            seSecondaryDataCollection : true,
            organization : true*/
        },

        HAS_EXPORT : true,

        EXPAND_RECURSIVE : ['meContent'],

/*
        EXPAND_SINGLE : ['meAccessibility']
*/

    };
});
