# laravel-sw-precache (wepback.mix.js)
On this repository i'm using laravel 5.6 and sw-precache plugin for webpack to do all the heavy lifting installing the service worker.

This project has full support for offline first.

To get started download or clone the project.

Then cd into the app and run `composer install` to install all dependencies.

After that is done run `php artisan serve` and the terminal will show you the url which most likely will be `http://127.0.0.1:8000`.
The service-worker.js file is generated from webpack.mix.js

And that's it. You're all good to go.

I you are unclear about PWA or service workers i have a very detailed article that explains how to make them work with laravel.You might want to check it out https://medium.com/@kristitanellari/laravel-pwa-from-webpack-mix-js-11c313d5d918
