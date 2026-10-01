"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

/**
 * MobileMenu — мобильное меню-бургер.
 * Без сторонних библиотек. Доступность:
 * - настоящие <button> для открытия/закрытия;
 * - aria-label и aria-expanded;
 * - Escape закрывает меню;
 * - выбор пункта закрывает меню;
 * - при открытии блокируется прокрутка body, при закрытии/размонтировании возвращается.
 * Соцссылки отображаются только если заполнены в config/site.ts.
 */

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Список заполненных соцссылок
  const socials = Object.entries(siteConfig.socialLinks).filter(
    ([, url]) => url.trim() !== ""
  );

  // Escape закрывает меню
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Блокировка прокрутки body при открытом меню + возврат при размонтировании
  useEffect(() => {
    if (isOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Открыть меню"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center border border-white/30 text-white"
      >
        {/* Иконка-бургер */}
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span className="absolute left-0 top-0 h-0.5 w-5 bg-white" />
          <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-white" />
          <span className="absolute bottom-0 left-0 h-0.5 w-5 bg-white" />
        </span>
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-black text-white"
        >
          <div className="flex items-center justify-between border-b border-white/15 px-5 py-4">
            <span className="text-lg font-black uppercase tracking-[0.15em]">
              {siteConfig.name}
            </span>
            <button
              type="button"
              aria-label="Закрыть меню"
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center border border-white/30 text-white"
            >
              <span aria-hidden="true" className="relative block h-4 w-4">
                <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
              </span>
            </button>
          </div>

          <nav aria-label="Мобильное меню" className="flex-1 overflow-y-auto px-5 py-8">
            <ul className="flex flex-col gap-1">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block border-b border-white/10 py-4 text-2xl font-bold uppercase tracking-wide"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {socials.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-4">
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.name} в ${name}`}
                      className="text-sm uppercase tracking-[0.2em] text-yellow"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
