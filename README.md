# Vue.js 3 を CDN から利用する例(問い合わせフォーム サンプル)

[Vue.js](https://ja.vuejs.org/) と [Tailwind CSS](https://tailwindcss.com/) それぞれの CDN 版で試作した、問い合わせウェブフォームのサンプルです。

## 仕様

* フォーム→確認表示→フォーム送信結果 という流れで表示遷移します。
* フォームでは、「個人情報の取扱いに同意する」をチェックしないと確認表示に進めないようになっています。また、全項目を必須入力項目として扱います。
* 確認表示では、フォーム項目の入力漏れだけをチェックし、入力漏れがあるとフォーム送信に進めないようになっています。
* フォーム送信結果に遷移すると同時に、API にフォーム入力内容を送信して受付チケット番号を受け取り、これをメッセージ表示します。ただし、API は受信したフォーム入力データは保存処理等は行わずに読み捨て、3秒間スリープするだけのダミープログラムです。

## 使い方

お手元の環境に PHP がインストールされている場合は、下記のようにビルトインサーバを起動した上で、ウェブブラウザにて http://localhost:8000/index.html にアクセスします。
```
php -S localhost:8000 -t html
```

PHP が未インストールでも Docker が使えるのであれば、下記のように[公式イメージ](https://hub.docker.com/_/php)を使ってビルトインサーバを起動できます。
```
docker run -it --rm -v "$PWD"/html:/usr/src/myapp -w /usr/src/myapp -p 8000:8000 --name my-php-app php:cli php -S 0.0.0.0:8000
```
