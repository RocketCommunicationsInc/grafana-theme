## About This Plugin

This panel plugin is primarly a theme plugin. It provides CSS style overrides for the Grafana dashboard in order to theme the dashboard with [Astro UXDS](https://www.astrouxds.com) colors and typography. It also provides options for a classification banner, clock, light/dark theme switching, and setting a default theme. Due to Grafana limitations, the Astro plugin _must be visible_ in order to take effect. Navigation inside of the Grafana dashboard will retain the plugin's overrides, but moving away from the dashboard will cause the styles to revert back to Grafana defaults.

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
