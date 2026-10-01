"use client";

import { useState } from "react";

/**
 * SubscribeForm — форма подписки.
 * - label + input type="email";
 * - базовая проверка email средствами браузера (required + type=email);
 * - форма НЕ отправляет данные на сервер, API или сторонние сервисы;
 * - после локальной отправки показывает: «Форма будет подключена скоро».
 */

export default function SubscribeForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Никаких запросов на сервер — только локальное подтверждение.
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="w-full max-w-md"
    >
      <label
        htmlFor="subscribe-email"
        className="block text-xs font-bold uppercase tracking-[0.2em] text-white/60"
      >
        E-mail
      </label>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id="subscribe-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="flex-1 border border-white/30 bg-transparent px-4 py-3 text-white placeholder:text-white/30 focus:border-yellow focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Подписаться на рассылку"
          className="border border-yellow bg-yellow px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-transparent hover:text-yellow"
        >
          Подписаться
        </button>
      </div>

      {submitted && (
        <p
          role="status"
          className="mt-4 text-sm text-yellow"
        >
          Форма будет подключена скоро
        </p>
      )}
    </form>
  );
}
