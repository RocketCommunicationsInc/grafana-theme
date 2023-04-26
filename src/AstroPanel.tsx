import React, { useState, useEffect } from 'react';
import { PanelProps } from '@grafana/data';
import { AstroOptions } from 'types';
import { Global } from '@emotion/react';
import { useAstroTokens, Mode } from 'use-astro-tokens';
import { Clock } from './Clock';

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
          '.sidemenu, [data-testid="sidemenu"]': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
          '[data-testid="navbarmenu"]': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
          '.btn': {
            backgroundColor: astro.color.background.interactive.default,
            borderRadius: astro.radius.base,
            backgroundImage: 'none',
            color: astro.color.text.black,
          },
          'button[aria-label="Open navigation menu"], button[aria-label="Close navigation menu"]': {
            backgroundColor: astro.color.background.surface.default,
            ':hover': {
              backgroundColor: astro.color.background.surface.hover,
            },
          },
          'svg:not(:root)': {
            fill: astro.color.background.interactive.default,
            ':hover': {
              fill: astro.color.background.interactive.hover,
            }
          },
          //! Targets an auto-generated Emotion class. This classname may change in future builds.
          //! This is the bar next to the selected icon in the nav. The important override here is the backgroundImage: none;
          '.css-1uf1299::before, .css-5mvbni::before': {
            backgroundImage: 'none',
            backgroundColor: astro.color.background.interactive.default,
          },
          //timepicker details
          '#TimePickerContent': {
            background: astro.color.background.surface.default,
            color: astro.color.text.primary,
            button: {
              background: astro.color.background.interactive.default,
              color: astro.color.text.inverse,
              borderRadius: astro.radius.base,
              '&:hover': {
                background: astro.color.background.interactive.hover,
                cursor: 'pointer',
              },
              svg: {
                fill: astro.color.text.interactive.default,
              },
            },
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
          '[class*="panel-container"]': {
            backgroundColor: astro.color.background.surface.default,
            color: astro.color.text.primary,
          },
          '[class*="panel-title"]': {
            backgroundColor: astro.color.background.surface.header,
            color: astro.color.text.primary,
            h2: {
              ...astro.typography.h4,
            },
          },
          '[class*="panel-container--no-title"] [class*="panel-title"]': {
            backgroundColor: astro.color.background.surface.default,
          },
          // add panel header section
          '.grid-drag-handle': {
            '&:hover': {
              backgroundColor: astro.color.background.base.hover,
            },
          },
          // add panel section inner panels
          '.css-11ojjok button': {
            backgroundColor: astro.color.background.base.default,
            '&:hover': {
              backgroundColor: astro.color.background.base.hover,
            },
          },

          //Dashboard Settings Page
          // Main section
          '[class*="page-inner"]': {
            backgroundColor: astro.color.background.surface.default,
            color: astro.color.text.primary,
          },
          // Sidenav background
          '[class*="page-panes"] nav': {
            backgroundColor: astro.color.background.surface.default,
            color: astro.color.text.primary,
          },
          // Dashboard sidenav selected background
          '[class*="scrollbar-view"] div[role="tablist"] [class*="-activeTabStyle"]': {
            backgroundColor: astro.color.background.base.default,
          },
          // Dashboard sidenav selected line
          '[class*="scrollbar-view"] div[role="tablist"] [class*="-activeTabStyle"]::before': {
            backgroundImage: 'none',
            backgroundColor: astro.color.background.interactive.default,
          },
          '[class*=dashboard-row]': {
            color: astro.color.text.primary,
          },
          '[class*=dashboard-row__title]': {
            color: astro.color.text.primary,
          },
          'nav a': {
            color: astro.color.text.primary,
          },
          '[class*=page-toolbar]': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
            width: '100%',
            },
          // Dashboard top nav save buttons
          '.css-b2ba3d-button': {
            backgroundColor: astro.color.background.base.default,
            border: `1px solid ${astro.color.border.interactive.default}`,
            borderRadius: astro.radius.base,
            color: astro.color.text.interactive.default,
            ...astro.typography.body1,
            ':hover': {
              borderColor: 'transparent',
              backgroundColor: astro.color.background.base.hover,
              border: `1px solid ${astro.color.border.interactive.hover}`,
              color: astro.color.text.interactive.hover,
            },
            svg: {
              fill: astro.color.text.black,
            },
          },
          '.css-z53gi5-button': {
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
          //info tootip on panels
          '[class*=panel-info-corner--info] [class*=panel-info-corner-inner]': {
            backgroundColor: astro.color.background.surface.default,
            borderLeft: `32px solid ${astro.color.background.surface.header}`,
          },
          '[class*=panel-info-corner] .fa': {
            color: astro.color.text.interactive.default,
          },
          '[class*=grafana-portal-container]': {
            background: astro.color.background.surface.default,
            color: astro.color.text.primary,
            border: `1px solid ${astro.color.border.interactive}`,
          },
          //! Targets an auto-generated Emotion class. This classname may change in future builds.
          '.css-7dcs73': {
            backgroundColor: astro.palette.grey[800],
            border: `1px solid transparent`,
            color: astro.color.text.primary,
          },
          '.css-7dcs73::before, .css-7dcs73::after,': {
            content: '',
            backgroundColor: '#ffffff',
          },
          '.css-7dcs73[data-popper-placement*="top"] .tooltip-arrow::before': {
            borderColor: `${astro.color.border.interactive.muted} transparent transparent`,
          },
          '.css-7dcs73[data-popper-placement*="top"] .tooltip-arrow::after': {
            borderColor: `${astro.color.border.interactive.muted} transparent transparent`,
          },
          '[class*=toolbar-button]': {
            backgroundColor: astro.color.background.base.default,
            border: `1px solid ${astro.color.border.interactive.default}`,
            borderRadius: astro.radius.base,
            color: astro.color.text.interactive.default,
            ...astro.typography.body1,
            ':hover': {
              borderColor: 'transparent',
              backgroundColor: astro.color.background.base.hover,
              border: `1px solid ${astro.color.border.interactive.hover}`,
              color: astro.color.text.interactive.hover,
            }
          },
          '[class*=dashboard-settings]': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
          '[class*=dashboard-settings__aside]': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
          '[class*=dashboard-settings__aside] + div': {
            backgroundColor: astro.color.background.surface.default,
            color: astro.color.text.primary,
          },
          //Annotation on a graph
          'div[data-popper-reference-hidden="false"]': {
            background: astro.color.background.surface.default,
          },
          'div[data-popper-reference-hidden="false"] > :first-child': {
            background: astro.color.background.surface.header,
          },
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
          'div[class$="layoutChildrenWrapper"] button, [class$="call-to-action-card"] button, [class*="page-content"] button': {
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
          '[class*="page-content"] button[id*="collapse-button"]': {
            backgroundColor: 'transparent',
            ':hover': {
              backgroundColor: 'transparent',
            },
            svg: {
              fill: astro.color.text.interactive.default,
            },
          },
          '[class$="call-to-action-card"]': {
            backgroundColor: astro.color.background.base.default,
          },
          '[class*="grafana-info-box"]': {
            backgroundColor: astro.color.background.surface.default,
          },
          //tables
          '.filter-table tbody tr:nth-child(odd)': {
            backgroundColor: astro.color.background.base.default,
          },
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
          'td[role="gridcell"]' : {
            backgroundColor: astro.color.background.base.default,
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
          // checkbox
          'input[type="checkbox"] + span, input[type="checkbox"]:checked + span': {
            backgroundColor: 'transparent',
            borderColor: astro.color.border.interactive.default,
            borderWidth: '1px',
            borderStyle: 'solid',
            ':hover': {
              backgroundColor: 'transparent',
              borderColor: astro.color.border.interactive.hover,
            },
          },
          // Checkmark
          'input[type="checkbox"]:checked + span::after': {
            backgroundColor: 'transparent',
            borderColor: astro.color.border.interactive.default,
            left: '5px',
            top: '0px',
            width: '5px',
            borderWidth: '0px 2px 2px 0px',
            ':hover': {
              backgroundColor: 'transparent',
              borderColor: astro.color.border.interactive.hover,
            },
          },
          // Centering checkbox in table row
          'table tbody tr td label, table tbody tr td label div': {
            display: 'flex',
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
        }}
      />
    </div>
  );
};
