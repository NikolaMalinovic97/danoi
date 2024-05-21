export function createComponent(text) {
  const component = document.createElement('div');
  component.className = 'my-component';
  component.textContent = text;
  return component;
}
