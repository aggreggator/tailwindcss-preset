const { viewport } = require('./screens');
const {
  dimensions: { sm, md, lg, width, percent, screen },
} = require('./dimensions');
const all = {
  ...sm,
  ...md,
  ...lg,
  ...width,
  ...screen,
  ...percent,
};

const sizing = {
  height: {
    ...all,
  },
  minHeight: {
    ...all,
  },
  maxHeight: {
    full: width.full,
    ...md,
    ...lg,
    ...screen,
    ...percent,
  },
  width: {
    page: viewport.max,
    ...all,
  },
  minWidth: {
    ...all,
  },
  maxWidth: {
    page: viewport.max,
    full: width.full,
    ...md,
    ...lg,
    ...screen,
    ...percent,
  },
  inset: {
    ...sm,
    ...md,
    ...screen,
    ...percent,
  },
  // margin: {},
  // padding: {},
  // space: {},

  // translate: (theme, { negative }) => ({
  //   ...theme('spacing'),
  //   ...negative(theme('spacing')),
  //   '1/2': '50%',
  //   '1/3': '33.333333%',
  //   '2/3': '66.666667%',
  //   '1/4': '25%',
  //   '2/4': '50%',
  //   '3/4': '75%',
  //   full: '100%',
  //   '-1/2': '-50%',
  //   '-1/3': '-33.333333%',
  //   '-2/3': '-66.666667%',
  //   '-1/4': '-25%',
  //   '-2/4': '-50%',
  //   '-3/4': '-75%',
  //   '-full': '-100%',
  // }),
};

module.exports = { sizing };
