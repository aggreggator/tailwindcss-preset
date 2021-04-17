// Try to group the design tokens

const dimensions = {
  sm: {
    px: '1px',
    '2px': '2px',
  },
  md: {
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '1.75rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
  },
  lg: {
    18: '4.5rem',
    20: '5rem',
    22: '5.5rem',
    24: '6rem',
    26: '6.5rem',
    28: '7rem',
    30: '7.5rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
    72: '18rem',
    80: '20em',
    96: '24rem',
  },
  width: {
    auto: 'auto',
    full: '100%',
  },
  percent: {
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
  },
  screen: {
    'screen-x': '100vw',
    'screen-x-1/2': '50vw',
    'screen-x-1/3': '33.333333vw',
    'screen-x-2/3': '66.666667vw',
    'screen-x-1/4': '25vw',
    'screen-x-3/4': '75vw',
    'screen-y': '100vh',
    'screen-y-1/2': '50vh',
    'screen-y-1/3': '33.333333vh',
    'screen-y-2/3': '66.666667vh',
    'screen-y-1/4': '25vh',
    'screen-y-3/4': '75vh',
  },
};

module.exports = { dimensions };