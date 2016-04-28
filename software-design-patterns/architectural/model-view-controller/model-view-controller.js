// Model View Controller
// https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller

// - Model - The model is the part of the application that handles the logic for the application data.
// - View - The View is the parts of the application that handle the display of the data.
// - Controller - The Controller is the part of the application that handles user interaction.

// A model stores data that is retrieved according to commands from the controller and displayed in the view.
// A view generates an output presentation to the user based on changes in the model.
// A controller can send commands to the model to update the model's state (e.g. editing a document). It can also send commands to its associated view to change the view's presentation of the model (e.g. by scrolling through a document).

var EventEmitter = require('super-event-emitter');

class Engine {
    constructor() {
        EventEmitter.mixin(this);
        this.registerListeners()
    }

    doSomething() {
        this.emit('do-something', { type: 'engine' });
    }

    registerListeners() {
        this.on('try-engine-method', () => {
            // do something...
        });
    }
}

class GUI {
    constructor() {
        EventEmitter.mixin(this);
        this.registerListeners();
    }

    triggerClick() {
        this.emit('do-user-action', { type: 'gui' });
    }

    registerListeners() {
        this.on('display-something', () => {
            // do something...
        });
    }
}

class Glue {
    constructor(engine, gui) {
        this.engine = engine;
        this.gui = gui;

        this.registerEngineListeners();
        this.registerGUIListeners();
    }

    registerEngineListeners() {
        this.engine.on('do-something', (data) => {
            this.gui.emit('display-something', data);
        });
    }

    registerGUIListeners() {
        this.gui.on('do-user-action', (data) => {
            this.engine.emit('try-engine-method', data);
        });
    }
}

var engine = new Engine();
var gui = new GUI();

engine.on('all', (name, payload) => {
    console.log('[ENGINE]', name, payload);
});
gui.on('all', (name, payload) => {
    console.log('[GUI]', name, payload);
});

// Combine instances of Engine & GUI.
new Glue(engine, gui);

console.log('engine starts');
engine.doSomething();

console.log('--');

console.log('gui starts');
gui.triggerClick();
