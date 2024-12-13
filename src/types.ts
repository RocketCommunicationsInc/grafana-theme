export type DefaultTheme = 'dark' | 'light';
type Classification =
  | 'unclassified'
  | 'cui'
  | 'controlled'
  | 'confidential'
  | 'secret'
  | 'topSecret'
  | 'topSecretSCI'
  | undefined;
type Format = 'left' | 'center' | 'right';
export interface AstroOptions {
  defaultTheme: DefaultTheme;
  customCSS: string;
  hideTheme: boolean;
  classification: Classification;
  clock: boolean;
  format: Format;
  hidePanel: boolean;
}
