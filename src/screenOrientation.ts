import phone from './assets/phone.svg'
import './assets/main.css'

interface Params {
  message?: string,
  color?: string,
  bgColor?: string,
  minHeight?: number,
  animation?: boolean,
  fontSize?: number
}

function setParams(options: Params): Object {
  const defaulValues: Params = {
    message: "Landscape orientation is not supported. Please rotate device screen",
    color: "#00000",
    bgColor: "#ffff",
    minHeight: 500,
    animation: true,
    fontSize: 5
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

function appendElementToDOM({ bgColor, message, color, animation, fontSize }: Params): HTMLElement {
  const container: HTMLElement = document.createElement('div');
  const text: HTMLElement = document.createElement("div");
  const image: HTMLElement = document.createElement('img');

  container.className = "container_6467G9ha778hyjaag12ks"
  container.style.backgroundColor = `${bgColor}`;

  text.innerText = `${message}`;
  text.className = "text_ye754qks9js09uu45"
  text.style.fontSize = `${fontSize}vw`;
  text.style.color = `${color}`;

  image.className = "phone_64gsteYYnL0098JdfJqiBV";
  image.setAttribute("src", phone);

  container.appendChild(text);
  if (animation) container.appendChild(image);
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

export default screenOrientation


