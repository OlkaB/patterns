// Model View Presenter
// https://en.wikipedia.org/wiki/Model-view-presenter

// - The model is an interface defining the data to be displayed or otherwise acted upon in the user interface.
// - The presenter acts upon the model and the view. It retrieves data from repositories (the model), and formats it for display in the view.
// - The view is a passive interface that displays data (the model) and routes user commands (events) to the presenter to act upon that data.

// Model part.

class Engine {
    constructor() {
        this.registerListeners()
    }

    runCoreMethod() {
        this.emit('action-name', 1);
    }

    registerListeners() {
        this.on('try-core-method', () => {
            // do something...
        });
    }
}

// View part.

class GUI {
    constructor() {
        this.registerListeners();
    }

    click() {
        this.emit('user-action', { type: 'click' });
    }

    registerListeners() {
        this.on('display-something', () => {
            // do something...
        });
    }
}

// Presentation part.

class Connector {
    engine = null;
    gui = null;

    constructor(engine, gui) {
        this.engine = engine;
        this.gui = gui;

        this.registerEngineListeners();
        this.registerGUIListeners();
    }

    registerEngineListeners() {
        this.engine.on('engine-action', (data) => {
            this.gui.emit('display-something', data);
        });
    }

    registerGUIListeners() {
        this.gui.on('user-action', () => {
            this.engine.emit('try-core-method');
        });
    }
}

let engine = new Engine();
let gui = new GUI();
let glue = new Connector(engine, gui);
