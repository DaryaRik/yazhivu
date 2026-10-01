# ЯЖИВУ

Официальный сайт независимой российской музыкальной группы **ЯЖИВУ**.

> ЯЖИВУ — СЕЙЧАС!
> Музыка для тех, кто продолжает.

## Стек

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4 (через `create-next-app`)
- Семантический HTML, адаптивная mobile-first вёрстка
- Минимум зависимостей, без UI-китов

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Проверки

```bash
npm run lint    # ESLint
npm run build   # production-сборка
```

## Структура

```
app/            layout.tsx, page.tsx (11 секций), globals.css
components/     Header, MobileMenu, Footer, SubscribeForm, SectionLabel
config/         site.ts — единый источник ссылок, контактов, навигации
data/           concerts.ts, news.ts, music.ts — типы + пустые массивы
public/images/  hero, group, concerts, community, box, news
```

## Что заменить на реальные данные

Весь «внешний» контент вынесен в конфиг и модули данных. Пустые строки и
пустые массивы автоматически скрывают элементы — фейкового контента на сайте нет.

| Что | Где | Как |
| --- | --- | --- |
| Соцсети | `config/site.ts` → `socialLinks` | вписать URL вместо `""` |
| Контакты | `config/site.ts` → `contacts` | заполнить `email` / `phone` |
| Музыкальные площадки | `config/site.ts` → `musicLinks` | вписать URL |
| Домен | `config/site.ts` → `url` | реальный домен после деплоя |
| Концерты | `data/concerts.ts` | добавить объекты `Concert` |
| Новости | `data/news.ts` | добавить объекты `NewsItem` |
| Релизы | `data/music.ts` | добавить объекты `MusicRelease` |
| Фотографии | `public/images/**` | положить файлы, подключать через `next/image` с `alt` |

## Деплой

Проект готов к публикации на [Vercel](https://vercel.com) — фреймворк
определяется автоматически, дополнительная конфигурация не требуется.
