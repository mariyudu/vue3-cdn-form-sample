// 確認項目
export const ConfirmItem = {
  props: { value: String, errorMessage: String },
  setup(props) {
    return { props }
  },
  // テンプレート
  template: `
<div v-if="!props.errorMessage"
  class="bg-teal-100 border border-teal-500 text-teal-900 px-4 py-3 rounded relative" role="info"
>
  <span class="block sm:inline">{{ props.value }}</span>
</div>
<div v-if="props.errorMessage"
  class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert"
>
  <span class="block sm:inline">{{ props.errorMessage }}</span>
</div>`
}