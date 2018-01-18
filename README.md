
# vue-chip
A Chip component for Vue.js

[![npm](https://img.shields.io/npm/v/vue-chip.svg)](https://www.npmjs.com/package/vue-chip)

## Install via npm

```bash
npm install --save vue-chip
```

## Import on a single component

```js
import Chip from 'vue-chip'

export default {
  name: 'App',
  components: { Chip }
}
```

## Basic usage

```html
<chip text="Jon Snow"></chip>
```

### Properties

| name | type | default | 
|--|--| -- | 
| text | String | You know nothing, Jon Snow! | 
| select | Boolean | false | 
| close | Boolean| false | 
| id| String or Number | - | 
| textColor | String | #000000 | 
| backgroundColor | String | #f1f1f1 | 
| selectedTextColor | String | #FFFFFF | 
| selectedBackgroundColor | String | #26a69a | 

### Events

| name | description 
|-- |-- | 
| closed | Emited when user click the close action in Chip Component and return the id sent in props| 
| selected | Emited when user selectt a Chip Component and return the id sent in props | 
