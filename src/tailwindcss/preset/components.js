const plugin = require('tailwindcss/plugin');
const { dimensions } = require('./dimensions');
const { viewport } = require('./screens');

module.exports = plugin(({ addComponents }) => {
  addComponents({
    components: {
      /**
       * The `Container` CSS component can be used as a base composition layer
       * for all content which has a maximum width restriction.
       * It should include horizontal padding for several viewports.
       * It should center by default.
       *
       * It is a key CSS component for our layout composition, not a utility class.
       */

      '.Container': {
        maxWidth: viewport.max, // max-width with viewport.max usage
        marginLeft: dimensions.width.auto, // centers the content
        marginRight: dimensions.width.auto, // centers the content
        paddingLeft: dimensions.md['4'],
        paddingRight: dimensions.md['4'],
        '@screen lg': {
          paddingLeft: dimensions.md['8'],
          paddingRight: dimensions.md['8'],
        },
        '@screen xl': {
          paddingLeft: dimensions.md['16'],
          paddingRight: dimensions.md['16'],
        },
      },
      '.Row': {
        display: 'flex',
        // flexWrap: 'wrap',
        marginLeft: `-${dimensions.md['4']}`, //
        marginRight: `-${dimensions.md['4']}`, //
        '@screen lg': {
          marginLeft: `-${dimensions.md['8']}`, //
          marginRight: `-${dimensions.md['8']}`, //
        },
        '@screen xl': {
          marginLeft: `-${dimensions.md['16']}`, //
          marginRight: `-${dimensions.md['16']}`, //
        },
      },
      '.Column': {
        paddingLeft: dimensions.md['2'], // base padding on mobile - it differs from figma definition where this value is 3 => 12px
        paddingRight: dimensions.md['2'],
        '@screen lg': {
          paddingLeft: dimensions.md['4'],
          paddingRight: dimensions.md['4'],
        },
        '@screen xl': {
          paddingLeft: dimensions.md['8'],
          paddingRight: dimensions.md['8'],
        },
      },
    },
  });
});
