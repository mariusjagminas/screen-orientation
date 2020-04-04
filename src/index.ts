import screenOrientation from './screenOrientation'

export default screenOrientation;
// Named export 'init' relates only to the script delivery via CDN. 
// It purpose to make an invocation method more semantic, 
// and it does't change any functionality of the script.
// 
// In a browser script is available in a global namespace as an object: screenOrientationJs
// with named export 'init' we can use method .init({ ..options}) to invoke it.
// without it we would use method .default(), which is confusing. 
export { screenOrientation as init }

