import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import SubscribeForm from "@/components/SubscribeForm";
import { siteConfig } from "@/config/site";
import { musicReleases } from "@/data/music";
import { concerts, formatConcertDate } from "@/data/concerts";
import { news } from "@/data/news";

/**
 * Главная страница ЯЖИВУ.
 * 11 структурных секций. Технический каркас — без финального дизайна,
 * сложных анимаций, магазина, оплаты, CMS и реальной отправки форм.
 */

const MUSIC_LINK_LABELS: Record<string, string> = {
  bandlink: "Bandlink — все площадки",
  yandexMusic: "Яндекс Музыка",
  vkMusic: "VK Музыка",
  youtubeMusic: "YouTube Music",
  spotify: "Spotify",
  appleMusic: "Apple Music",
  zvuk: "Звук",
};

export default function Home() {
  const telegramUrl = siteConfig.socialLinks.telegram.trim();

  const musicPlatforms = Object.entries(siteConfig.musicLinks)
    .filter(([, url]) => url.trim() !== "")
    .map(([key, url]) => ({ key, url, label: MUSIC_LINK_LABELS[key] ?? key }));

  return (
    <>
      <Header />

      <main>
        {/* 01 / HERO */}
        <section
          id="hero"
          className="relative bg-black text-white"
          aria-labelledby="hero-title"
        >
          {/* Фоновое изображение hero (public/images/hero) */}
          <Image
            src="/images/hero/hero-01.jpg"
            alt="Группа ЯЖИВУ в поле на закате"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Затемнение, чтобы текст читался поверх фото */}
          <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
          <div className="relative mx-auto flex min-h-[80vh] w-full max-w-6xl flex-col justify-center px-5 py-24">
            <SectionLabel number="01" title="HERO" inverted />
            <h1
              id="hero-title"
              className="mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            >
              ЯЖИВУ — СЕЙЧАС!
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70 sm:text-xl">
              Музыка для тех, кто продолжает.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#music"
                className="border border-yellow bg-yellow px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-transparent hover:text-yellow"
              >
                Слушать музыку
              </a>
              <a
                href="#concerts"
                className="border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-yellow hover:text-yellow"
              >
                Ближайшие концерты
              </a>
            </div>
          </div>
        </section>

        {/* 02 / КТО МЫ */}
        <section
          id="about"
          className="bg-paper text-black"
          aria-labelledby="about-title"
        >
          <div className="mx-auto w-full max-w-6xl px-5 py-24">
            <SectionLabel number="02" title="КТО МЫ" />
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              <div>
                <h2
                  id="about-title"
                  className="text-4xl font-black uppercase tracking-tight sm:text-5xl"
                >
                  Кто мы
                </h2>
                <p className="mt-6 max-w-md text-lg text-black/70">
                  Материалы о группе будут добавлены. Здесь появится честный
                  рассказ о том, кто мы и зачем делаем эту музыку.
                </p>
              </div>
              {/* Фотографии группы (public/images/group) */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-black/15">
                  <Image
                    src="/images/group/group-01.jpg"
                    alt="Группа ЯЖИВУ — ночной портрет"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden border border-black/15">
                  <Image
                    src="/images/group/group-02.jpg"
                    alt="Солистка ЯЖИВУ"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Атмосферный кадр на всю ширину (public/images/group) */}
            <div className="relative mt-14 aspect-[21/9] w-full overflow-hidden border border-black/15">
              <Image
                src="/images/hero/hero-02.jpg"
                alt="ЯЖИВУ — группа на траве в сумерках"
                fill
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-cover object-center"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </section>

        {/* 03 / НАША МУЗЫКА */}
        <section
          id="music"
          className="bg-black text-white"
          aria-labelledby="music-title"
        >
          <div className="mx-auto w-full max-w-6xl px-5 py-24">
            <SectionLabel number="03" title="НАША МУЗЫКА" inverted />
            <h2
              id="music-title"
              className="mt-8 text-4xl font-black uppercase tracking-tight sm:text-5xl"
            >
              Наша музыка
            </h2>

            {musicReleases.length === 0 ? (
              <div className="mt-10 border border-white/15 px-6 py-16 text-center">
                <p className="text-2xl font-bold uppercase tracking-[0.15em] text-yellow">
                  Первый релиз скоро
                </p>
              </div>
            ) : (
              <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {musicReleases.map((release) => (
                  <li
                    key={release.id}
                    className="border border-white/15 p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      {release.type}
                    </p>
                    <p className="mt-2 text-xl font-bold uppercase">
                      {release.title}
                    </p>
                    {release.url && (
                      <a
                        href={release.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm uppercase tracking-[0.15em] text-yellow"
                      >
                        Слушать
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* Ссылки на площадки: показываются только заполненные в config/site.ts */}
            {musicPlatforms.length > 0 && (
              <ul className="mt-10 flex flex-wrap gap-3">
                {musicPlatforms.map(({ key, url, label }) => (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-yellow hover:text-yellow"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* 04 / КОНЦЕРТЫ */}
        <section
          id="concerts"
          className="bg-paper text-black"
          aria-labelledby="concerts-title"
        >
          <div className="mx-auto w-full max-w-6xl px-5 py-24">
            <SectionLabel number="04" title="КОНЦЕРТЫ" />
            <h2
              id="concerts-title"
              className="mt-8 text-4xl font-black uppercase tracking-tight sm:text-5xl"
            >
              Концерты
            </h2>

            {concerts.length === 0 ? (
              <div className="mt-10 border border-black/15 px-6 py-16 text-center">
                <p className="text-2xl font-bold uppercase tracking-[0.15em] text-black/70">
                  Следующие даты скоро
                </p>
              </div>
            ) : (
              <ul className="mt-10 divide-y divide-black/10 border-y border-black/10">
                {concerts.map((concert) => (
                  <li
                    key={concert.id}
                    className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-lg font-bold uppercase">
                        {concert.city} · {concert.venue}
                      </span>
                      {concert.address && (
                        <span className="text-sm text-black/60">
                          {concert.address}
                        </span>
                      )}
                      {(concert.doorsTime || concert.time) && (
                        <span className="text-sm text-black/60">
                          {concert.doorsTime ? `Двери ${concert.doorsTime}` : ""}
                          {concert.doorsTime && concert.time ? " · " : ""}
                          {concert.time ? `начало ${concert.time}` : ""}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-start gap-3 sm:items-end">
                      <span className="text-sm font-bold uppercase tracking-wide">
                        {formatConcertDate(concert.date)}
                      </span>
                      {concert.registrationUrl && (
                        <a
                          href={concert.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-black px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:bg-yellow hover:border-yellow"
                        >
                          Вход по регистрации
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Концертные кадры (public/images/concerts) */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[3/2] w-full overflow-hidden border border-black/15">
                <Image
                  src="/images/concerts/live-01.jpg"
                  alt="ЯЖИВУ — силуэты на гребне у дерева"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden border border-black/15">
                <Image
                  src="/images/concerts/live-02.jpg"
                  alt="ЯЖИВУ — концертный кадр"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 05 / ФИЛОСОФИЯ */}
        <section
          id="philosophy"
          className="bg-black text-white"
          aria-labelledby="philosophy-title"
        >
          <div className="mx-auto w-full max-w-4xl px-5 py-32">
            <SectionLabel number="05" title="ФИЛОСОФИЯ" inverted />
            <h2 id="philosophy-title" className="sr-only">
              Философия
            </h2>
            <blockquote className="mt-10 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              <p>Мы не можем изменить весь мир к лучшему.</p>
              <p>Но мы можем попытаться изменить мир внутри тех,</p>
              <p>кто к этому готов.</p>
            </blockquote>
            <p className="mt-10 text-3xl font-black uppercase tracking-tight text-yellow sm:text-4xl">
              ЯЖИВУ — СЕЙЧАС!
            </p>
          </div>
        </section>

        {/* 06 / СООБЩЕСТВО */}
        <section
          id="community"
          className="bg-paper text-black"
          aria-labelledby="community-title"
        >
          <div className="mx-auto w-full max-w-6xl px-5 py-24">
            <SectionLabel number="06" title="СООБЩЕСТВО" />
            <h2
              id="community-title"
              className="mt-8 text-4xl font-black uppercase tracking-tight sm:text-5xl"
            >
              Сообщество
            </h2>
            <div className="mt-6 max-w-xl space-y-1 text-lg text-black/70">
              <p>Мы вместе.</p>
              <p>Делитесь своим «я живу».</p>
              <p>Вдохновляй других.</p>
            </div>
            {/* Галерея сообщества (public/images/community) */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  src: "/images/community/community-01.jpg",
                  alt: "ЯЖИВУ — кадр с поднятой рукой",
                },
                {
                  src: "/images/community/community-02.jpg",
                  alt: "ЯЖИВУ — кадр у дерева",
                },
                {
                  src: "/images/community/community-03.jpg",
                  alt: "ЯЖИВУ — на фоне неба",
                },
                {
                  src: "/images/community/community-04.jpg",
                  alt: "ЯЖИВУ — на поле",
                },
              ].map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[3/4] w-full overflow-hidden border border-black/15"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07 / BOX */}
        <section
          id="box"
          className="bg-black text-white"
          aria-labelledby="box-title"
        >
          <div className="mx-auto w-full max-w-6xl px-5 py-24">
            <SectionLabel number="07" title="BOX" inverted />
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-yellow">
              ЯЖИВУ / BOX 01
            </p>
            <h2
              id="box-title"
              className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl"
            >
              Собираем первый выпуск
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Музыка, карточки, вещи и маленькие действия, которые остаются с
              тобой после концерта.
            </p>

            {/* Кадры, из которых собирается первый выпуск BOX (public/images/box) */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/15">
                <Image
                  src="/images/box/box-01.jpg"
                  alt="ЯЖИВУ — кадр для первого выпуска BOX"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/15">
                <Image
                  src="/images/box/box-02.jpg"
                  alt="ЯЖИВУ — деталь для первого выпуска BOX"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="mt-10">
              {telegramUrl ? (
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-yellow bg-yellow px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-transparent hover:text-yellow"
                >
                  Узнать первым
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  aria-label="Узнать первым о BOX — скоро"
                  className="cursor-not-allowed border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white/40"
                >
                  Скоро
                </button>
              )}
            </div>
          </div>
        </section>

        {/* 08 / МЕРЧ */}
        <section
          id="merch"
          className="bg-paper text-black"
          aria-labelledby="merch-title"
        >
          <div className="mx-auto w-full max-w-6xl px-5 py-24">
            <SectionLabel number="08" title="МЕРЧ" />
            <h2
              id="merch-title"
              className="mt-8 text-4xl font-black uppercase tracking-tight sm:text-5xl"
            >
              Мерч / Скоро
            </h2>
            <p className="mt-6 max-w-xl text-lg text-black/70">
              Вещи ЯЖИВУ сейчас в работе.
            </p>
          </div>
        </section>

        {/* 09 / НОВОСТИ */}
        <section
          id="news"
          className="bg-black text-white"
          aria-labelledby="news-title"
        >
          <div className="mx-auto w-full max-w-6xl px-5 py-24">
            <SectionLabel number="09" title="НОВОСТИ" inverted />
            <h2
              id="news-title"
              className="mt-8 text-4xl font-black uppercase tracking-tight sm:text-5xl"
            >
              Новости
            </h2>

            {news.length === 0 ? (
              <div className="mt-10 border border-white/15 px-6 py-16 text-center">
                <p className="text-2xl font-bold uppercase tracking-[0.15em] text-yellow">
                  Новости скоро
                </p>
              </div>
            ) : (
              <ul className="mt-10 grid gap-6 md:grid-cols-2">
                {news.map((item) => (
                  <li key={item.id} className="border border-white/15 p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      {item.date}
                    </p>
                    <p className="mt-2 text-xl font-bold uppercase">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm text-white/70">{item.excerpt}</p>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm uppercase tracking-[0.15em] text-yellow"
                      >
                        Читать
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* 10 / ПОДПИСКА */}
        <section
          id="subscribe"
          className="bg-dark-gray text-white"
          aria-labelledby="subscribe-title"
        >
          <div className="mx-auto w-full max-w-6xl px-5 py-24">
            <SectionLabel number="10" title="ПОДПИСКА" inverted />
            <h2
              id="subscribe-title"
              className="mt-8 max-w-2xl text-4xl font-black uppercase tracking-tight sm:text-5xl"
            >
              Подпишись и не пропусти главное
            </h2>
            <div className="mt-10">
              <SubscribeForm />
            </div>
          </div>
        </section>

        {/* 11 / ФИНАЛЬНЫЙ ЭКРАН */}
        <section
          id="final"
          className="bg-black text-white"
          aria-labelledby="final-title"
        >
          <div className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center px-5 py-32 text-center">
            <SectionLabel number="11" title="ФИНАЛЬНЫЙ ЭКРАН" inverted />
            <p
              id="final-title"
              className="mt-10 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            >
              ЯЖИВУ — СЕЙЧАС!
            </p>
            <p className="mt-6 text-lg text-white/60">Жизнь продолжается.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
