// weatherBackgrounds.js

import clear1 from './assets/clear1.png';
import clear2 from './assets/clear2.png';
import cloud1 from './assets/cloud1.png';
import cloud2 from './assets/cloud2.png';
import rain1 from './assets/rain1.png';
import rain2 from './assets/rain2.png';
import thunderstorm1 from './assets/thunderstorm1.png';
import thunderstorm2 from './assets/thunderstorm2.png';
import snow1 from './assets/snow1.png';
import snow2 from './assets/snow2.png';
import mist1 from './assets/mist1.png';
import mist2 from './assets/mist2.png';
import default1 from './assets/default1.png';
import default2 from './assets/default2.png';

const weatherBackgrounds = {
  Clear: {
    left: clear1,
    right: clear2,
  },
  Clouds: {
    left: cloud1,
    right: cloud2,
  },
  Rain: {
    left: rain1,
    right: rain2,
  },
  Thunderstorm: {
    left: thunderstorm1,
    right: thunderstorm2,
  },
  Snow: {
    left: snow1,
    right: snow2,
  },
  Mist: {
    left: mist1,
    right: mist2,
  },
  Default: {
    left: default1,
    right: default2,
  },
};

export default weatherBackgrounds;
