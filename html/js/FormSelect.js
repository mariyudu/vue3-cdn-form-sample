// フォームドロップダウンリスト
export const FormSelect = {
  props: { id: String, modelValue: String, options: Array },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return { props, emit };
  },
  template: `
<div class="relative inline-block w-full">
  <select 
    :id="props.id"
    class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight"
    :value="props.modelValue"
    @change="emit('update:modelValue', $event.target.value)"
  >
    <option selected disabled="disabled" value="">選択してください</option>
    <option v-for="opt in props.options" :value="opt">{{ opt }}</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>`
}

