// フォームラジオボタン群
export const FormRadios = {
  props: { idPrefix: String, modelValue: String, options: Array },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const radioName = Array(10).fill(0).map((x) => '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 62)]).join('');
    return { props, emit, radioName };
  },
  template: `
<div class="relative inline-block w-full">
  <div class="flex items-center mb-1"
    v-for="(option, n) in props.options" :key="option"
  >
    <input :id="props.idPrefix + n" type="radio" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
      :id="radioName + '-' + n" :name="radioName"
      :value="option"
      :checked="props.modelValue === option"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <label class="text-sm text-gray-500 ms-2 dark:text-gray-400"
      :for="radioName + '-' + n"
    >{{ option }}</label>
  </div>
</div>`
}

