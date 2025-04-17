# Step 7 — Использование опубликованной библиотеки

## 📦 Цель шага

На этом этапе была реализована и опубликована библиотека на GitHub Packages, а затем продемонстрировано её использование:
- в среде Node.js;
- в браузере.

## ⚙️ Содержание проекта

```
Netology_41_homework_platforms_browser_vs_node_js/
└── Step_7/
    ├── node_modules/         # Установленные зависимости
    ├── src/                  # Исходный код (демонстрация использования библиотеки)
    ├── .gitignore
    ├── package.json          # Описание пакета, включая зависимость на GitHub-библиотеку
    ├── package-lock.json
    └── README.md             # Описание проекта (текущий файл)
```

## 📚 Используемая библиотека

В этом шаге подключается опубликованная библиотека с GitHub Packages, например:

```json
"dependencies": {
  "@username/library-name": "1.0.0"
}
```

> ⚠️ В `package.json` обязательно указывается `repository` и `publishConfig` для корректной публикации.

## 🚀 Запуск в Node.js

Пример использования библиотеки в Node.js находится в `src/node-app.js`.

Запуск:

```bash
node src/node-app.js
```

## 🌐 Запуск в браузере

Для запуска в браузере создан HTML-файл, подключающий ESM-модуль библиотеки:

```html
<script type="module">
  import { functionName } from 'https://cdn.jsdelivr.net/npm/@username/library-name/+esm';
  functionName();
</script>
```

Открыть HTML-файл в браузере с помощью Live Server или встроенного сервера.

## 🛠 Команды

```bash
npm install            # Установить зависимости
npm publish            # Публикация пакета на GitHub Packages (предварительно настроен .npmrc)
```

## ✅ Результат

- Библиотека опубликована на GitHub Packages.
- Успешно подключена и использована как в Node.js-приложении, так и в браузере через CDN.