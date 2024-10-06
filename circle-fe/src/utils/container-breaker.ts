const getScrollbarWidth = (cssVariableName = '--twcb-scrollbar-width') => {
  const prevWidth = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(cssVariableName);
  const newWidth = `${window.innerWidth - document.body.clientWidth}px`;

  if (newWidth !== prevWidth) {
    document.documentElement.style.setProperty(cssVariableName, newWidth);
  }
};

const handleEvent = () => getScrollbarWidth();

export const setScrollbarWidth = () => {
  window.addEventListener('load', handleEvent);
  window.addEventListener('resize', handleEvent);
  getScrollbarWidth();
};

// module.exports = setScrollbarWidth;