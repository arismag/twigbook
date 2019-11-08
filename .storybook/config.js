import { addDecorator, addParameters, configure } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';

import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';

// Add the filters to Drupal.
twigDrupal(Twig);

// Automatically import all files ending in *.stories.js
const twig = require.context('../twig', true, /\.stories\.(ts|js)$/);
function loadStories() {
  twig.keys().forEach(filename => twig(filename));
}

// Helps make UI components more accessible.
addDecorator(withA11y);
addParameters({
  options: {
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  },
  a11y: {
    restoreScroll: true,
  },
});

configure(loadStories, module);
