import { storiesOf } from '@storybook/html';

import Image from './image.twig';
import Faker from 'faker';

const randomImage = Faker.image.image;

storiesOf('Base/Image', module)
  .add('Image', () => Image({ image:randomImage }));
