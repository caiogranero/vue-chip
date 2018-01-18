import Chip from './Chip.vue' 

Chip.install = function (Vue, options) {
  Vue.component('vue-chip', Chip)
}

export default Chip