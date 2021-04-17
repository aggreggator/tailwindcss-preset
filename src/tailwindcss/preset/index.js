const { system } = require('./system');
const { screens, viewport } = require('./screens');
const { colors } = require('./colors');
const { fonts } = require('./fonts');
const { border } = require('./border');
const { spacing } = require('./spacing');
const { sizing } = require('./sizing');
const { opacity } = require('./opacity');
const { transition } = require('./transition');

// const { plugins } = require('./plugins');
// const { components } = require('../theme/components');

module.exports = {
  ...system,
  theme: {
    screens,
    viewport,
    ...border,
    colors,
    ...fonts,
    opacity,
    ...transition,
    extend: {
      spacing,
      ...sizing,
    },
  },
  // plugins,
  // components,
};
