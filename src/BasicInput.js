export default {
  props: {
    placeholder: {
      type: String,
      default: 'Date'
    },
    inputClass: {
      type: [Object, Array],
      default: function() {
        return {}
      }
    },
    value: String
  }
}
