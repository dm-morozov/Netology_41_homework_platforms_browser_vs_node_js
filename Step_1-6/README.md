# 📦 Шаги 1–6: Публикация библиотеки в GitHub Packages

Этот проект содержит реализацию шагов с 1 по 6 из домашнего задания по лекции **«Платформы: браузер vs Node.js»** от Нетологии.

## 📁 Структура проекта

```
Step_1-6/
├── dist/                # Сборка библиотеки
├── node_modules/        # Установленные зависимости
├── src/
│   └── index.js         # Исходный код библиотеки
├── .babelrc             # Конфигурация Babel
├── .browserslistrc      # Настройки для целевых браузеров
├── .gitignore
├── package.json         # Конфигурация проекта и зависимостей
├── webpack.config.js    # Конфигурация Webpack
└── README.md            # Описание проекта
```

## 🛠️ Используемые технологии

- JavaScript (ES6+)
- Babel
- Webpack
- GitHub Packages
- NPM

## 🔧 Шаги, выполненные в этом проекте

### ✅ Шаг 1: Инициализация проекта

- Создан репозиторий и локальная копия
- Выполнена команда `npm init --scope=@<username>` с настройкой:
  - `entry point`: `dist/index.js`
  - `repository`: ссылка на GitHub
- Создан `.gitignore`
- Выполнен `git commit` и `git push`

### ✅ Шаг 2: Получение токена

- Получен **Personal Access Token (PAT)** на GitHub с правами `write:packages`

### ✅ Шаг 3: Установка зависимостей

Установлены dev-зависимости:

```bash
npm install --save-dev @babel/cli @babel/core @babel/preset-env babel-loader webpack webpack-cli
```

### ✅ Шаг 4: Настройка `.npmrc`

Создан пользовательский `.npmrc` в домашней директории с указанием токена и реестра GitHub Packages:

```ini
//npm.pkg.github.com/:_authToken=TOKEN
registry=https://npm.pkg.github.com/USERNAME
```

### ✅ Шаг 5: Конфигурационные файлы

- `.babelrc` — настройки для Babel
- `.browserslistrc` — поддерживаемые браузеры
- `webpack.config.js` — сборка с UMD-совместимой библиотекой
- `package.json` — добавлены секции `scripts` и `publishConfig`

```json
"scripts": {
  "build": "webpack --mode production"
},
"publishConfig": {
  "registry": "https://npm.pkg.github.com/"
}
```

### ✅ Шаг 6: Исходный код библиотеки

`src/index.js`:

```js
function info() {
  const m = new Map();
  m.set('name', 'ajs');
  m.set('version', '1.0.0');
  return m;
}

export default {
  info
};
```

Выполнена сборка:  
```bash
npm run build
```

Создана финальная версия `dist/index.js`, готовая к публикации.

---

## 📌 Следующий шаг

Переходите в папку [`Step_7`](../Step_7) — использование библиотеки в Node.js.

---

Если вы хотите опубликовать эту библиотеку, выполните:

```bash
npm publish
```

---

Если у вас возникнут вопросы, обратитесь к официальной [документации GitHub Packages](https://docs.github.com/en/packages).