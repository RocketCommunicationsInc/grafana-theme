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
          /** MAIN CONTENT AREA **/
          '.main-view, .css-3kc8b9': {
            backgroundColor: astro.color.background.base.default,
          },
          
          /** LINKS **/
          'a, a.css-1xmv57m, .css-6pogpz': {
            color: astro.color.text.interactive.default,
            textDecoration: 'none',
            '&:hover': {
              color: astro.color.text.interactive.hover,
            },
          },
          // link button to remove panel
          '.css-7bxxd7-button': {
            color: astro.color.text.interactive.default,
            textDecoration: 'none',
            '&:hover': {
              color: astro.color.text.interactive.hover,
              backgroundColor: 'none',
            },
          },

          /** DASHBOARD SEARCH PAGE **/
          '.css-13zf4cl': {
            backgroundColor: astro.color.background.surface.default,
            color: astro.color.text.primary,
          },
          '[data-testid="data-testid Search section"]': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
          '[data-testid*="data-testid Dashboard search item"]': {
            backgroundColor: astro.color.background.surface.default,
            color: astro.color.text.primary,
            '&:hover': {
              backgroundColor: astro.color.background.surface.hover,
            },
          },
          

          /** SIDENAV **/
          '.sidemenu, [data-testid="sidemenu"]': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
          '.scrollbar-view *': {
            color: astro.color.text.primary,
          },
          '.btn': {
            backgroundColor: astro.color.background.interactive.default,
            borderRadius: astro.radius.base,
            backgroundImage: 'none',
            color: astro.color.text.black,
          },
          // expand/contract sidenav button
          'button[aria-label="Open navigation menu"], button[aria-label="Close navigation menu"]': {
            backgroundColor: astro.color.background.surface.default,
            ':hover': {
              backgroundColor: astro.color.background.surface.hover,
            },
          },

          /** SVGs **/
          'svg:not(:root)': {
            fill: astro.color.background.interactive.default,
            ':hover': {
              fill: astro.color.background.interactive.hover,
            }
          },
          //! Targets an auto-generated Emotion class. This classname may change in future builds.
          //! This is the bar next to the selected icon in the nav. The important override here is the backgroundImage: none;
          '.css-1uf1299::before, .css-5mvbni::before, .css-78wgv9::before': {
            backgroundImage: 'none',
            backgroundColor: astro.color.background.interactive.default,
          },

          // timepicker details
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

          /**  DASHBOARD AND PANEL VIEW **/
          header: {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
           //Backround for dashboards
           body: {
            background: astro.color.background.base.default,
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
          // override so no header color shows when there is no title on a panel
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
            color: astro.color.text.primary,
            '&:hover': {
              backgroundColor: astro.color.background.base.hover,
            },
          },

          /** EDIT PANEL SECTION **/
          // top pane on edit panel sidenav
          '.css-1jel17l': {
            backgroundColor: astro.color.background.base.default,
          },
          //main panel section on sidenav
          '.css-1xappwv, .css-v2fjpc, .css-1f0zkg6': {
            backgroundColor: astro.color.background.surface.default,
            color: astro.color.text.primary,
          },
          //interior panels
          '.css-8vkw8w': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
            '&:hover': {
              backgroundColor: astro.color.background.base.hover,
            },
          },
          //pane header hover
          '[data-testid="options-category"] > div:first-child': {
              '&:hover': {
                backgroundColor: astro.color.background.surface.hover,
              },
          },
          // segmented button at top of edit sidenav
          '.css-1tpfx0m': {
            backgroundColor: astro.color.background.base.default,
            border: `1px solid ${astro.color.border.interactive.default}`,
            borderRadius: '0px',
            color: astro.color.text.interactive.default,
            '&:hover': {
              backgroundColor: astro.color.background.base.hover,
              border: `1px solid ${astro.color.border.interactive.hover}`,
              color: astro.color.text.interactive.hover,
            },
          },
          //segmented button selected
          '.css-8hl977:checked + label': {
            backgroundColor: astro.color.background.surface.selected,
            color: astro.color.text.primary,
            '&:hover': {
              backgroundColor: astro.color.background.surface.hover,
              color: astro.color.text.primary,
            },
          },
          // segmented button border
          '.css-sv3u8u': {
            border: 'none',
            '&:hover': {
              border: 'none',
            },
          },
          // Suggestions section
          '.css-3urai6 button': {
            backgroundColor: astro.color.background.base.default,
            '&:hover': {
              backgroundColor: astro.color.background.base.hover,
            },
          },

          /** DIALOGS **/
          'div[role="dialog"]': {
            backgroundColor: astro.color.background.surface.default,
            color: astro.color.text.primary,
          },
          // dialog table rows
          'div[role="dialog"] table tr td': {
            color: astro.color.text.primary,
          },
          // specific background coloring for dashboard sidenav (it is technically a dialog)
          '[data-testid="navbarmenu"][role="dialog"]': {
            backgroundColor: astro.color.background.base.default,
          },
          // dialog cancel button
          'button.css-jyng06-button': {
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

          /** DASHBOARD SETTINGS PAGE **/
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
          // Dashboard top nav save button secondary
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
           // Dashboard top nav save button primary
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
          // panels inside settings choices
          '[class$="call-to-action-card"]': {
            backgroundColor: astro.color.background.base.default,
          },
          // box inside panels
          '[class*="grafana-info-box"]': {
            backgroundColor: astro.color.background.surface.default,
          },

          /**  INFO TOOLTIP **/
          '[class*=panel-info-corner--info] [class*=panel-info-corner-inner]': {
            backgroundColor: astro.color.background.surface.default,
            borderLeft: `none`,
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
          // tooltip arrow display none
          '.css-7dcs73[data-popper-placement*="bottom"] .tooltip-arrow, .css-7dcs73[data-popper-placement*="top"] .tooltip-arrow ': {
            display: 'none',
          },

          /** TOP NAV BUTTONS **/
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

          /** ANNOTATION ON A GRAPH **/
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

          /** INPUTS AND TEXTAREAS **/
          'input[class$="-input-input"], textarea, textarea.css-p9crc5': {
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
            '::placeholder': {
              color: astro.color.text.placeholder,
            },
          },
          //annotation menu
          'div[class*="-input-wrapper"]': {
            // border: `1px solid ${astro.color.border.interactive.muted}`,
            borderRadius: astro.radius.base,
            ...astro.typography.body1,
            color: astro.color.text.primary,
            backgroundColor: astro.color.background.base.default,
            ':hover': {
              // boxShadow: `${astro.color.border.interactive.hover} 0 0 0 1px inset`,
              //border: `1px solid ${astro.color.border.interactive.hover}`,
              outline: 'none',
            },
          },

          /** BUTTONS **/
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
              '&:hover': {
                fill: astro.color.text.black,
              },

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

          /** TABLES **/
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

          /** CHECKBOXES **/
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

          /** ASTRO PANEL CSS **/
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
