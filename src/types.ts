type DefaultTheme = 'dark' | 'light';
type Classification = 'unclassified' | 'cui' | 'controlled' | 'confidential' | 'secret' | 'topSecret' | 'topSecretSCI';

export interface SimpleOptions {
  defaultTheme: DefaultTheme;
  customCSS: string;
  hideTheme: boolean;
  classification: Classification;
}
