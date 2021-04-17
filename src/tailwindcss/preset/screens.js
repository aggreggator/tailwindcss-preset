const screens = {
  xs: '480px', // do we really need this breakpoint?
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1536px',
};

const viewport = {
  min: screens.sm,
  max: '1680px',
};

module.exports = {
  screens,
  viewport,
};
