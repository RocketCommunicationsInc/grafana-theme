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
    <div className={`astro-panel-container astro-panel-container--${options.format}`}>
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
              fill: astro.color.text.white,
              opacity: 0.4,
              ':hover': {
                fill: astro.color.text.white,
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
              color: astro.color.text.white,
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
          '.css-7dcs73[data-popper-placement*="top"] .tooltip-arrow::before': {
            borderColor: `${astro.color.border.interactive.muted} transparent transparent`,
          },
          '.css-7dcs73[data-popper-placement*="top"] .tooltip-arrow::after': {
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
            ':hover': {
              color: astro.color.text.interactive.hover,
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
          'input[class$="-input-input"]': {
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
          // '.tooltip-arrow::before': {
          //   background: astro.color.background.surface.default,
          // },
          //annotation menu
          'div[class*="-input-wrapper"]': {
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
          'div[role=row]': {
            color: astro.color.text.primary,
            borderColor: astro.color.background.base.default,
            ':hover': {
              background: astro.color.background.surface.hover,
            },
          },
          'div[role=row] > div[role=cell]': {
            borderTop: `1px solid ${astro.color.background.base.default}`,
          },
          'div[role=cell]': {
            color: astro.color.text.primary,
            borderColor: astro.color.background.base.default,
            borderBottomWidth: '1px',
            ':hover': {
              background: astro.color.background.surface.hover,
            },
          },
          'div[role=columnheader]': {
            borderColor: astro.color.background.base.default,
            background: astro.color.background.surface.default,
            borderBottom: `1px solid ${astro.color.border.interactive.muted}`,
            button: {
              ...astro.typography.h4,
              color: astro.color.text.primary,
            },
          },
          //Astro Panel CSS
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
            'button[aria-label="Dashboard settings aside actions Save button"]': {
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
            },
            'input[class$="-input-input"]': {
              border: 'none',
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
              color: astro.color.text.white,
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
          //most all other buttons that can't be targeted nicely
          'div[class$="-page-content"] button[class$="-button"]': {
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
          //override "Delete Dashboard" button to not look like a reg button
          'div[class$="-page-content"] button[class$="-button"][aria-label="Dashboard settings page delete dashboard button"]':
            {
              background: astro.color.status.critical,
              color: astro.color.text.white,
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

                'a[class$="-activeTabStyle"]': {
                  backgroundColor: astro.color.background.surface.selected,
                },
              },
            },
          },
          //main page
          'div[class$="-page-inner"]': {
            background: astro.color.background.surface.default,
          },
        }}
      />
    </div>
  );
};
