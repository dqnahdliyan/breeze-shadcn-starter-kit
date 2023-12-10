### How to Use

```bash
git clone https://github.com/dqnahdliyan/breeze-shadcn-starter-kit.git laravel
cd laravel
composer install
cp .env.example .env
php artisan key:generate
npm i && npm run build
php artisan serve
```

> Make sure you have `PHP 8.1` and `NodeJS v16`

### Laravel Inertia React w/ Tailwind-ShadcnUI Starter Kit

This project has come with some features like:

-   Authentication with Email or Username
-   Profile Photo for Users
-   Dark Mode toggle

NOTE:
In order to use Profile Photo changer, you have to run `php artisan storage:link`
and change the `FILESYSTEM_DISK` from `local` to `public` in `.env` file

### About Laravel

Laravel is an open-source PHP framework, which is robust and easy to understand. It follows a model-view-controller design pattern. Laravel reuses the existing components of different frameworks which helps in creating a web application. The web application thus designed is more structured and pragmatic.

### Thanks for

-   [Laravel](https://github.com/laravel/framework)
-   [Inertia JS](https://github.com/inertiajs/inertia) & [React JS](https://github.com/facebook/react)
-   [Vite](https://vitejs.dev/) & [Vite Plugin](https://github.com/laravel/vite-plugin)
-   [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
-   [Shadcn UI](https://ui.shadcn.com/)
-   [Lucide Icon](https://lucide.dev/)
