/**
 * Единый источник конфигурации сайта группы ЯЖИВУ.
 *
 * ВАЖНО: все внешние ссылки, контакты и адрес сайта пока пустые.
 * Заполняйте их ТОЛЬКО реальными данными — компоненты автоматически
 * скрывают то, что не заполнено (соцсети, музыкальные ссылки, контакты).
 */

export type NavItem = {
  /** Подпись пункта меню */
  label: string;
  /** Якорь на секцию главной страницы */
  href: string;
};

export type SocialLinks = {
  vk: string;
  telegram: string;
  youtube: string;
  instagram: string;
};

export type MusicLinks = {
  yandexMusic: string;
  vkMusic: string;
  youtubeMusic: string;
  spotify: string;
  appleMusic: string;
};

export type Contacts = {
  email: string;
  phone: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  /** Временная заглушка. Заменить на реальный домен после деплоя на Vercel. */
  url: string;
  navigation: NavItem[];
  socialLinks: SocialLinks;
  musicLinks: MusicLinks;
  contacts: Contacts;
};

export const siteConfig: SiteConfig = {
  name: "ЯЖИВУ",
  tagline: "ЯЖИВУ — СЕЙЧАС!",
  description: "Музыка для тех, кто продолжает.",

  // TODO: заменить на реальный домен (например, https://yazhivu.ru)
  url: "",

  navigation: [
    { label: "Музыка", href: "#music" },
    { label: "Концерты", href: "#concerts" },
    { label: "О нас", href: "#about" },
    { label: "Сообщество", href: "#community" },
    { label: "BOX", href: "#box" },
    { label: "Мерч", href: "#merch" },
    { label: "Новости", href: "#news" },
    { label: "Контакты", href: "#contacts" },
  ],

  // TODO: вставить реальные адреса профилей. Пустая строка = ссылка скрыта.
  socialLinks: {
    vk: "",
    telegram: "",
    youtube: "",
    instagram: "",
  },

  // TODO: вставить реальные ссылки на площадки. Пустая строка = ссылка скрыта.
  musicLinks: {
    yandexMusic: "",
    vkMusic: "",
    youtubeMusic: "",
    spotify: "",
    appleMusic: "",
  },

  // TODO: вставить реальные контакты. Пустая строка = контакт скрыт.
  contacts: {
    email: "",
    phone: "",
  },
};

export default siteConfig;
