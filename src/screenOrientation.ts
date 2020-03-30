import phone from './assets/phone.svg'
import './assets/main.css'

interface Options {
  message?: string,
  color?: string,
  bgColor?: string,
  minHeight?: number,
  animation?: boolean
}

function checkDeviceOrientation(minHeight: number = 500): boolean {
  if (window.innerHeight > minHeight) return false;
  return window.innerHeight < window.innerWidth
}

function handleOrientationChange(element: HTMLElement, { minHeight }: Options) {
  const isInLandscapeMode: boolean = checkDeviceOrientation(minHeight);
  element.style.display = isInLandscapeMode ? "flex" : "none";
}

function appendElementToDOM({ bgColor, message, color, animation = true }: Options): HTMLElement {

  const container: HTMLElement = document.createElement('div');
  const text: HTMLElement = document.createElement("div");
  const image: HTMLElement = document.createElement('img');

  container.className = "container_6467G9ha778hyjaag12ks"
  container.style.backgroundColor = bgColor || "#ffff";

  text.className = "text_ye754qks9js09uu45"
  text.innerText = message || "Landscape orientation is not supported. Please rotate device screen";
  text.style.fontSize = "5vw";
  text.style.color = color || "#00000";

  image.className = "phone_64gsteYYnL0098JdfJqiBV";
  image.setAttribute("src", phone);

  container.appendChild(text);
  if (animation) container.appendChild(image);
  document.body.appendChild(container);

  return container
}

function screenOrientation(option: Options = {}): void {
  if (!window) return
  const element: HTMLElement = appendElementToDOM(option);
  handleOrientationChange(element, option);
  window.addEventListener('resize', handleOrientationChange.bind(null, element, option));
}

export default screenOrientation


