# Vue 3

## Рекоммендации по настройке IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Установка зависимостей

```
npm install
```

### Запуск проекта
Запуск Сервера Vite. Проект доступен по адресу: http://localhost:8080:

```
npm run dev
```


### Сборка проекта
Сборка проекта для продакшена:

```
npm run build
```

Сборка проекта Vite:

* Код минифицируется (уменьшается размер).
* CSS объединяется и оптимизируется.
* JS разбивается на чанки (lazy-loading).
* Убираются dev-зависимости.
* Файлы помещаются в dist/

Итоговые файлы (index.html, assets/, js/, css/) сохраняются в папке dist.

### Запуск мини-сервера для проверки продакшн-сборки
```
npm run preview
```

### Запуск тестов с помощью [Vitest](https://vitest.dev/)

```
npm run test:unit
```

### Линт с помощью [ESLint](https://eslint.org/)

```
npm run lint
```