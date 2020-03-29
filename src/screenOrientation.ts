interface Options {
  message?: string,
  color?: string,
  bgColor?: string,
  minHeight?: number
}

function checkDeviceOrientation(minHeight: number = 500): boolean {
  if (window.innerHeight > minHeight) return false;
  return window.innerHeight < window.innerWidth
}

function handleOrientationChange(element: HTMLElement, { minHeight }: Options) {
  const isInLandscapeMode: boolean = checkDeviceOrientation(minHeight);
  element.style.display = isInLandscapeMode ? "flex" : "none";
}

function appendElementToDOM({ bgColor, message, color }: Options): HTMLElement {
  const styles: string = "position: fixed; z-index: 999999; top: 0; left: 0; bottom: 0; right: 0; display: none; justify-content: center; align-items: center;"
  const div: HTMLElement = document.createElement("div");

  div.innerText = message || "Landscape orientation is not supported";
  div.style.cssText = styles
  div.style.backgroundColor = bgColor || "#ffff";
  div.style.fontSize = "5vw";
  div.style.color = color || "#00000";
  document.body.appendChild(div);

  return div
}

function screenOrientation(option: Options = {}): void {
  if (!window) return
  const element: HTMLElement = appendElementToDOM(option);
  handleOrientationChange(element, option);
  window.addEventListener('resize', handleOrientationChange.bind(null, element, option));
}

export default screenOrientation


