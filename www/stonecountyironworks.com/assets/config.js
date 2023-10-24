System.config({
  "baseURL": "/assets/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "bitbucket:*": "jspm_packages/bitbucket/*.js",
    "*": "*.js"
  },
  "defaultJSExtensions": true
});

System.config({
  "meta": {
    "*": {
      "format": "es6"
    }
  }
});

System.config({
  "map": {
    "asyncly/EventEmitter2": "github:asyncly/EventEmitter2@0.4.14",
    "babel": "npm:babel-core@5.6.15",
    "babel-runtime": "npm:babel-runtime@5.6.15",
    "bc-baseline": "bitbucket:pixelunion/bc-baseline@0.2.1",
    "bc-compare": "bitbucket:pixelunion/bc-compare@master",
    "bc-loading": "bitbucket:pixelunion/bc-loading@1.0.0",
    "bc-modal": "bitbucket:pixelunion/bc-modal@0.0.4",
    "bc-scroll-link": "bitbucket:pixelunion/bc-scroll-link@0.1.2",
    "bc-swipe-fade": "bitbucket:pixelunion/bc-swipe-fade@0.0.2",
    "bc-tabs": "bitbucket:pixelunion/bc-tabs@0.3.0",
    "bigcommerce/stencil-utils": "github:bigcommerce/stencil-utils@0.3.7",
    "caolan/async": "github:caolan/async@0.9.2",
    "core-js": "npm:core-js@0.9.18",
    "fitvids": "github:davatron5000/FitVids.js@1.1.0",
    "history": "github:browserstate/history.js@1.8.0",
    "imagesloaded": "npm:imagesloaded@3.1.8",
    "jquery": "github:components/jquery@2.1.4",
    "jquery-revealer": "github:PixelUnion/jquery.revealer@2.0.0",
    "jquery-trend": "npm:jquery-trend@0.1.0",
    "jquery-validetta": "github:PixelUnion/validetta@2.0.0",
    "knockout": "github:knockout/knockout@3.3.0",
    "lodash": "npm:lodash@3.10.1",
    "normalize.scss": "npm:normalize.scss@0.1.0",
    "pixelunion/bc-scroll-link": "bitbucket:pixelunion/bc-scroll-link@0.1.2",
    "revealer": "github:pixelunion/jquery.revealer@2.0.0",
    "selectivizr": "github:keithclark/selectivizr@1.0.2",
    "slick": "github:kenwheeler/slick@1.5.8",
    "susy": "github:ericam/susy@2.2.6",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "url": "github:jspm/nodelibs-url@0.1.0",
    "bitbucket:pixelunion/bc-compare@master": {
      "eventemitter2": "github:asyncly/EventEmitter2@0.4.14",
      "jquery": "github:components/jquery@2.1.4",
      "jquery-revealer": "github:pixelunion/jquery.revealer@2.0.0",
      "jquery-trend": "npm:jquery-trend@0.1.0",
      "lodash": "npm:lodash@3.10.1"
    },
    "bitbucket:pixelunion/bc-loading@1.0.0": {
      "jquery": "github:components/jquery@2.1.4",
      "jquery-trend": "npm:jquery-trend@0.1.0"
    },
    "bitbucket:pixelunion/bc-modal@0.0.4": {
      "jquery": "github:components/jquery@2.1.4",
      "jquery-revealer": "github:pixelunion/jquery.revealer@2.0.0",
      "jquery-trend": "npm:jquery-trend@0.1.0",
      "lodash": "npm:lodash@3.10.1"
    },
    "bitbucket:pixelunion/bc-scroll-link@0.1.2": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "bitbucket:pixelunion/bc-swipe-fade@0.0.2": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "bitbucket:pixelunion/bc-tabs@0.3.0": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:bigcommerce/stencil-utils@0.3.7": {
      "asyncly/EventEmitter2": "github:asyncly/EventEmitter2@0.4.14",
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.6.15": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:imagesloaded@3.1.8": {
      "eventie": "npm:eventie@1.0.6",
      "wolfy87-eventemitter": "npm:wolfy87-eventemitter@4.2.11"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:wolfy87-eventemitter@4.2.11": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    }
  }
});

