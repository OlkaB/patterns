// Wzorzec: Singleton
//
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
// http://www.algorytm.org/wzorce-projektowe/singleton-singleton.html

class UniversumManager {
    constructor() {
        if (UniversumManager._instance) {
            return UniversumManager._instance;
        }

        UniversumManager._instance = this;
    }

    static getInstance() {
        return UniversumManager._instance;
    }

    createPlanet(name) {
        return { name };
    }
}

let um1 = new UniversumManager();
let um2 = new UniversumManager();
let um3 = UniversumManager.getInstance();
let um4 = UniversumManager.getInstance();

console.log(um1 === um2);
console.log(um1 === um3);
console.log(um1 === um4);
console.log(um2 === um3);
console.log(um2 === um4);
console.log(um3 === um4);

console.log(um1.createPlanet('test-1'));
console.log(um2.createPlanet('test-2'));
console.log(um3.createPlanet('test-3'));
console.log(um4.createPlanet('test-4'));
