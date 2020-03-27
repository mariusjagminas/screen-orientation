function checkDeviceOrientation(minHeight) {
    if (minHeight === void 0) { minHeight = 500; }
    if (window.innerHeight > minHeight)
        return false;
    return window.innerHeight < window.innerWidth;
}
function handleOrientationChange(element, _a) {
    var minHeight = _a.minHeight;
    var isInLandscapeMode = checkDeviceOrientation(minHeight);
    element.style.display = isInLandscapeMode ? "flex" : "none";
}
function appendElementToDOM(_a) {
    var bgColor = _a.bgColor, message = _a.message, color = _a.color;
    var styles = "position: fixed; z-index: 999999; top: 0; left: 0; bottom: 0; right: 0; display: none; justify-content: center; align-items: center;";
    var div = document.createElement("div");
    div.innerText = message || "Landscape orientation is not supported";
    div.style.cssText = styles;
    div.style.backgroundColor = bgColor || "#ffff";
    div.style.fontSize = "5vw";
    div.style.color = color || "#00000";
    document.body.appendChild(div);
    return div;
}
function screenOrientation(option) {
    if (option === void 0) { option = {}; }
    if (!window)
        return;
    var element = appendElementToDOM(option);
    handleOrientationChange(element, option);
    window.addEventListener('resize', handleOrientationChange.bind(null, element, option));
}
screenOrientation();
