import { storiesOf } from '@storybook/html';
import './heading.css';

import Heading from './heading.twig';

export const headline = 'Uuummmm, this is a tasty burger!';

[1, 2, 3, 4, 5, 6].forEach( level =>
    storiesOf('Base/Headings', module)
        .add(`H${level}`, () => Heading({level: level, text: headline}))
);
