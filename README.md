# screen-orientation-js

[![npm package][npm-badge]][npm]

[npm]: https://www.npmjs.org/package/screen-orientation-js
[npm-badge]: https://img.shields.io/npm/v/screen-orientation-js

Displays an animated full-screen message when the mobile device's screen is rotated horizontally.

Some applications or websites may display content properly only in portrait orientation on the mobile devices. To prevent the website's layout from breaking ,  ```screen-orientation-js```  informs the user that the app can't be viewed in landscape orientation.
  

## Installation

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

You can change the default settings by passing the config object. The default setting values will be used ​​for non-passed values.


| Key          | Value type| Description                                       | Default value                              |
|:-------------|:----------|:--------------------------------------------------|:------------------------------------------ |
| `message:`   | string    | The custom message to display.                    | ""Landscape orientation is not support..." |        
| `color:`     | string    | Text color.                                       |  #0000                                     |
| `fontSize:`  | number    | Font size. Recommended values 1-6.                |  5                                         |
| `bgColor:`   | string    | Background color.                                 |  #ffff                                     | 
| `animation:` | boolean   | The rotating phone animation.                     |  true                                      |
| `iconColor:` | string    | Icon color.                                       |  #1D1D1D                                   |
| `iconSize:`  | number    | Icon size.                                        |  10                                        |
| `minHeight:` | number    | Min viewport height in landscape mode for the component to be inactive| 500                    
  