# Проект "Личный кабинет пользователя"

## Начальные требования
- Docker
- NodeJS >= 16

## Docker установка
https://docs.docker.com/get-docker/

## Node js установка
Рекоммендуется использовать Node Version Manager для удобного управления версиями node.js

https://github.com/nvm-sh/nvm

Либо можно установить node.js отдельно

https://nodejs.org/en/download/

## VS Code установка
https://code.visualstudio.com/

Запуск проекта (из папки проекта в терминале):

`code .`

## Работа с помощью GNU Make
Для удобной работой с проектом используется GNU Make.

https://www.gnu.org/software/make/

Чтобы проверить установлени ли GNU Make, выполните команду:

```
make --version 
```

### В makefile доступны следующие команды

Установить зависимости для проекта

`$ make install_dependencies`

Запустить проект

`$ make start_project`

Клиент доступен по адресу: `http://localhost:8080`

## Работа без GNU Make

### Frontend установка

- Перейдите в директорию (выполнить из корня приложения):

`cd frontend`

- Установите зависимости

`$ npm install`

В директории `frontend` возможно выполнить следующие скрипты:

```
npm run dev - запуск проекта (только клиент) в режиме разработки
npm run build - создание продакшн сборки проекта
npm run preview - запуск минисервера для проверки продакшен сборки
npm run test:unit - запуск юнит тестов
npm run lint - запуск линтера
```

### Установка шаблона (не реализовано)

- Перейдите в директорию (выполнить из корня приложения)

`cd template`

- Установите зависимости

`$ npm install`

- Запуск шаблонов

`$ npm start`

Шаблон и вёрстка будут доступны по адресу: `http://localhost:9999`.

## Запуск приложения с помощью Docker

- Сборка проекта

`$ docker compose build`

### Запуск проекта с Docker

`$ docker compose down -v`

`$ docker compose up`

Клиент доступен по адресу `localhost:8080`

### Запуск проекта без Docker

- Запуск клиента (выполнить из корня приложения):

```
cd frontend && npm run dev
```

Клиент будет доспупен по адресу `localhost:8080`


## Запуск и просмотр готовой верстки проекта (статика)

### С помощью GNU Make

`$ make install_template_dependencies`

`$ make run_template`

### Без GNU Make

Перейдите в директорию template:

```
cd template 
```

Установите зависимости, выполнив команду:

```
npm install
```

Запустите проект командой:

```
npm start
```

Шаблон и вёрстка будут доступны по адресу: `http://localhost:9999`.

Вёрстку можно посмотреть в директории `template/src`.