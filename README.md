# Adapty.io Landing Page Clone

Реплика главной страницы [adapty.io](https://adapty.io) созданная с использованием React, TypeScript, Vite и Tailwind CSS.

## Технологии

- **React 19** - UI библиотека
- **TypeScript** - типизация
- **Vite** - сборщик и dev сервер
- **Tailwind CSS** - стилизация
- **Yarn** - менеджер пакетов

## Установка

```bash
yarn install
```

## Разработка

```bash
yarn dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

## Сборка

```bash
yarn build
```

## Структура проекта

```
src/
├── components/
│   ├── Hero.tsx              # Hero секция с заголовком и CTA
│   ├── TrustedBy.tsx          # Секция с логотипами клиентов
│   ├── Features.tsx           # Карточки функций (For developers/owners/marketers)
│   ├── Stats.tsx              # Секция со статистикой
│   ├── SDKIntegration.tsx     # Примеры кода SDK
│   ├── FeatureCards.tsx       # Детальные фичи с отзывами
│   ├── Testimonials.tsx       # Отзывы клиентов
│   ├── Enterprise.tsx         # Enterprise-grade секция
│   └── FinalCTA.tsx           # Финальная CTA секция
├── App.tsx                    # Главный компонент
├── main.tsx                   # Точка входа
└── index.css                  # Глобальные стили (Tailwind)

PROMPTS.md                     # История промптов для v0.dev
```

## Деплой

Проект готов к деплою на:
- **Vercel** - `vercel --prod`
- **Netlify** - `netlify deploy --prod`
- **GitHub Pages** - через GitHub Actions

## История промптов

Все промпты, использованные для создания компонентов через v0.dev, сохранены в файле [PROMPTS.md](./PROMPTS.md).

## Особенности

- ✅ Полностью адаптивный дизайн
- ✅ Современный UI с градиентами и анимациями
- ✅ Все основные секции оригинального сайта
- ✅ Оптимизированная производительность
- ✅ TypeScript для типобезопасности
