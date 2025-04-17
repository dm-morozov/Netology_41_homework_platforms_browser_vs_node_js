# Step 8 — Использование библиотеки в браузере (через GitHub + Statically)

## 🎯 Цель

В этом шаге мы подключаем опубликованную библиотеку из GitHub-репозитория напрямую в браузер. GitHub не предоставляет собственного CDN, поэтому используется [Statically CDN](https://statically.io/) для генерации ссылки.

---

## 📁 Подключение скрипта

В HTML-файле мы подключаем скрипт из GitHub через Statically CDN:

```html
<script src="https://cdn.statically.io/gh/dm-morozov/Netology_41_homework_platforms_browser_vs_node_js/refs/heads/main/Step_1-6/dist/index.js"></script>
```

После чего можно вызывать функции из глобального объекта `ajs`:

```html
<script>
  console.log(ajs.info());
</script>
```

---

## 🧪 Проверка в JSBin

Для быстрой проверки работоспособности кода был использован сервис [JSBin](https://jsbin.com/):

▶ **JSBin с примером подключения**  
🔗 [https://jsbin.com/liwohiwowu/edit?html,console](https://jsbin.com/liwohiwowu/edit?html,console)

---

## 🔗 Ссылки

- 📦 **Ссылка на репозиторий с библиотекой**  
  ➤ [https://github.com/dm-morozov/Netology_41_homework_platforms_browser_vs_node_js/tree/main/Step_1-6](https://github.com/dm-morozov/Netology_41_homework_platforms_browser_vs_node_js/tree/main/Step_1-6)

- 🧩 **Ссылка на проект с использованием библиотеки в Node.js**  
  ➤ [https://github.com/dm-morozov/Netology_41_homework_platforms_browser_vs_node_js/tree/main/Step_7](https://github.com/dm-morozov/Netology_41_homework_platforms_browser_vs_node_js/tree/main/Step_7)

- 🌐 **Ссылка на JSBin**  
  ➤ [https://jsbin.com/liwohiwowu/edit?html,console](https://jsbin.com/liwohiwowu/edit?html,console)

-  🔗 **Ссылка на проект с использованием библиотеки в браузере**  
  ➤ [https://github.com/dm-morozov/Netology_41_homework_platforms_browser_vs_node_js/tree/main/Step_8_link_raw_of_github](https://github.com/dm-morozov/Netology_41_homework_platforms_browser_vs_node_js/tree/main/Step_8_link_raw_of_github)

---

## ✅ Результат

- Библиотека успешно подключается в браузере напрямую с GitHub.
- Работает без сборщиков (Webpack, Vite) и без установки через npm.
- Пример протестирован на JSBin.