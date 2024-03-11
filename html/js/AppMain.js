import { createApp, Transition } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js';
import { AppModel } from './AppModel.js';
import { PageForm } from './PageForm.js';
import { PageConfirm } from './PageConfirm.js';
import { PageThanks } from './PageThanks.js';

const app = createApp();

app.component('AppMain', {
  setup() {
    const pages = {
      form: PageForm,
      confirm: PageConfirm,
      thanks: PageThanks,
    };
    return { pages, AppModel }
  },
  components: {
    Transition,
    PageForm,
    PageConfirm,
    PageThanks
  },
  template: `
<h1 class="block w-full text-center text-gray-800 text-xl font-bold mb-6">
  Vue3 (CDN) 問い合わせフォーム サンプル
</h1>
<Transition name="paging">
  <component :is="pages[AppModel.phase]" />
</Transition>`
});

app.mount("#app-main");
