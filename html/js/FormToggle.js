// トグルスイッチ
export const FormToggle = {
  props: { id: String, modelValue: Boolean, label: String },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return { props, emit }
  },
  template: `
<label :for="props.id" class="flex items-center cursor-pointer">
  <input :id="props.id" type="checkbox" class="peer sr-only"
    :value="props.modelValue"
    :checked="props.modelValue"
    @input="emit('update:modelValue', $event.target.checked)"
  />
  <span class="block w-[2em] cursor-pointer bg-gray-500 rounded-full 
    p-[1px] after:block after:h-[1em] after:w-[1em] after:rounded-full 
    after:bg-white after:transition peer-checked:bg-blue-500 
    peer-checked:after:translate-x-[calc(100%-2px)] mr-2"></span>
    {{ props.label }}
</label>`
}
