// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    '@angular2-material': 'vendor/@angular2-material',
    'angular2-moment': 'vendor/angular2-moment',
    'moment': 'vendor/moment',
    'symbol-observable': 'vendor/symbol-observable'
};
/** User packages configuration. */
var packages = {
    '@angular2-material/core': {
        main: 'core.js'
    },
    '@angular2-material/button': {
        main: 'button.js'
    },
    '@angular2-material/card': {
        main: 'card.js'
    },
    '@angular2-material/checkbox': {
        main: 'checkbox.js'
    },
    '@angular2-material/icon': {
        main: 'icon.js'
    },
    '@angular2-material/input': {
        main: 'input.js'
    },
    '@angular2-material/toolbar': {
        main: 'toolbar.js'
    },
    'angular2-moment': {
        main: 'index.js'
    },
    'moment': {
        main: 'moment.js'
    },
    'symbol-observable': {
        main: 'index.js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/+home',
    'app/+settings',
    'app/+question',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map