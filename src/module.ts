import { PanelPlugin } from '@grafana/data';
import { AstroOptions } from './types';
import { AstroPanel } from './AstroPanel';

export const plugin = new PanelPlugin<AstroOptions>(AstroPanel).setPanelOptions((builder) => {
  builder.addRadio({
    path: 'defaultTheme',
    name: 'Default Theme',
    defaultValue: 'dark',
    settings: {
      options: [
        {
          value: 'dark',
          label: 'Dark',
        },
        {
          value: 'light',
          label: 'Light',
        },
      ],
    },
  });
  builder.addBooleanSwitch({
    name: 'Hide Theme Picker',
    path: 'hideTheme',
    defaultValue: false,
  });
  builder.addSelect({
    path: 'classification',
    name: 'Classification',
    defaultValue: 'unclassified',
    settings: {
      options: [
        {
          value: 'unclassified',
          label: 'Unclassified',
        },
        {
          value: 'cui',
          label: 'CUI',
        },
        {
          value: 'controlled',
          label: 'Controlled',
        },
        {
          value: 'confidential',
          label: 'Confidential',
        },
        {
          value: 'secret',
          label: 'Secret',
        },
        {
          value: 'topSecret',
          label: 'Top Secret',
        },
        {
          value: 'topSecretSCI',
          label: 'Top Secret//SCI',
        },
        {
          value: undefined,
          label: 'None',
        },
      ],
    },
  });
  builder.addBooleanSwitch({
    name: 'Include Clock',
    path: 'clock',
    defaultValue: false,
  });
  builder.addRadio({
    path: 'format',
    name: 'Format Astro Content',
    defaultValue: 'center',
    settings: {
      options: [
        {
          value: 'left',
          label: 'Left',
        },
        {
          value: 'center',
          label: 'Center',
        },
        {
          value: 'right',
          label: 'Right',
        },
      ],
    },
  });

  return builder;
});
