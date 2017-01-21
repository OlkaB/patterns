// Wzorzec: Obserwator
//
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript
// http://www.algorytm.org/wzorce-projektowe/obserwator-observer.html
// http://bumbu.ru/javascript-observer-publish-subscribe-pattern/

let EventEmitter = require('super-event-emitter');

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

let engine = new Engine();
let gui = new GUI();

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
