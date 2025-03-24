import { Mode, useAstroTokens } from 'use-astro-tokens';
import React, { useEffect, useState } from 'react';

import { AstroOptions } from 'types';
import { Clock } from './Clock';
import { Global } from '@emotion/react';
import { PanelProps } from '@grafana/data';

interface Props extends PanelProps<AstroOptions> {}

export const AstroPanel: React.FC<Props> = ({ options }) => {
  const [mode, setMode] = useState<Mode>(options.defaultTheme);
  const astro = useAstroTokens({ mode });

  const handleThemeSwitch = (mode: Mode) => {
    if (mode === 'dark') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    handleThemeSwitch(options.defaultTheme);
  }, [options.defaultTheme]);

  const classificationMap = {
    unclassified: 'UNCLASSIFIED',
    cui: 'CUI',
    controlled: 'CONTROLLED',
    confidential: 'CONFIDENTIAL',
    topSecret: 'TOP SECRET',
    secret: 'SECRET',
    topSecretSCI: 'TOP SECRET//SCI',
  };
  return (
    <div
      className={`astro-panel-container astro-panel-container--${options.format} ${
        options.hidePanel ? 'hide-astro-panel' : ''
      }`}
    >
      {options.classification ? (
        <div className={'class-banner class-' + options.classification}>
          {classificationMap[options.classification]}
        </div>
      ) : null}
      {options.clock ? <Clock defaultTheme={options.defaultTheme} /> : null}
      {options.hideTheme === true ? null : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
            <div
              className="astro-btn"
              onClick={() => {
                mode === 'dark' ? handleThemeSwitch('light') : handleThemeSwitch('dark');
              }}
              style={{ height: '28px', padding: '0.25rem 4rem' }}
            >
              {mode === 'dark' ? 'Light Theme' : 'Dark Theme'}
            </div>
          </div>
        </div>
      )}
      <Global
        //@ts-ignore
        styles={{
          '[class$="-page-wrapper"]': {
            backgroundColor: astro.color.background.base.default,
          },
          '.main-view > div': {
            backgroundColor: astro.color.background.surface.header,
            boxShadow: 'none',
            //? This targets the nave toolbar directly below the search bar. Do we want this to be a diff color?
            '[data-testid="data-testid Nav toolbar"]': {
              backgroundColor: astro.color.background.base.default,
              paddingTop: astro.spacing(2),
            },
          },
          'a[role="option"] > div::before': {
            ':hover': {
              backgroundColor: astro.color.background.interactive.hover,
            },
          },
          'a[role="option"][aria-selected="true"] > div': {
            backgroundColor: astro.color.background.surface.selected,
            '::before': {
              backgroundImage: `linear-gradient(0.01deg, ${astro.color.background.interactive.default} 0.01%, ${astro.color.background.interactive.default} 99.99%)`,
            },
          },
          '.sidemenu': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
          '.btn': {
            backgroundColor: astro.color.background.interactive.default,
            borderRadius: astro.radius.base,
            backgroundImage: 'none',
            color: astro.color.text.black,
          },
          'button[aria-label="Open navigation menu"]': {
            backgroundColor: astro.color.background.surface.default,
            ':hover': {
              backgroundColor: astro.color.background.surface.hover,
            },
          },
          'svg:not(:root)': {
            fill: astro.color.background.interactive.default,
          },
          //TODO: Update to not target this auto-gen class
          //! Targets an auto-generated Emotion class. This classname may change in future builds.
          //! This is the bar next to the selected icon in the nav. The important override here is the backgroundImage: none;
          '.css-1uf1299::before': {
            backgroundImage: 'none',
            backgroundColor: astro.color.background.interactive.default,
          },
          'button[role="menuitemradio"]': {
            background: astro.color.background.surface.default,
            color: astro.color.text.interactive.default,
            '&:hover': {
              background: astro.color.background.interactive.hover,
              color: astro.color.text.inverse,
            },
          },
          'button[aria-checked="true"]': {
            background: astro.color.background.surface.selected,
          },
          //add menu
          'div[role="menu"]': {
            background: astro.color.background.surface.default,
            color: astro.color.text.interactive.default,
            border: `1px solid ${astro.palette.brightblue[700]}`,
          },
          //add menu buttons & panel options menu
          'button[role="menuitem"]': {
            color: astro.color.text.interactive.default,
            ':hover:not([disabled])': {
              backgroundColor: astro.color.background.base.hover,
              color: astro.color.text.interactive.hover,
              svg: {
                fill: astro.color.background.interactive.hover,
              },
            },
            ':disabled': {
              opacity: '0.4',
              cursor: 'not-allowed',
              ':hover': {
                color: astro.color.text.interactive.default,
                background: astro.color.background.surface.default,
              },
            },
          },
          //pop up menus from hovering icons in nav
          'ul[role="menu"]': {
            background: astro.color.background.base.default,
            color: astro.color.text.interactive.default,
            border: `1px solid ${astro.palette.brightblue[700]}`,
          },
          'ul[role="menu"] > li[role="menuitem"] a': {
            background: astro.color.background.surface.header,
            color: astro.color.text.interactive.default,
            '&:hover': {
              color: astro.color.text.interactive.hover,
              background: astro.color.background.base.hover,
            },
          },
          //nav breadcrumb
          'nav[aria-label="Breadcrumbs"]': {
            'div[class$="-Icon"] svg': {
              fill: astro.color.text.primary,
              opacity: 0.4,
              ':hover': {
                fill: astro.color.text.primary,
                opacity: 0.4,
              },
            },
            a: {
              color: astro.color.text.interactive.default,
              textDecoration: 'none',
              ':hover': {
                color: astro.color.text.interactive.hover,
                textDecoration: 'none',
              },
            },
            span: {
              color: astro.color.text.primary,
            },
          },
          'nav a[data-testid="data-testid Nav menu item"]': {
            ':hover': {
              backgroundColor: astro.color.background.base.hover,
            },
          },
          //add panel button
          'button[class$="-button-add-panel-button-add-panel-button-text"]': {
            border: `1px solid ${astro.color.border.interactive.default}`,
            color: astro.color.text.interactive.default,
            ':hover': {
              border: `1px solid ${astro.color.border.interactive.hover}`,
              color: astro.color.text.interactive.hover,
              svg: {
                fill: astro.color.background.interactive.hover,
              },
            },
          },

          //Nav item pop-up-menus that only have a button
          'ul[role="menu"] > li[role="menuitem"] > div > button': {
            background: astro.color.background.surface.header,
            color: astro.color.text.interactive.default,
            '&:hover': {
              color: astro.color.text.interactive.hover,
              background: astro.color.background.base.hover,
            },
          },
          'li[role="menuitem"] a': {
            background: astro.color.background.base.default,
            color: astro.color.text.interactive.default,
            '&:hover': {
              color: astro.color.text.interactive.hover,
              background: astro.color.background.base.hover,
            },
          },

          //menu item divider
          'div[data-testid="dropdown-child-divider"]': {
            borderBottom: '1px solid #51555b',
          },
          //dashboard and panels
          header: {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
          '[class$="-panel-container"]': {
            backgroundColor: astro.color.background.surface.default,
            color: astro.color.text.primary,
          },
          //Target .panel-container in a way that's agnostic of what's in front. ie, .css-ewer33r-panel-container
          '.panel-container': {
            backgroundColor: astro.color.background.surface.default,
            color: astro.color.text.primary,
          },
          '.panel-title': {
            backgroundColor: astro.color.background.surface.header,
            color: astro.color.text.primary,
            h2: {
              ...astro.typography.h4,
            },
          },
          '.dashboard-row': {
            color: astro.color.text.primary,
          },
          '.dashboard-row__title': {
            color: astro.color.text.primary,
          },
          'nav a': {
            color: astro.color.text.primary,
          },
          '.page-toolbar': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
            width: '100%',
          },
          //info tootip on panels
          '.panel-info-corner--info .panel-info-corner-inner': {
            backgroundColor: astro.color.background.surface.default,
            borderLeft: `32px solid ${astro.color.background.surface.header}`,
          },
          '.panel-info-corner .fa': {
            color: astro.color.text.interactive.default,
          },
          '.grafana-portal-container': {
            background: astro.color.background.surface.default,
            color: astro.color.text.primary,
            border: `1px solid ${astro.color.border.interactive}`,
          },
          //! Targets an auto-generated Emotion class. This classname may change in future builds.
          //TODO: Update to not target this auto-gen class
          '.css-7dcs73': {
            background: astro.color.background.base.default,
            border: `1px solid ${astro.color.border.interactive.muted}`,
            color: astro.color.text.primary,
          },
          '.div[data-popper-placement*="top"] .tooltip-arrow::before': {
            borderColor: `${astro.color.border.interactive.muted} transparent transparent`,
          },
          'div[data-popper-placement*="top"] .tooltip-arrow::after': {
            borderColor: `${astro.color.border.interactive.muted} transparent transparent`,
          },
          'button[class$="-toolbar-button"]': {
            background: astro.color.background.surface.default,
            color: astro.color.text.primary,
            borderRadius: astro.radius.base,
            ':not(:last-child)': {
              borderRightWidth: '1px',
            },
            ':hover': {
              border: `1px solid ${astro.color.background.interactive.hover}`,
              background: astro.color.background.surface.default,
            },
          },
          //TimePicker button
          'button[class$="-toolbar-button"][aria-controls="TimePickerContent"]': {
            color: astro.color.text.interactive.default,
            background: astro.color.background.base.default,
            border: `1px solid ${astro.color.border.interactive.default}`,
            ':hover': {
              color: astro.color.text.interactive.hover,
              border: `1px solid ${astro.color.border.interactive.hover}`,
            },
          },
          '.dashboard-settings': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
          '.dashboard-settings__aside': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
          '.dashboard-settings__aside + div': {
            backgroundColor: astro.color.background.surface.default,
            color: astro.color.text.primary,
          },
          //Annotation on a graph
          // 'div[data-popper-reference-hidden="false"]': {
          //   background: astro.color.background.surface.default,
          // },
          // 'div[data-popper-reference-hidden="false"] > :first-child': {
          //   background: astro.color.background.surface.header,
          // },
          'form div textarea[class^="css-"]': {
            ...astro.typography.body1,
            background: astro.color.background.base.default,
            border: `1px solid ${astro.color.border.interactive.muted}`,
            ':hover': {
              outline: 'none',
              borderColor: astro.color.border.interactive.hover,
            },
          },
          //Backround for dashboards
          body: {
            background: astro.color.background.base.default,
          },
          'input[class$="-input-input"], ': {
            // boxShadow: `${astro.color.border.interactive.muted} 0 0 0 1px inset`,
            border: `1px solid ${astro.color.border.interactive.muted}`,
            borderRadius: astro.radius.base,
            ...astro.typography.body1,
            color: astro.color.text.primary,
            backgroundColor: astro.color.background.base.default,
            ':hover': {
              // boxShadow: `${astro.color.border.interactive.hover} 0 0 0 1px inset`,
              border: `1px solid ${astro.color.border.interactive.hover}`,
              outline: 'none',
            },
          },
          'button[class*="-toolbar-button"]': {
            background: astro.color.background.surface.default,
            //navbar icons - ie star (favorite)
            ':hover': {
              svg: {
                fill: astro.color.background.interactive.hover,
              },
            },
          },
          //sliders
          '.rc-slider.rc-slider-horizontal': {
            '.rc-slider-track': {
              backgroundColor: astro.color.background.interactive.default,
            },
            '.rc-slider-handle': {
              border: `2px solid ${astro.color.border.interactive.default}`,
              backgroundColor: astro.color.background.base.default,
              ':hover': {
                borderColor: astro.color.border.interactive.hover,
              },
            },
            '.rc-slider-handle:active': {
              borderColor: astro.color.border.interactive.hover,
            },
            // '.rc-slider-handle:focus': {
            //   boxShadow: `0 0 0 5px ${astro.color.border.interactive.hover}`,
            // },
            '.rc-slider-handle-dragging.rc-slider-handle-dragging': {
              borderColor: astro.color.border.interactive.hover,
              boxShadow: `0 0 0 1px ${astro.color.border.interactive.hover}`,
            },
          },
          //annotation menu
          'div[class*="-input-wrapper"], .slate-query-field': {
            border: `1px solid ${astro.color.border.interactive.muted}`,
            borderRadius: astro.radius.base,
            ...astro.typography.body1,
            color: astro.color.text.primary,
            backgroundColor: astro.color.background.base.default,
            ':hover': {
              // boxShadow: `${astro.color.border.interactive.hover} 0 0 0 1px inset`,
              border: `1px solid ${astro.color.border.interactive.hover}`,
              outline: 'none',
            },
          },
          //tables
          'div[role="row"][class$="-thead"]': {
            boxShadow: `rgba(0, 0, 0, 0.45) 0px 0.25rem 0.5rem`,
          },
          'div[role="row"]': {
            color: astro.color.text.primary,
            borderColor: astro.color.background.base.default,
            ':hover': {
              background: astro.color.background.surface.hover,
            },
          },
          'div[role="row"] > div[role="cell"]': {
            borderTop: `1px solid ${astro.color.background.base.default}`,
          },
          'div[role="cell"]': {
            borderColor: astro.color.background.base.default,
            borderBottomWidth: '1px',
            ':hover': {
              background: astro.color.background.surface.hover,
            },
          },
          'div[role="columnheader"]': {
            border: 'none',
            // borderColor: astro.color.background.base.default,
            background: astro.color.background.surface.default,
            // borderBottom: `1px solid ${astro.color.border.interactive.muted}`,
            button: {
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '24px',
              color: astro.color.text.primary,
            },
          },
          //* Astro Panel CSS
          //Attempts at hiding Astro panel entriely but keeping the theme alive
          '[class$="-panel-container"]:has(.hide-astro-panel)': {
            display: 'none',
          },
          //theme switch button
          '.astro-btn': {
            height: '28px',
            width: '80px',
            border: 'none',
            display: 'flex',
            position: 'relative',
            margin: astro.spacing(0),
            padding: astro.spacing(2, 4),
            borderRadius: astro.radius.base,
            color: astro.color.text.inverse,
            ...astro.typography.body1,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            userSelect: 'none',
            backgroundColor: astro.color.background.interactive.default,
            ':hover': {
              borderColor: 'transparent',
              backgroundColor: astro.color.background.interactive.hover,
            },
          },
          //format content left, center, right
          '.astro-panel-container': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
          },
          '.astro-panel-container--left': {
            alignItems: 'flex-start',
          },
          '.astro-panel-container--center': {
            alignItems: 'center',
          },
          '.astro-panel-container--right': {
            alignItems: 'flex-end',
          },
          //classification banners
          '.class-banner': {
            height: '24px',
            width: '100%',
            overflow: 'hidden',
            textAlign: 'center',
            color: astro.color.text.primary,
            fontWeight: astro.typography.fontWeight.bold,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '.class-unclassified': {
            background: astro.color.classification.unclassified,
            color: astro.color.text.white,
          },
          '.class-cui': {
            background: astro.color.classification.cui,
            color: astro.color.text.white,
          },
          '.class-controlled': {
            background: astro.color.classification.cui,
            color: astro.color.text.white,
          },
          '.class-confidential': {
            background: astro.color.classification.confidential,
            color: astro.color.text.white,
          },
          '.class-secret': {
            background: astro.color.classification.secret,
            color: astro.color.text.white,
          },
          '.class-topSecret': {
            background: astro.color.classification.topsecret,
            color: astro.color.text.black,
          },
          '.class-topSecretSCI': {
            background: astro.color.classification.topsecretsci,
            color: astro.color.text.black,
          },
          //scrollbars
          '.track-horizontal': {
            '.thumb-horizontal': {
              background: astro.color.border.interactive.muted,
              borderRadius: '8px',
              border: '1px solid transparent',
              backgroundClip: 'padding-box',
              ':hover': {
                backgroundColor: astro.color.background.interactive.default,
              },
            },
          },
          '.track-vertical': {
            '.thumb-vertical': {
              background: astro.color.border.interactive.muted,
              borderRadius: '8px',
              backgroundClip: 'padding-box',
              border: '1px solid transparent',
              ':hover': {
                backgroundColor: astro.color.background.interactive.default,
              },
            },
          },
          // dialog
          '[role="dialog"]': {
            backgroundColor: astro.color.background.surface.default,
            '[class$="-modalHeader"]': {
              backgroundColor: astro.color.background.surface.header,
              width: '100%',
              padding: astro.spacing(4),
              margin: 0,
            },
            //dialog buttons - secondary for all but last button
            '[class$="-horizontal-group"] [class$="-layoutChildrenWrapper"]:not(:last-child) button': {
              backgroundColor: 'transparent',
              border: `1px solid ${astro.color.border.interactive.default}`,
              color: astro.color.text.interactive.default,
              ':hover': {
                color: astro.color.text.interactive.hover,
                border: `1px solid ${astro.color.border.interactive.hover}`,
              },
            },
            '[class$="-horizontal-group"] [class$="-layoutChildrenWrapper"]:last-child button': {
              //reg styling
              backgroundColor: astro.color.background.interactive.default,
              borderRadius: astro.radius.base,
              color: astro.color.text.inverse,
              ':disabled': {
                opacity: '0.4',
                cursor: 'not-allowed',
                ':hover': {
                  background: astro.color.background.interactive.default,
                },
              },
              ':hover': {
                borderColor: 'transparent',
                backgroundColor: astro.color.background.interactive.hover,
                color: astro.color.text.inverse,
              },
              svg: {
                fill: 'black',
              },
            },
            'button[aria-label="Dashboard settings aside actions Save button"], button[aria-label="Confirm Modal Danger Button"]':
              {
                backgroundColor: astro.color.background.interactive.default,
                borderRadius: astro.radius.base,
                color: astro.color.text.inverse,
                ...astro.typography.body1,
                ':hover': {
                  borderColor: 'transparent',
                  backgroundColor: astro.color.background.interactive.hover,
                  color: astro.color.text.inverse,
                },
              },
          },
          //*edit panel view. ie, add panel
          // Discard, save and apply buttons in top right
          'button[title="Undo all changes"]': {
            //seconday styling, red border
            backgroundColor: 'transparent',
            border: `1px solid ${astro.color.border.interactive.default}`,
            color: astro.color.text.interactive.default,
            ':hover': {
              color: astro.color.text.interactive.hover,
              border: `1px solid ${astro.color.border.interactive.hover}`,
            },
          },
          'button[title="Apply changes and save dashboard"]': {
            backgroundColor: 'transparent',
            border: `1px solid ${astro.color.border.interactive.default}`,
            color: astro.color.text.interactive.default,
            ':hover': {
              color: astro.color.text.interactive.hover,
              border: `1px solid ${astro.color.border.interactive.hover}`,
            },
          },
          'button[title="Apply changes and go back to dashboard"]': {
            backgroundColor: astro.color.background.interactive.default,
            borderRadius: astro.radius.base,
            color: astro.color.text.inverse,
            ':disabled': {
              opacity: '0.4',
              cursor: 'not-allowed',
              ':hover': {
                background: astro.color.background.interactive.default,
              },
            },
            ':hover': {
              borderColor: 'transparent',
              backgroundColor: astro.color.background.interactive.hover,
              color: astro.color.text.inverse,
            },
          },
          //toolbar, ie Table View radio, fill/actual seg button
          'div.Pane.horizontal': {
            '[class$="-horizontal-group"] [class$="-layoutChildrenWrapper"]': {
              '> div > div': {
                backgroundColor: astro.color.background.surface.default,
                color: astro.color.text.interactive.default,
                label: {
                  color: astro.color.text.interactive.default,
                  ':hover': {
                    color: astro.color.text.interactive.hover,
                  },
                },
              },
            },
          },
          'div[aria-label="Panel editor option pane content"]': {
            '> div:nth-child(2) > div > div': {
              backgroundColor: astro.color.background.surface.default,
            },
            '.scrollbar-view': {
              backgroundColor: astro.color.background.surface.default,
              '> div': {
                backgroundColor: astro.color.background.surface.default,
              },
              'button[data-testid*="suggestion"]': {
                border: `1px solid ${astro.color.border.interactive.default}`,
                background: astro.color.background.base.default,
                ':hover': {
                  border: `1px solid ${astro.color.border.interactive.hover}`,
                  background: astro.color.background.base.hover,
                },
              },
            },
            'input[class$="-input-input"]': {
              border: 'none',
            },
          },
          //attempt at getting new panel selection drop down
          'div:has(> [class$="currentVisualizationItem"])': {
            background: astro.color.background.surface.default,
            '[aria-label]': {
              background: astro.color.background.base.default,
              ':hover': {
                background: astro.color.background.base.hover,
                cursor: 'pointer',
                border: `1px solid ${astro.color.border.interactive.hover}`,
              },
            },
            '> [class$="currentVisualizationItem"]': {
              border: `1px solid ${astro.color.border.interactive.default}`,
              ':hover': {
                border: `1px solid ${astro.color.border.interactive.hover}`,
              },
            },
          },
          //* panel editor data pane
          // tab bar - may also effect left nav in settings page
          'div[role="tablist"]': {
            backgroundColor: astro.color.background.surface.header,
            a: {
              color: astro.color.text.interactive.default,
              ':hover': {
                color: astro.color.text.interactive.hover,
                svg: {
                  fill: astro.color.background.interactive.hover,
                },
              },
            },
            'a[class$="-activeTabStyle"]': {
              color: astro.color.text.primary,
              ':before': {
                backgroundImage: `linear-gradient(270deg, ${astro.color.background.interactive.default} 0%, ${astro.color.background.interactive.default} 100%)`,
              },
            },
          },
          // panel addition, data editor pane
          'div[aria-label="Panel editor data pane content"]': {
            '.scrollbar-view': {
              backgroundColor: astro.color.background.surface.default,
              '[class$="-Header"]': {
                backgroundColor: astro.color.background.surface.header,
              },
              label: {
                background: astro.color.background.surface.header,
              },
              'button[class$="-button"]': {
                backgroundColor: astro.color.background.interactive.default,
                borderRadius: astro.radius.base,
                color: astro.color.text.inverse,
                ...astro.typography.body1,
                ':hover': {
                  borderColor: 'transparent',
                  backgroundColor: astro.color.background.interactive.hover,
                  color: astro.color.text.inverse,
                },
                svg: {
                  fill: astro.color.text.black,
                },
              },
            },
          },
          //transform data
          'div[class$="-layoutChildrenWrapper"] div[aria-label^="New transform"]': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
            ':hover': {
              backgroundColor: astro.color.background.base.hover,
            },
          },
          //Alert tab
          '.Pane.horizontal.Pane2': {
            'div[class$="-layoutChildrenWrapper"] div[aria-label^="New transform"]': {
              backgroundColor: astro.color.background.base.default,
              color: astro.color.text.primary,
              ':hover': {
                backgroundColor: astro.color.background.base.hover,
              },
            },
            backgroundColor: astro.color.background.surface.default,
            'div[aria-label="Unified alert editor tab content"]': {
              backgroundColor: astro.color.background.base.default,
            },
            'a[class$="-button"]': {
              background: astro.color.background.interactive.default,
              color: astro.color.text.inverse,
              ':hover': {
                background: astro.color.background.interactive.hover,
              },
              'div[class$="-Icon"] svg': {
                fill: astro.color.text.inverse,
              },
            },
            'div[aria-label="Panel editor data pane content"] > div:first-child > div:nth-child(2)': {
              backgroundColor: astro.color.background.surface.default,
            },
            // '*': {
            //   backgroundColor: 'inherit',
            // },
          },
          //save dashboard slide out dialog
          'div[aria-label="Drawer title Save dashboard"]': {
            '> div:first-child': {
              backgroundColor: astro.color.background.surface.header,
            },
            // '> div > div:nth-child(2)': {
            //   backgroundColor: astro.color.background.surface.header,
            // },
            'button[type="button"][class$="-button"]': {
              //secondary styling
              backgroundColor: 'transparent',
              border: `1px solid ${astro.color.border.interactive.default}`,
              color: astro.color.text.interactive.default,
              ':hover': {
                backgroundColor: 'transparent',
                color: astro.color.text.interactive.hover,
                border: `1px solid ${astro.color.border.interactive.hover}`,
              },
            },
            'button[class$="-button"]': {
              backgroundColor: astro.color.background.interactive.default,
              borderRadius: astro.radius.base,
              color: astro.color.text.inverse,
              ...astro.typography.body1,
              ':disabled': {
                opacity: '0.4',
                cursor: 'not-allowed',
                ':hover': {
                  background: astro.color.background.interactive.default,
                },
              },
              ':hover': {
                borderColor: 'transparent',
                backgroundColor: astro.color.background.interactive.hover,
                color: astro.color.text.inverse,
              },
            },
          },
          //* Settings Page
          //Style delete dashboard button
          'div[class$="-page-content"] button[class$="-button"][aria-label="Dashboard settings page delete dashboard button"]':
            {
              background: astro.color.status.critical,
              border: `1px solid ${astro.palette.red[700]}`,
              color: astro.color.text.primary,
              ':hover': {
                color: astro.color.text.primary,
                background: astro.palette.red[400],
                border: `1px solid ${astro.color.status.critical}`,
              },
            },
          //most all other buttons that can't be targeted nicely
          'div[class$="-page-content"] button[class$="-button"]': {
            //reg styling
            backgroundColor: astro.color.background.interactive.default,
            borderRadius: astro.radius.base,
            color: astro.color.text.inverse,
            border: 'none',
            ':disabled': {
              opacity: '0.4',
              cursor: 'not-allowed',
              ':hover': {
                background: astro.color.background.interactive.default,
              },
            },
            ':hover': {
              borderColor: 'transparent',
              backgroundColor: astro.color.background.interactive.hover,
              color: astro.color.text.inverse,
            },
            svg: {
              fill: 'black',
            },
          },
          //add permissions
          'div[aria-label="Permissions slider"]': {
            background: astro.color.background.surface.header,
            borderColor: astro.color.status.normal,
          },
          //upper right buttons
          'button[data-testid="data-testid dashboard-settings-close"]': {
            //secondary styling
            backgroundColor: 'transparent',
            border: `1px solid ${astro.color.border.interactive.default}`,
            color: astro.color.text.interactive.default,
            ':hover': {
              backgroundColor: 'transparent',
              color: astro.color.text.interactive.hover,
              border: `1px solid ${astro.color.border.interactive.hover}`,
            },
          },
          'button[aria-label="Dashboard settings aside actions Save As button"]': {
            //secondary styling
            backgroundColor: 'transparent',
            border: `1px solid ${astro.color.border.interactive.default}`,
            color: astro.color.text.interactive.default,
            ':hover': {
              backgroundColor: 'transparent',
              color: astro.color.text.interactive.hover,
              border: `1px solid ${astro.color.border.interactive.hover}`,
            },
          },
          'button[aria-label="Dashboard settings aside actions Save button"]': {
            //reg styling
            backgroundColor: astro.color.background.interactive.default,
            borderRadius: astro.radius.base,
            color: astro.color.text.inverse,
            ':disabled': {
              opacity: '0.4',
              cursor: 'not-allowed',
              ':hover': {
                background: astro.color.background.interactive.default,
              },
            },
            ':hover': {
              borderColor: 'transparent',
              backgroundColor: astro.color.background.interactive.hover,
              color: astro.color.text.inverse,
            },
          },
          //left nav
          'div[class$="-page-panes"]': {
            'nav .scrollbar-view ': {
              'div[role="tablist"]': {
                background: astro.color.background.surface.default,
                'a:hover': {
                  background: astro.color.background.base.hover,
                },
                'a[class$="-activeTabStyle"]': {
                  backgroundColor: astro.color.background.surface.selected,
                },
              },
            },
          },
          //* Annotations page inside Settings page
          '.filter-table button': {
            em: {
              color: astro.color.text.black,
            },
            thead: {
              background: astro.palette.darkblue[900],
            },
            tr: {
              background: astro.palette.darkblue[800],
            },
          },
          '.filter-table': {
            borderCollapse: 'collapse',
            tbody: {
              thead: {
                background: astro.palette.darkblue[900],
              },
              tr: {
                background: astro.palette.darkblue[800],
                borderBottom: '1px solid black',
                ':nth-child(odd)': {
                  borderBottom: '1px solid black',
                  background: astro.palette.darkblue[800],
                },
                ':hover': {
                  background: astro.palette.brightblue[800],
                },
              },
            },
          },
          //main page
          'div[class$="-page-inner"]': {
            background: astro.color.background.surface.default,
            'div[class$="-call-to-action-card"]': {
              background: astro.palette.darkblue[800],
              svg: {
                fill: 'black',
              },
            },
          },
          //* Headings
          h1: {
            color: astro.color.text.primary,
            ...astro.typography.h1,
          },
          h2: {
            color: astro.color.text.primary,
            ...astro.typography.h2,
          },
          h3: {
            color: astro.color.text.primary,
            ...astro.typography.h3,
          },
          h6: {
            color: astro.color.text.primary,
            ...astro.typography.h6,
          },
          //* Checkboxes
          'input[type="checkbox"] + span': {
            background: astro.color.background.base.default,
            border: `1px solid ${astro.color.border.interactive.default}`,
            padding: '8px',
            ':hover': {
              border: `1px solid ${astro.color.border.interactive.hover}`,
            },
          },
          'input[type="checkbox"]:checked + span': {
            background: astro.color.background.base.default,
            border: `1px solid ${astro.color.border.interactive.default}`,
            padding: '8px',
            ':hover': {
              background: astro.color.background.base.default,
              borderColor: astro.color.border.interactive.hover,
            },
            ':after': {
              borderColor: astro.color.background.interactive.default,
              borderWidth: '0px 2px 2px 0px',
            },
          },
          'input[type="checkbox"]:disabled + span': {
            background: astro.color.background.base.default,
            opacity: 0.4,
            cursor: 'not-allowed',
          },
          //End Checkboxes
          //* Switch
          'input[type="checkbox"] + label[aria-label="Toggle switch"], input[type="checkbox"] + label[aria-label="Toggle view"]':
            {
              background: astro.color.background.base.default,
              border: `1px solid ${astro.color.border.interactive.muted}`,
              ':hover': {
                '::after': {
                  borderColor: astro.color.border.interactive.hover,
                },
              },
              '::after': {
                background: astro.color.background.base.default,
                border: `1px solid ${astro.color.border.interactive.default}`,
              },
            },
          'input[type="checkbox"]:checked + label[aria-label="Toggle switch"], input[type="checkbox"]:checked + label[aria-label="Table view"]':
            {
              background: astro.color.background.interactive.default,
            },
          'input[type="checkbox"]#table-view + label': {
            background: astro.color.background.base.default,
            border: `1px solid ${astro.color.border.interactive.muted}`,
            ':hover': {
              '::after': {
                borderColor: astro.color.border.interactive.hover,
              },
            },
            '::after': {
              background: astro.color.background.base.default,
              border: `1px solid ${astro.color.border.interactive.default}`,
            },
          },
          'input[type="checkbox"]:checked#table-view + label': {
            background: astro.color.background.interactive.default,
          },
          'div:has(> label.inline-switch-label)': {
            background: astro.color.background.surface.default,
            border: `1px solid ${astro.color.border.interactive.default}`,
            ':hover': {
              border: `1px solid ${astro.color.border.interactive.hover}`,
            },
            'label.inline-switch-label': {
              color: astro.color.text.primary,
              ':hover': {
                color: astro.color.text.primary,
              },
            },
          },
          //End Switch
          //* Seg button
          //! ugly border on the parent of this below selector. Can't get to it without :has
          'div:has(> input[type="radio"])': {
            border: '3px solid transparent',
            background: 'tranparent',
            padding: 0,
          },
          'input[type="radio"], input[type="radio"][id*="radiogroup"]': {
            ':checked': {
              '+ label': {
                background: astro.color.background.surface.selected,
                color: `${astro.color.text.primary} !important`,
              },
            },
            '+ label': {
              background: astro.color.background.base.default,
              color: astro.color.text.interactive.default,
              border: `1px solid ${astro.color.border.interactive.default}`,
              ':hover': {
                color: astro.color.text.interactive.hover,
                border: `1px solid ${astro.color.border.interactive.hover}`,
              },
              ':not(:last-child)': {
                borderRight: 'none',
              },
            },
          },
          //end Seg btn
          //* label divs
          'div[class$="-Label"]': {
            color: astro.color.text.primary,
          },
          //* Option Groups - headers of panel options in edit panel view
          '.options-group > div:first-child': {
            background: astro.color.background.base.header,
            color: astro.color.text.primary,
          },
          //* Textareas
          'textarea, textarea[class^="css-"]': {
            background: astro.color.background.base.default,
            border: `1px solid ${astro.color.border.interactive.muted}`,
            ':hover': {
              outline: 'none',
              borderColor: astro.color.border.interactive.hover,
            },
          },
          //end Textarea
          //* Timepicker drop down
          'div#TimePickerContent': {
            background: astro.color.background.surface.default,
            //remove double border from inputs
            'div[class*="-input-wrapper"]': {
              border: 'none',
            },
            //suffix buttons on inputs
            'div[class$="input-addon"]': {
              'button[class$="-button"]': {
                border: 'none',
              },
            },
            //time ranges on right side
            'ul[aria-roledescription="Time range selection"]': {
              'li input:checked + label': {
                color: astro.color.text.primary,
              },
            },
            'button[class$="-button"]': {
              backgroundColor: astro.color.background.interactive.default,
              borderRadius: astro.radius.base,
              color: astro.color.text.inverse,
              ':disabled': {
                opacity: '0.4',
                cursor: 'not-allowed',
                ':hover': {
                  background: astro.color.background.interactive.default,
                },
              },
              ':hover': {
                borderColor: 'transparent',
                backgroundColor: astro.color.background.interactive.hover,
                color: astro.color.text.inverse,
              },
              svg: {
                fill: 'black',
              },
            },
            'section[aria-label="Time zone selection"]': {
              background: astro.color.background.base.default,
            },
            //* React Calendar
            'section[aria-label="Time Range calendar"]': {
              //first div is the header
              '> div': {
                background: astro.color.background.base.header,
                color: astro.color.text.primary,
              },
              '.react-calendar': {
                background: astro.color.background.surface.default,
                border: `1px solid ${astro.color.border.interactive.muted}`,
                //navigation buttons, ie arrows and month label
                'react-calendar__navigation__label': {
                  color: astro.color.text.primary,
                },
                '.react-calendar__navigation__arrow': {
                  background: 'transparent',
                  color: astro.color.text.interactive,
                  svg: {
                    fill: astro.color.background.interactive.default,
                  },
                  ':hover': {
                    svg: {
                      fill: astro.color.background.interactive.hover,
                    },
                  },
                },
                //day of week labels
                '.react-calendar__month-view__weekdays__weekday': {
                  color: astro.color.text.white,
                },
                //day numbers
                '.react-calendar__tile.react-calendar__month-view__days__day': {
                  color: astro.color.text.interactive.default,
                  ':hover': {
                    color: astro.color.text.interactive.hover,
                  },
                },
                //active day
                '.react-calendar__tile.react-calendar__tile--hasActive, .react-calendar__tile.react-calendar__tile--now, .react-calendar__tile.react-calendar__tile--active ':
                  {
                    color: astro.color.text.white,
                  },
                '.react-calendar__tile--hasActive:not(.react-calendar__tile--range)': {
                  background: astro.color.background.interactive.default,
                },
              },
            },
            //end react calendar
          },
          //end timepicker dropdown
          //* Annotation dialog
          //This uses Popper.js, and the only attribute we can target is the data-popper* attrs.
          'div[data-popper-placement="top"], div[data-popper-placement="bottom"], div[data-popper-placement="left"], div[data-popper-placement="right"]':
            {
              background: astro.color.background.surface.default,
              //first child div should be header
              '> div:first-child': {
                background: astro.color.background.surface.header,
              },
              //dialog buttons - secondary for all but last button
              '[class$="-horizontal-group"] [class$="-layoutChildrenWrapper"]:not(:last-child) button': {
                backgroundColor: 'transparent',
                border: `1px solid ${astro.color.border.interactive.default}`,
                color: astro.color.text.interactive.default,
                ':hover': {
                  color: astro.color.text.interactive.hover,
                  border: `1px solid ${astro.color.border.interactive.hover}`,
                },
              },
              '[class$="-horizontal-group"] [class$="-layoutChildrenWrapper"]:last-child button': {
                backgroundColor: astro.color.background.interactive.default,
                borderRadius: astro.radius.base,
                color: astro.color.text.inverse,
                ':hover': {
                  borderColor: 'transparent',
                  backgroundColor: astro.color.background.interactive.hover,
                  color: astro.color.text.inverse,
                },
                svg: {
                  fill: 'black',
                },
              },
            },
          //* Panel options -> inspect slide out pane
          'div[aria-label="Drawer title Inspect: Panel Title"]': {
            '> div:first-child': {
              background: astro.color.background.base.header,
            },
            'div[class$="-Header"]': {
              background: astro.color.background.surface.header,
              'button[aria-label="toggle collapse and expand query row"] + div > div:first-child': {
                color: astro.color.text.primary,
              },
            },
            'button[class$="-button"][type="button"]': {
              backgroundColor: astro.color.background.interactive.default,
              borderRadius: astro.radius.base,
              color: astro.color.text.inverse,
              ':disabled': {
                opacity: '0.4',
                cursor: 'not-allowed',
                ':hover': {
                  background: astro.color.background.interactive.default,
                },
              },
              ':hover': {
                borderColor: 'transparent',
                backgroundColor: astro.color.background.interactive.hover,
                color: astro.color.text.inverse,
              },
              svg: {
                fill: 'black',
              },
            },
          },
          //end panel options slide out
          //* get help slide out panel
          'div[aria-label="Drawer title Get help with this panel"]': {
            '> div:first-child': {
              background: astro.color.background.base.header,
            },
            'button[class$="-button"][type="button"]': {
              backgroundColor: astro.color.background.interactive.default,
              borderRadius: astro.radius.base,
              color: astro.color.text.inverse,
              ':disabled': {
                opacity: '0.4',
                cursor: 'not-allowed',
                ':hover': {
                  background: astro.color.background.interactive.default,
                },
              },
              ':hover': {
                borderColor: 'transparent',
                backgroundColor: astro.color.background.interactive.hover,
                color: astro.color.text.inverse,
              },
              svg: {
                fill: 'black',
              },
            },
            'input[type="checkbox"] + label': {
              background: astro.color.background.base.default,
              border: `1px solid ${astro.color.border.interactive.muted}`,
              ':hover': {
                '::after': {
                  borderColor: astro.color.border.interactive.hover,
                },
              },
              '::after': {
                background: astro.color.background.base.default,
                border: `1px solid ${astro.color.border.interactive.default}`,
              },
            },
            'input[type="checkbox"]:checked + label': {
              background: astro.color.background.interactive.default,
            },
            'div:has(> .inline-switch-label)': {
              background: astro.color.background.surface.default,
              border: 'none',
              color: astro.color.text.primary,
              ':hover': {
                border: 'none',
                color: astro.color.text.primary,
                '.inline-switch-label': {
                  color: astro.color.text.primary,
                },
              },
            },
            '.inline-switch-label': {
              color: astro.color.text.primary,
              ':hover': {
                color: astro.color.text.primary,
              },
            },
          },
          //* Notifications/Alerts/Toast
          'div[role="status"]': {
            background: astro.color.background.base.default,
            border: `1px solid ${astro.color.status.standby}`,
            borderLeftWidth: astro.spacing(3),
            '& > div:nth-child(2)': {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            },
            '& > div:nth-child(3)': {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            },
            '&[data-testid*="Alert success"]': {
              //success styling
              borderColor: astro.color.status.normal,
              '> div:first-child': {
                background: astro.color.background.base.default,
              },
            },
            '&[data-testid*="Alert fail"]': {
              //failure styling?
              '> div:first-child': {
                background: astro.color.status.critical,
              },
            },
          },
          //* Dashboard submenu
          //queries
          'label.gf-form-label--variable': {
            background: astro.color.background.surface.default,
            // border: `1px solid ${astro.color.border.interactive.default},`,
          },
          //dashboard quick links
          'a.gf-form-label--dashlink': {
            background: astro.color.background.base.default,
            border: `1px solid ${astro.color.border.interactive.default},`,
            borderRadius: astro.radius.base,
            color: astro.color.text.primary,
            ':hover': {
              border: `1px solid ${astro.color.border.interactive.hover},`,
            },
          },
          '.variable-link-wrapper': {
            background: astro.color.background.base.default,
            border: `1px solid ${astro.color.border.interactive.default},`,
            borderRadius: astro.radius.base,
            color: astro.color.text.primary,
            button: {
              background: astro.color.background.base.default,
              border: 'none',
            },
            ':hover': {
              border: `1px solid ${astro.color.border.interactive.hover},`,
              svg: {
                fill: astro.color.background.interactive.hover,
              },
            },
          },
          //inputs with dropdown - might just be those in submenu, i'm unsure
          'input[aria-expanded="true"]': {
            '+ div': {
              background: astro.color.background.base.default,
              border: `1px solid ${astro.color.border.interactive.muted}`,
              color: astro.color.text.interactive.default,
            },
          },
          //annotations in submenu
          'div[class$="-InlineFieldRow"]': {
            color: astro.color.text.primary,
            'label, div': {
              color: astro.color.text.primary,
              // background: astro.color.background.surface.default,
            },
            'div div div': {
              color: astro.color.text.primary,
              border: 'none',
              ':hover': {
                border: 'none',
              },
            },
          },
          'div[aria-label="Panel editor data pane content"] .scrollbar-view label': {
            background: 'inherit',
          },
        }}
      />
    </div>
  );
};
