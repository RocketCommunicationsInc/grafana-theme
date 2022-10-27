import React, { useState, useEffect } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { Global } from '@emotion/react';
import { useAstroTokens, Mode } from 'use-astro-tokens';
import { Clock } from './Clock';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
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
      {/* TODO: custom CSS {options.customCSS ? <Style>{options.customCSS}</Style> : null} */}
      <Global
        styles={{
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
          '.dropdown::before': {
            backgroundColor: astro.color.background.interactive.default,
          },
          //! emotion named css class - find better way to target
          '.css-1uf1299::before': {
            backgroundImage: 'none',
            backgroundColor: astro.color.background.interactive.default,
          },
          //dashboard and panels
          header: {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
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
          '.toolbar-button': {
            background: astro.color.background.surface.default,
            color: astro.color.text.primary,
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
            width: '100%',
            overflow: 'hidden',
            flex: '1 1 auto',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'start',
            position: 'relative',
            boxSizing: 'border-box',
            order: '2',
            boxShadow: `${astro.color.border.interactive.muted} 0 0 0 1px inset`,
            borderRadius: astro.radius.base,
            ...astro.typography.body1,
            color: astro.color.text.primary,
            backgroundColor: astro.color.background.base.default,
            ':hover': {
              boxShadow: `${astro.color.border.interactive.hover} 0 0 0 1px inset`,
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
          'div[role=cell]': {
            color: astro.color.text.primary,
            borderColor: astro.color.background.base.default,
            ':hover': {
              background: astro.color.background.surface.hover,
            },
          },
          'div[role=columnheader]': {
            color: astro.color.text.primary,
            backgroundColor: astro.color.background.surface.default,
            borderColor: astro.color.background.base.default,
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
