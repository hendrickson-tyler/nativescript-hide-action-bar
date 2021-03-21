# NativeScript Hide Action Bar

![Short demo of NativeScript Hide Action Bar in action](https://gitlab.com/knowlysis/external/nativescript-hide-action-bar/-/raw/master/images/demo.gif)

## Description

This is a simple plugin for the Angular flavor of NativeScript. With it, you can hide the `ActionBar` of any view by adding the directive to an element anywhere in the component.

This is especially useful for NativeScript [code sharing](https://docs.nativescript.org/angular/code-sharing/intro#introduction) projects as trying to access the `Page` object in a component would break your web build.

## Installation

From the root folder of your project, execute the following command:

```javascript
tns plugin add nativescript-hide-action-bar
```

## Usage

Once the plugin is added to your project, you need to add the `HideActionBarModule` to your imports array in your desired feature module or the `SharedModule`:

```javascript
    import { HideActionBarModule } from 'nativescript-hide-action-bar';

    @NgModule({
        // ...
        imports: [
            HideActionBarModule,
            // ...
        ],
        // ...
    })
    export class SharedModule { }
```

> **NOTE: Simply importing the `HideActionBarModule` into your `AppModule` will not work.**

Afterwards, simply add the directive to any element as follows:

```html
<Label hideActionBar text="Sayonara, ActionBar!"></Label>
```

You'll want to make sure that the element is actually present on the page. For example, an element nested within an `*ngIf` that evaluates to false will not cause the ActionBar to be hidden.
