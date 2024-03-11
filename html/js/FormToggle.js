// トグルスイッチ
export const FormToggle = {
  props: { modelValue: Boolean, label: String },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    //const id = self.crypto.randomUUID(); // randomUUID() は Chrome 92(2021年)からなのでちょっと怖い
    const id = Array(10).fill(0).map((x) => '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 62)]).join('');
    return { props, emit, id }
  },
  template: `
<label :for="id" class="flex items-center cursor-pointer">
  <input :id="id" type="checkbox" class="peer sr-only"
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