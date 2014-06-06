define(function(require, exports, module) {
        var Engine = require('famous/core/Engine');
        
        var Modifier        = require('famous/core/Modifier');
        var Transform       = require('famous/core/Transform');

        var AppView = require('app/AppView');
        var mainContext = Engine.createContext();  
        var appView = new AppView();

        
        mainContext.setPerspective(1000);
        mainContext.add(appView);

        steroids.tabBar.hide();
        steroids.statusBar.hide();
        steroids.view.navigationBar.hide();
        steroids.view.setAllowedRotations = [0];

});

