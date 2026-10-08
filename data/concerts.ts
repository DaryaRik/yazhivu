/**
 * Данные о концертах группы ЯЖИВУ.
 *
 * НЕ добавляйте выдуманные события. Реальные концерты добавляйте объектами типа Concert.
 * Секция «КОНЦЕРТЫ» отображает только заполненные поля.
 */

export type Concert = {
  /** Уникальный идентификатор события */
  id: string;
  /** Дата в формате ISO, например "2026-10-25" */
  date: string;
  /** Город проведения */
  city: string;
  /** Название площадки */
  venue: string;
  /** Адрес площадки (необязательно) */
  address?: string;
  /** Время открытия дверей, например "17:30" (необязательно) */
  doorsTime?: string;
  /** Время начала, например "18:00" (необязательно) */
  time?: string;
  /** Ссылка на регистрацию или билеты (необязательно) */
  registrationUrl?: string;
};

/**
 * Форматирует ISO-дату концерта в человекочитаемый вид: «25 октября 2026».
 */
export function formatConcertDate(isoDate: string): string {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const [year, month, day] = isoDate.split("-");

  if (!year || !month || !day) {
    return isoDate;
  }

  const monthName = months[Number(month) - 1] ?? month;
  const dayNumber = String(Number(day));

  return `${dayNumber} ${monthName} ${year}`;
}

export const concerts: Concert[] = [
  {
    id: "kazan-2026-10-25",
    date: "2026-10-25",
    city: "Казань",
    venue: "Клуб «В-3»",
    address: "ул. Лобачевского, 16/34",
    doorsTime: "17:30",
    time: "18:00",
    registrationUrl: "https://qtickets.ru/event/263284",
  },
];

export default concerts;
