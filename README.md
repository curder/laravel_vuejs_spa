# Laravel和vuejs的spa简单应用示例

php 7.1.8
Laravel Valet 2.0.4

## Laravel Package
```
cd laravel-package
composer install
cp .env.example .env && touch database/database.sqlite
php artisan migrate
php artisan key:generate
```

## VueJs

```
cd vuejs-2.0-vuex
npm install
npm run dev
```
