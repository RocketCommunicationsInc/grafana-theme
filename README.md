> This is a work in progress and not yet ready for use.

# Grafana Panel Plugin Template

[![Build](https://github.com/grafana/grafana-starter-panel/workflows/CI/badge.svg)](https://github.com/grafana/grafana-starter-panel/actions?query=workflow%3A%22CI%22)

This template is a starting point for building Grafana Panel Plugins in Grafana 7.0+

## What is Grafana Panel Plugin?

Panels are the building blocks of Grafana. They allow you to visualize data in different ways. While Grafana has several types of panels already built-in, you can also build your own panel, to add support for other visualizations.

For more information about panels, refer to the documentation on [Panels](https://grafana.com/docs/grafana/latest/features/panels/panels/)

## Getting started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Build plugin in development mode or run in watch mode

   ```bash
   yarn dev
   ```

   or

   ```bash
   yarn watch
   ```

3. Build plugin in production mode

   ```bash
   yarn build
   ```

## Learn more

- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System

## About This Plugin

This panel plugin is primarly a theme plugin. It provides CSS style overrides for the Grafana dashboard in order to theme the dashboard with [Astro UXDS](www.astrouxds.com) colors and typography. It also provides options for a classification banner, clock, light/dark theme switching, and setting a default theme. Due to Grafana limitations, the Astro plugin _must be visible_ in order to take effect. Navigation inside of the Grafana dashboard will retain the plugin's overrides, but moving away from the dashboard will cause the styles to revert back to Grafana defaults.

## Panel Options

- Default theme
  - Sets the default theme that the dashboard will use.
- Hide Theme Picker
  - Hides the light/dark button that provides theme switching.
- Classification Banner
  - Provides all clearance level classfication banners at the top of the Astro panel.
- Include Clock
  - Shows or hides the clock.
- Format
  - Allows user to choose left, center, or right alignemnt for the panel content.

## MIL-STD 1472 Compliance

The Astro plugin for Grafana implements the AstroUX Design System and implements requirements for Section 5.17 of MIL-STD 1472 compliance as documented at https://www.astrouxds.com/compliance/mil-std-1472/ the Astro plugin does not impact or account for core Grafana functionality. No review of Grafana’s core functionality is implied or warranted by this statement. Any user generated content is not implied or warranted. It is the responsibility of implementors and 3rd party tools to evaluate and implement any 1472 compliance. For questions or comments please contact support@astrouxds.com.

## Plugin Dependencies

- Grafana >=7.0.0
- [@emotion/react](https://www.npmjs.com/package/@emotion/react) ^11.10.4
  - Used in conjunction with [use-astro-tokens](https://www.npmjs.com/package/use-astro-tokens) to provide [Astro UXDS design tokens](https://www.astrouxds.com/design-tokens/getting-started/).
- [date-fns](https://www.npmjs.com/package/date-fns) ^2.29.3
  - Used for clock functionality.
- [use-astro-tokens](https://www.npmjs.com/package/use-astro-tokens) ^0.0.3
  - Allows for use of a custom react-hook that provides Astro UXDS design tokens.
  - This package was developed in-house by Rocket Communications Inc.
