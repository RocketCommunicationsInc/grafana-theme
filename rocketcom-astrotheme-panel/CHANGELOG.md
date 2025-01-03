# Changelog

## 1.1.0

- Updates styles to work better with Grafana v9.5.1.
- Hide Astro Panel option
  - This option hides the astro panel via a `display: none` styling. This allows the theme to take hold, but hides the Astro panel in case it's not desired. This does however make it a bit more difficult to access the Astro panel options after it's hidden. The best way to do this is via the JSON model.
- Various style fixes to make up for markup change in the version bump.
  -Styles for Dashboard settings page, pop up menus, dialogs, toolbar buttons, annotations and links, dashboard submenu styling for active query's and annotaitons.
- Fixes issue with clock font where the clock size would change as it ticked.

## 1.0.6

- Adds monospace font to clock
- Updates logo to use black font
- Adds `skipDataQuery` option to plugin.json. The panel no longer requires or asks for a query.

## 1.0.5

- Updates links
- Updates required Grafana version

## 1.0.0 (Unreleased)

Initial release.
