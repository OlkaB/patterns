# patterns

> :notebook_with_decorative_cover: List of design patterns in JavaScript.

## Supported patterns

> Groups of design patterns with division to: enterprise & software.

### Enterprise-integration-patterns (EIP)

#### EIP: Aggregator

* http://www.enterpriseintegrationpatterns.com/patterns/messaging/Aggregator.html

#### EIP: Content-based Router

* http://www.enterpriseintegrationpatterns.com/patterns/messaging/ContentBasedRouter.html

#### EIP: Control Bus

* http://www.enterpriseintegrationpatterns.com/patterns/messaging/ControlBus.html

#### EIP: Correlation Identifier

* http://www.enterpriseintegrationpatterns.com/patterns/messaging/CorrelationIdentifier.html

#### EIP: Message-oriented Middleware (MOM)

* https://en.wikipedia.org/wiki/Message-oriented_middleware

* Channels are separate from applications
* Channels are asynchronous & reliable
* Data is exchanged in self-contained messages

* Remove location dependencies
* Remove temporal dependencies
* Remove data format dependencies

#### EIP: Pipes-And-Filters

* http://www.enterpriseintegrationpatterns.com/patterns/messaging/PipesAndFilters.html

#### EIP: Request-Reply

* http://www.enterpriseintegrationpatterns.com/patterns/messaging/RequestReply.html

#### EIP: Return Address

* http://www.enterpriseintegrationpatterns.com/patterns/messaging/ReturnAddress.html

#### EIP: Scatter-Gather

* http://www.enterpriseintegrationpatterns.com/patterns/messaging/BroadcastAggregate.html

#### EIP: Smart Proxy

* http://www.enterpriseintegrationpatterns.com/patterns/messaging/SmartProxy.html

#### EIP: Splitter

* http://www.enterpriseintegrationpatterns.com/patterns/messaging/Sequencer.html

#### EIP: Test Message

* http://www.enterpriseintegrationpatterns.com/patterns/messaging/TestMessage.html

#### EIP: Wire Tap | Tee

* http://www.enterpriseintegrationpatterns.com/patterns/messaging/WireTap.html

--------------------------------------------------------------------------------

### Software-design-patterns (SDP)

#### SDP: Architectural (SDPA)

##### [SDPA: Model-view-controller](https://github.com/piecioshka/pattern-mvc)

* https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller

Legend:

* Model - The model is the part of the application that handles the logic for the application data.
* View - The View is the parts of the application that handle the display of the data.
* Controller - The Controller is the part of the application that handles user interaction.

Legend (2):

* A model stores data that is retrieved according to commands from the controller and displayed in the view.
* A view generates an output presentation to the user based on changes in the model.
* A controller can send commands to the model to update the model's state (e.g. editing a document). It can also send commands to its associated view to change the view's presentation of the model (e.g. by scrolling through a document).

https://github.com/piecioshka/pattern-mvc

##### SDPA: Model View Presenter

* https://en.wikipedia.org/wiki/Model-view-presenter

Legend:

* The model is an interface defining the data to be displayed or otherwise acted upon in the user interface.
* The presenter acts upon the model and the view. It retrieves data from repositories (the model), and formats it for display in the view.
* The view is a passive interface that displays data (the model) and routes user commands (events) to the presenter to act upon that data.

#### Gang-of-four-patterns (SDPG)

##### SDPG: Behavioral (SDPB)

###### SDPB: Command

> PL: Polecenie

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#commandpatternjavascript
* http://www.algorytm.org/wzorce-projektowe/polecenie-command.html

###### SDPB: Iterator

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#iteratorpatternjquery

###### [SDPB: Mediator](https://github.com/piecioshka/pattern-mediator)

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#mediatorpatternjavascript
* http://jsdn.pl/wzorzec-mediator-w-javascripcie/
* http://www.dofactory.com/javascript/mediator-design-pattern

https://github.com/piecioshka/pattern-mediator

###### [SDPB: Observer](https://github.com/piecioshka/pattern-observer)

> PL: Obserwator

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript
* http://www.algorytm.org/wzorce-projektowe/obserwator-observer.html
* http://bumbu.ru/javascript-observer-publish-subscribe-pattern/

https://github.com/piecioshka/pattern-observer

###### [SDPB: Strategy](https://github.com/piecioshka/pattern-strategy)

> PL: Strategia

* http://adamczuk.net.pl/2012/02/10/wzorzec-projektowy-strategia/
* http://bumbu.ru/javascript-strategy-pattern/
* http://www.algorytm.org/wzorce-projektowe/strategia-strategy.html
* http://burczu-programator.pl/blog/wzorce-projektowe-w-javascript-strategia

https://github.com/piecioshka/pattern-strategy

##### Creational (SDPC)

###### SDPC: Abstract-factory

> PL: Fabryka abstrakcyjna

* http://www.algorytm.org/wzorce-projektowe/fabryka-abstrakcyjna-abstract-factory.html

###### SDPC: Builder

> PL: Budowniczy

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#builderpatternjquery
* http://www.algorytm.org/wzorce-projektowe/budowniczy-builder.html

###### [SDPC: Factory-method](https://github.com/piecioshka/pattern-factory-method)

> PL: Fabryka

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript
* http://www.algorytm.org/wzorce-projektowe/metoda-wytworcza-factory-method.html

https://github.com/piecioshka/pattern-factory-method

###### SDPC: Prototype

> PL: Prototyp

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#prototypepatternjavascript

###### [SDPC: Singleton](https://github.com/piecioshka/pattern-singleton)

> PL: Singleton

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
* http://www.algorytm.org/wzorce-projektowe/singleton-singleton.html

https://github.com/piecioshka/pattern-singleton

##### SDP: Structural (SDPS)

###### SDPS: Adapter

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#wrapperpatternjquery

###### SDPS: Bridge

> PL: Most

* http://www.algorytm.org/wzorce-projektowe/most-bridge.html

###### SDPS: Composite

> PL: Kompozyt

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#compositepatternjquery
* http://pl.wikipedia.org/wiki/Kompozyt_(wzorzec_projektowy)

###### SDPS: Decorator

> PL: Dekorator

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#decoratorpatternjavascript
* http://www.algorytm.org/wzorce-projektowe/dekorator-decorator.html
* http://pl.wikipedia.org/wiki/Dekorator_(wzorzec_projektowy)
* http://bumbu.ru/javascript-decorator-pattern/

###### SDPS: Facade

> PL: Fasada

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#facadepatternjavascript

###### SDPS: Flyweight

> PL: Pyłek

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailflyweight
* http://www.algorytm.org/wzorce-projektowe/pylek-flyweight.html

###### SDPS: Proxy

* http://addyosmani.com/resources/essentialjsdesignpatterns/book/#proxypatternjquery

---

## Resources

* http://martinfowler.com/eaaDev/ - Development of Further Patterns of Enterprise Application Architecture
* http://www.enterpriseintegrationpatterns.com/patterns/messaging/ - Messaging Patterns Overview
* http://www.enterpriseintegrationpatterns.com/docs/jaoo_hohpeg_enterpriseintegrationpatterns.pdf - Great slides!
