// import Chip from './Chip.vue'

// export default {
//   install (Vue) {
//     Vue.component('vue-chip', Chip)
//   }
// }

import Chip from './Chip.vue' 

Chip.install = function (Vue, options) {
  Vue.component(Chip.name, Chip)
}

export default Chip