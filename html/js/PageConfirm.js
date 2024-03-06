import { AppModel } from './AppModel.js';
import { FormLabel } from './FormLabel.js';
import { ConfirmItem } from './ConfirmItem.js';

// 確認ページ
export const PageConfirm = {
  setup() {
    const validateErrorCount = () => {
      const errors = AppModel.validateErros
      let errorItems = Object.keys(errors).filter((k) => errors[k])
      return errorItems.length
    };
    return { AppModel, validateErrorCount };
  },
  components: {
    FormLabel,
    ConfirmItem,
  },
  // テンプレート
  template: `
<form>
  <div class="flex flex-col mb-4">
    <form-label label="お名前" />
    <confirm-item
      :value="AppModel.form.name"
      :error-message="AppModel.validateErros.name"
    />
  </div>
  <div class="flex flex-col mb-4">
    <form-label label="ご職業" />
    <confirm-item
      :value="AppModel.form.occupation"
      :error-message="AppModel.validateErros.occupation"
    />
  </div>
  <div class="flex flex-col mb-4">
    <form-label label="メールアドレス" />
    <confirm-item
      :value="AppModel.form.email"
      :error-message="AppModel.validateErros.email"
    />
  </div>
  <div class="flex flex-col mb-4">
    <form-label label="お問い合わせ種別" />
    <confirm-item
      :value="AppModel.form.category"
      :error-message="AppModel.validateErros.category"
    />
  </div>
  <div class="flex flex-col mb-4">
    <form-label label="お問い合わせ内容" />
    <confirm-item
      :value="AppModel.form.question"
      :error-message="AppModel.validateErros.question"
    />
  </div>
  <div class="flex flex-col mb-4">
    <form-label label="個人情報の取り扱いについて" />
    <confirm-item value="個人情報の取扱いに同意する" />
  </div>
  <div class="flex justify-center items-center gap-4">
    <button type="button"
      class="block bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 text-gray-900 text-md py-2 px-4 rounded"
      @click="AppModel.back()"
    >戻る</button>
    <button type="button"
      class="block bg-blue-700 hover:bg-blue-800 disabled:bg-blue-100 text-white text-md py-2 px-4 rounded"
      :disabled="validateErrorCount() > 0"
      @click="AppModel.submit()"
    >送信</button>
  </div>
</form>`
}