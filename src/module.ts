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
  return builder;
});
