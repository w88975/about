Editor.registerPanel( 'fire-about.panel', {
    is: 'fire-about',

    properties: {
        version: {
            type: String,
            value: ''
        }
    },

    ready: function () {
        var App = require('remote').require('app');
        this.version = App.getVersion();
    },
});
