import { siteConfig } from "@/config/site";

/**
 * Footer — подвал сайта.
 * - id="contacts" (цель якоря «Контакты»);
 * - текстовый логотип;
 * - навигация;
 * - реальные соцссылки, email и телефон — только если заполнены в config/site.ts;
 * - текущий год через new Date().getFullYear();
 * - «Политика конфиденциальности» ведёт на "#".
 */

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = Object.entries(siteConfig.socialLinks).filter(
    ([, url]) => url.trim() !== ""
  );

  const { email, phone } = siteConfig.contacts;

  return (
    <footer id="contacts" className="bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Логотип и слоган */}
          <div>
            <p className="text-2xl font-black uppercase tracking-[0.15em]">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              {siteConfig.description}
            </p>
          </div>

          {/* Навигация */}
          <nav aria-label="Навигация в подвале">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Разделы
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-yellow"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Контакты и соцсети */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Контакты
            </p>

            {/* Email и телефон — только если заполнены */}
            {(email || phone) && (
              <ul className="mb-4 space-y-2 text-sm">
                {email && (
                  <li>
                    <a
                      href={`mailto:${email}`}
                      className="text-white/80 transition-colors hover:text-yellow"
                    >
                      {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-white/80 transition-colors hover:text-yellow"
                    >
                      {phone}
                    </a>
                  </li>
                )}
              </ul>
            )}

            {/* Соцсети — только заполненные */}
            {socials.length > 0 && (
              <ul className="flex flex-wrap gap-4">
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.name} в ${name}`}
                      className="text-sm uppercase tracking-[0.15em] text-yellow"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {!email && !phone && socials.length === 0 && (
              <p className="text-sm text-white/40">Контакты появятся скоро.</p>
            )}
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <a href="#" className="transition-colors hover:text-yellow">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
