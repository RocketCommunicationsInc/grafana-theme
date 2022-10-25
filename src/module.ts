import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
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
    category: ['Themes Options'],
  });
  builder.addRadio({
    path: 'classification',
    name: 'Classification',
    defaultValue: '',
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
      ],
    },
  });
  //TODO: Look into adding a custom CSS option to panel options

  return builder;
});
