import { use } from '@rndm/render';
import methods from './methods';

const plugin = {
  key: 'compare-versions',
  methods,
};

use(plugin);

export default plugin;
