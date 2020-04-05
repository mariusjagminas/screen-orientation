import './assets/main.css'
import svg from './svgPhone'

interface Params {
  message?: string,
  color?: string,
  bgColor?: string,
  minHeight?: number,
  animation?: boolean,
  fontSize?: number,
  iconColor?: string,
  iconSize?: number
}

function setParams(options: Params): Object {
  const defaulValues: Params = {
    message: "Landscape orientation is not supported. Please rotate device screen",
    color: "#00000",
    bgColor: "#ffff",
    minHeight: 500,
    animation: true,
    fontSize: 5,
    iconColor: "#1D1D1D",
    iconSize: 10
  }

  return Object.assign(defaulValues, options)
}

function checkDeviceOrientation(minHeight: any): boolean {
  if (window.innerHeight > minHeight) return false;
  return window.innerHeight < window.innerWidth
}

function handleOrientationChange(element: HTMLElement, { minHeight }: Params) {
  const isInLandscapeMode: boolean = checkDeviceOrientation(minHeight);
  element.style.display = isInLandscapeMode ? "flex" : "none";
}

function appendElementToDOM({ bgColor, message, color, animation, fontSize, iconColor, iconSize }: Params): HTMLElement {
  const container: HTMLElement = document.createElement('div');
  const text: HTMLElement = document.createElement("div");
  const svgWrapper: HTMLElement = document.createElement('div');

  container.className = "container_6467G9ha778hyjaag12ks"
  container.style.backgroundColor = `${bgColor}`;

  text.innerText = `${message}`;
  text.className = "text_ye754qks9js09uu45"
  text.style.fontSize = `${fontSize}vw`;
  text.style.color = `${color}`;

  svgWrapper.className = "svg_64gsteYYnL0098JdfJqiBV";
  svgWrapper.innerHTML = svg(iconColor, iconSize);

  container.appendChild(text);
  if (animation) container.appendChild(svgWrapper);
  document.body.appendChild(container);

  return container
}

function screenOrientation(params: Params = {}): void {
  if (!window) return

  const updatedParams = setParams(params);
  const element: HTMLElement = appendElementToDOM(updatedParams);
  handleOrientationChange(element, updatedParams);
  window.addEventListener('resize', handleOrientationChange.bind(null, element, updatedParams));
}

export { screenOrientation };


