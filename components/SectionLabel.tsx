/**
 * SectionLabel — техническая подпись секции: номер + название.
 * Пример: 01 / HERO
 * Используется во всех 11 секциях, чтобы не дублировать разметку.
 */

type SectionLabelProps = {
  /** Номер секции, например "01" */
  number: string;
  /** Название секции, например "HERO" */
  title: string;
  /** Инвертированная тема для тёмного фона */
  inverted?: boolean;
};

export default function SectionLabel({
  number,
  title,
  inverted = false,
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] ${
        inverted ? "text-white/60" : "text-black/50"
      }`}
    >
      <span className="text-yellow">{number}</span>
      <span
        aria-hidden="true"
        className={`h-px w-8 ${inverted ? "bg-white/30" : "bg-black/20"}`}
      />
      <span>{title}</span>
    </div>
  );
}
