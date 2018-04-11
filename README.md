# StatusMessage

Shows a nice message with an icon to be used in an `<ion-list>`.

## Installation
- Install `@webfactor/ionic-status-message` via npm.
- Add `StatusMessageModule` to your Ionic module imports.

## I/O
```typescript
icon?: string
```
Icon to show. Use ionicons.

## Example

```html
<ion-list>
    <wf-status-message icon="pizza">
        Content here. 👋
    </wf-status-message>
</ion-list>
```