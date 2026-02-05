export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatYearRange(startYear: number) {
  const y = new Date().getFullYear();
  return startYear === y ? `${y}` : `${startYear}–${y}`;
}
