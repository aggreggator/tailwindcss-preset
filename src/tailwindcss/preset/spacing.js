const { dimensions } = require('./dimensions');

module.exports = {
  spacing: {
    ...dimensions.sm,
    ...dimensions.md,
    ...dimensions.lg,
  },
};

/*
extend: {
  margin: {
    flood: 'calc(50% - 50vw)',
  },
},*/
