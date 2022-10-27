export type DefaultTheme = 'dark' | 'light';
type Classification = 'unclassified' | 'cui' | 'controlled' | 'confidential' | 'secret' | 'topSecret' | 'topSecretSCI';
type Format = 'left' | 'center' | 'right';
export interface SimpleOptions {
  defaultTheme: DefaultTheme;
  customCSS: string;
  hideTheme: boolean;
  classification: Classification;
  clock: boolean;
  format: Format;
}
