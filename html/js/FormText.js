// フォームテキストボックス
export const FormText = {
  props: { id: String, modelValue: String, textarea: Boolean },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return { props, emit }
  },
  template: `
<input v-if="!props.textarea"
  :id="props.id"
  type="text"
  class="w-full border py-2 px-3 text-grey-800"
  placeholder="省略できません"
  :value="props.modelValue"
  @input="emit('update:modelValue', $event.target.value)"
/>
<textarea v-if="props.textarea"
  :id="props.id"
  rows="5"
  class="w-full border py-2 px-3 text-grey-800"
  placeholder="省略できません"
  :value="props.modelValue"
  @input="emit('update:modelValue', $event.target.value)"
></textarea>`
}

