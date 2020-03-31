# screen-orientation-js

Shows a custom message when the mobile device's screen is in a horizontal position.

Some applications or websites are built to display the content only in a portrait mode. To prevent a breaking up the website's layout we can show a full screen message when the device is rotated in horizontal position.

## Instalation

```
$ npm install screen-orientation-js
```

## Usage
```js
// es6 modules
import screenOrientation from 'screen-orientation-js'

screenOrientation();

// or with custom configuration 

screenOrientation({
    color:  "#7c692d",
    bgColor: "#2d7c72",
    animation: false,
    fontSize: 3
});
```

## Options
You can override the default configuration with custom values.

```js
message: string // A custom message. Default: "Landscape orientation is not supported. Please rotate the device screen"
color: string // Text color. Default: "#0000"
fontSize: number // The font size depends on the width of the viewport. Recommended values 1-6. Default: 5
bgColor: string // Background color. Default: "#ffff"
animation: boolean // Displays the rotating phone animation. Default: true
minHeight: number // The breakpoint in viewport height to display a message. Default: 500
```
  