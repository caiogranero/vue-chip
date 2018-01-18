<template>
  <div class="chip" @click="selectEvent">
    {{text}}
    <i @click="closeEvent" class="fa fa-times" aria-hidden="true" v-if="close">&times;</i>
  </div>
</template>

<script>
export default {
  name: 'Chip',

  props: {
    text: {
      type: String,
      default: 'You know nothing, Jon Snow!',
      required: false
    },
    select: {
      type: Boolean,
      default: false,
      required: false
    },
    close: {
      type: Boolean,
      default: false,
      required: false
    },
    id: {
      type: ['String', 'Number']
    },
    textColor: {
      type: String,
      default: '#000000',
      required: false
    },
    backgroundColor: {
      type: String,
      default: '#f1f1f1',
      required: false
    },
    selectedTextColor: {
      type: String,
      default: '#FFFFFF',
      required: false
    },
    selectedBackgroundColor: {
      type: String,
      default: '#26a69a',
      required: false
    }
  },

  mounted () {
    const chip = document.getElementsByClassName('chip')[0]

    chip.style.color = this.textColor
    chip.style.backgroundColor = this.backgroundColor
  },

  methods: {
    closeEvent () {
      this.$emit('closed', this.id)

      if (!this.id) {
        console.warn('Its recommended that you pass a id as props for the chip component, for better using to the close event')
        return false
      }
    },

    selectEvent (event) {
      const clicked = event.target || event.srcElement

      if (clicked.tagName.toString().toLowerCase() !== 'div') {
        return false
      }

      if (!this.select) {
        return false
      }

      const SELECTED = 'selected-chip'
      const chip = document.getElementsByClassName('chip')[0]

      if (chip.classList.contains(SELECTED)) {
        chip.classList.remove(SELECTED)
        chip.style.color = this.textColor
        chip.style.backgroundColor = this.backgroundColor
      } else {
        chip.classList.add(SELECTED)
        chip.style.color = this.selectedTextColor
        chip.style.backgroundColor = this.selectedBackgroundColor
      }

      this.$emit('selected', this.id)

      if (!this.id) {
        console.warn('Its recommended that you pass a id as props for the chip component, for better using to the selected event')
        return false
      }
    }
  }
}
</script>

<style scoped>
.chip {
  display: inline-block;
  padding: 0 25px;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  border-radius: 20px;
}

i {
  cursor: pointer;
}
</style>