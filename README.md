# screen-orientation-js

Displays an animated full-screen message when the mobile device's screen is rotated horizontally.

Some applications or websites may display content properly only in portrait orientation on the mobile devices. To prevent the website's layout from breaking ,  ```screen-orientation-js```  informs the user that the app can't be viewed in landscape orientation.
  

## Instalation

```
$ npm install screen-orientation-js
```

## Usage

```js
const screenOrientationJs = require('screen-orientation-js');
// or 
import * as screenOrientationJs from 'screen-orientation-js';

// Initialize with custom settings
screenOrientation.init({
    color:  "#7c692d",
    bgColor: "#2d7c72",
    animation: false,
    fontSize: 3
});

// or with default 
screenOrientationJs.init();
```

## Using directly in a browser

Place ```<script>``` tag in the  ```<head>``` section.

```html
<script src="https://unpkg.com/screen-orientation-js"></script>
```

```screenOrientationJs```  is available as a global variable, or ```window.screenOrientationJs```

```html

<script>
  // init with custom settings
  screenOrientationJs.init({bgColor: "#2d7c72"})
  
  // or with default 
  screenOrientationJs.init();
</script>
```

## Options
You can override the default configuration with custom settings.

```js
message: string // A custom message. Default: "Landscape orientation is not supported. Please rotate the device screen"
color: string // Text color. Default: "#0000"
fontSize: number // The font size depends on the width of the viewport. Recommended values 1-6. Default: 5
bgColor: string // Background color. Default: "#ffff"
animation: boolean // Displays the rotating phone animation. Default: true
minHeight: number // The breakpoint in viewport height to display a message. Default: 500
iconColor: string // Icon color. Default: "#1D1D1D"
iconSize: number // Icon size. Default: 10
```
  