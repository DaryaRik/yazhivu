import { siteConfig } from "@/config/site";
import MobileMenu from "./MobileMenu";

/**
 * Header — фиксированная шапка.
 * - текстовый логотип ЯЖИВУ;
 * - десктопная навигация из config/site.ts;
 * - соцссылки отображаются только если заполнены;
 * - на мобильных — кнопка-бургер (MobileMenu).
 */

export default function Header() {
  const socials = Object.entries(siteConfig.socialLinks).filter(
    ([, url]) => url.trim() !== ""
  );

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <a
          href="#hero"
          aria-label={`${siteConfig.name} — на главную`}
          className="text-xl font-black uppercase tracking-[0.15em]"
        >
          {siteConfig.name}
        </a>

        {/* Десктопная навигация */}
        <nav aria-label="Основное меню" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-yellow"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Соцссылки (только заполненные) — десктоп */}
        {socials.length > 0 && (
          <ul className="hidden items-center gap-3 md:flex">
            {socials.map(([name, url]) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.name} в ${name}`}
                  className="text-xs uppercase tracking-[0.15em] text-yellow"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Мобильное меню */}
        <MobileMenu />
      </div>
    </header>
  );
}
