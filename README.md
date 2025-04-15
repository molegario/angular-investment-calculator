# EssentialsPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0-next.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Notes on Angualr Life Cycle from GROK
Once bootstrapped, Angular manages components through a series of lifecycle hooks, which are methods you can implement to tap into specific moments in a component’s life. The hooks, in order of execution, are:

### ngOnChanges(): 
Called before ngOnInit and whenever input properties change. Receives a SimpleChanges object with updated values. Used for reacting to input updates.

### ngOnInit(): 
Called once after the component’s inputs are set and the component is initialized. Ideal for setup tasks like fetching data or initializing variables.

### ngDoCheck(): 
Called during every change detection cycle, after ngOnChanges and ngOnInit. Used for custom change detection logic (rarely needed due to Angular’s default change detection).

### ngAfterContentInit(): 
Called once after Angular finishes projecting external content into the component’s view (via <ng-content>). Useful for initializing projected content.

### ngAfterContentChecked(): 
Called after every change detection cycle for projected content. Used to react to changes in projected content.

### ngAfterViewInit(): 
Called once after the component’s view and all child views are fully initialized. Ideal for DOM-related setup or accessing view elements.

### ngAfterViewChecked(): 
Called after every change detection cycle for the component’s view and child views. Used for reacting to view changes.

### ngOnDestroy(): 
Called once just before the component is destroyed (e.g., when removed from the DOM). Used for cleanup tasks like unsubscribing from observables or detaching event listeners to prevent memory leaks.

### Change Detection
Angular’s change detection runs periodically to check for changes in component data and update the DOM. Lifecycle hooks like ngDoCheck, ngAfterContentChecked, and ngAfterViewChecked tie into this process.

Change detection is triggered by events (e.g., user input), timers, or asynchronous operations (e.g., HTTP requests).

### Destruction Phase:
When a component is no longer needed (e.g., navigated away or conditionally removed via *ngIf), Angular destroys it, triggering ngOnDestroy.

The app itself is destroyed when the browser tab closes or the app is unloaded, cleaning up all resources.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
