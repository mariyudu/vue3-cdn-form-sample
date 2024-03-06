// フォーム項目名
export const FormLabel = {
  props: { label: String },
  setup(props) {
    return { props }
  },
  template: `
<label class="block mb-2 text-md text-gray-700 font-bold tracking-wide">{{ props.label }}</label>`
}