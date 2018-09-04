export {}

declare global {
  interface String {
    format(...replacements: string[]): string;
  }

  interface Date {
    getYearAndMonthCode(): number;
  }
}

