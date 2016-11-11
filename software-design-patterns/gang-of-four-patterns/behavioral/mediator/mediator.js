// Wzorzec: Mediator
//
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#mediatorpatternjavascript
// http://jsdn.pl/wzorzec-mediator-w-javascripcie/

'use strict';

function Person(name) {
    this.name = name;
}

Person.prototype.feed = function () {
    console.log(this.name + ' is feed animal');
};

// ---

function Animal(name) {
    this.name = name;
}

Animal.prototype.thanks = function () {
    console.log('animal ' + this.name + ' is thankful');
};

// ---

var Mediator = (function () {
    var list = {};

    function publish(topic) {
        var subscribers = list[topic];
        if (!subscribers) return;
        subscribers.forEach((subscriber) => subscriber.callback.call(subscriber.context));
    }

    function subscribe(topic, callback) {
        list[topic] = list[topic] || [];
        list[topic].push({
            context: this,
            callback: callback
        });
    }

    return {
        install: function (subject) {
            subject.publish = publish;
            subject.subscribe = subscribe;
        }
    }
})();

var john = new Person('john');
var mike = new Person('mike');

var cat = new Animal('cat');
var dog = new Animal('dog');

// Install to each created object.
[john, mike, cat, dog].forEach(object => Mediator.install(object));

john.subscribe('hungry-cat', john.feed);
mike.subscribe('hungry-cat', mike.feed);
cat.publish('hungry-cat');

console.log('---');

cat.subscribe('feed', cat.thanks);
dog.subscribe('feed', dog.thanks);
mike.publish('feed');

// john is feed animal
// mike is feed animal
// ---
// animal cat is thankful
// animal dog is thankful
