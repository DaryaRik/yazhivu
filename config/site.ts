/**
 * Единый источник конфигурации сайта группы ЯЖИВУ.
 *
 * Заполняйте поля ТОЛЬКО реальными данными — компоненты автоматически скрывают
 * то, что не заполнено (соцсети, музыкальные ссылки, контакты).
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
  /** Ссылка-агрегатор (одна на все площадки) */
  bandlink: string;
  yandexMusic: string;
  vkMusic: string;
  youtubeMusic: string;
  spotify: string;
  appleMusic: string;
  /** Звук */
  zvuk: string;
};

export type Contacts = {
  email: string;
  phone: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  /** Адрес сайта — используется для OG-превью и canonical-ссылок. */
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

  url: "https://yazhivu-band.ru",

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

  // Пустая строка = ссылка скрыта.
  socialLinks: {
    vk: "https://vk.ru/i_live_mus",
    telegram: "https://t.me/i_live_mus",
    youtube: "https://www.youtube.com/watch?v=k3tarLLKayI",
    instagram: "",
  },

  // Пустая строка = ссылка скрыта. Bandlink — агрегатор, ведёт сразу на все площадки.
  musicLinks: {
    bandlink: "https://band.link/i_live_mus",
    yandexMusic: "https://music.yandex.ru/artist/25771538",
    vkMusic: "",
    youtubeMusic: "",
    spotify: "https://open.spotify.com/artist/4q6SAtvyPra88N0uuYf10w",
    appleMusic: "https://music.apple.com/ru/artist/яживу/1891385834",
    zvuk: "https://zvuk.com/artist/214195683",
  },

  // Пустая строка = контакт скрыт.
  contacts: {
    email: "",
    phone: "",
  },
};

export default siteConfig;
