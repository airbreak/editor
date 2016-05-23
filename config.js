requirejs.config({
    // baseUrl: window.urlObject.js,
    paths: {
        jquery: 'jquery-1.8.2.min',
        module: 'module.min',
        uploader: 'uploader.min',
        simditor: 'simditor.min'
    },
    shim {
        module: {
            deps: ['jqury'],
            exports: 'module'
        },
        uploader: {
            deps: ['jqury', 'module'],
            exports: 'module'
        },
        simditor: {
            deps: ['jqury', 'module', 'simditor'],
            exports: 'module'
        }
    }
});

require(['simditor'], function() {
    var editor = new Simditor({
        textarea: $('#my-editor')
    });
});