import { AppModel } from './AppModel.js';
import { FormLabel } from './FormLabel.js';
import { FormText } from './FormText.js';
import { FormRadios } from './FormRadios.js';
import { FormSelect } from './FormSelect.js';
import { FormToggle } from './FormToggle.js';

// フォームページ
export const PageForm = {
  setup() {
    return { AppModel };
  },
  components: {
    FormLabel,
    FormText,
    FormRadios,
    FormSelect,
    FormToggle,
  },
  template: `
<form @submit.prevent>
  <div class="flex flex-col mb-4">
    <form-label label="お名前" />
    <form-text v-model="AppModel.form.name" />
  </div>
  <div class="flex flex-col mb-4">
    <form-label label="ご職業" />
    <form-select
      :options="['会社員', '公務員', '自営業', 'パート・アルバイト', '学生', 'その他']"
      v-model="AppModel.form.occupation"
    />
  </div>
  <div class="flex flex-col mb-4">
    <form-label label="メールアドレス" />
    <form-text v-model="AppModel.form.email" />
  </div>
  <div class="flex flex-col mb-4">
    <form-label label="お問い合わせ種別"></form-label>
    <form-radios
      :options="['製品について', '技術的な質問', 'その他']"
      v-model="AppModel.form.category"
    />
  </div>
  <div class="flex flex-col mb-4">
    <form-label label="お問い合わせ内容" />
    <form-text :textarea="true" v-model="AppModel.form.question" />
  </div>
  <div class="flex flex-col mb-4">
    <form-label label="個人情報の取り扱いについて" />
    <form-toggle label="個人情報の取扱いに同意する" v-model="AppModel.form.privacy" />
  </div>
  <div class="flex justify-center items-center gap-4">
    <button type="button"
      class="block bg-blue-700 hover:bg-blue-800 disabled:bg-blue-100 text-white uppercase text-md py-2 px-4 rounded"
      :disabled="!AppModel.form.privacy"
      @click="AppModel.confirm()"
    >確認</button>
  </div>
</form>`
}