/**
 * Музыкальные релизы группы ЯЖИВУ.
 *
 * Массив намеренно пустой. НЕ добавляйте выдуманные треки или релизы.
 * Реальные релизы добавляйте объектами типа MusicRelease.
 */

export type MusicRelease = {
  /** Уникальный идентификатор релиза */
  id: string;
  /** Название релиза */
  title: string;
  /** Тип релиза */
  type: "single" | "ep" | "album";
  /** Дата выхода в формате ISO, например "2026-05-01" */
  releaseDate: string;
  /** Ссылка на прослушивание (необязательно) */
  url?: string;
  /** Путь к обложке в /public/images (необязательно) */
  cover?: string;
};

export const musicReleases: MusicRelease[] = [];

export default musicReleases;
