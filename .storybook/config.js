import { configure } from '@storybook/html';

// Addons
import '@storybook/addon-console';

// automatically import all files ending in *.stories.js
  configure(require.context('../stories', true, /\.stories\.js$/), module);
