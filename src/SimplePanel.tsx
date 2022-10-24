import React, { useState, useEffect } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
// import { css, cx } from 'emotion';
// import { stylesFactory } from '@grafana/ui';
import { Global } from '@emotion/react';
import { useAstroTokens, Mode } from 'use-astro-tokens';
import { Style } from 'react-style-tag';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const [mode, setMode] = useState<Mode>(options.defaultTheme);
  const astro = useAstroTokens({ mode });

  const handleThemeSwitch = (mode: Mode) => {
    if (mode === 'dark') {
      setMode('dark');
    } else setMode('light');
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
    <div>
      {options.classification ? (
        <div className={'class-banner class-' + options.classification}>
          {classificationMap[options.classification]}
        </div>
      ) : null}

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
      {options.customCSS ? <Style>{options.customCSS}</Style> : null}
      <Global
        styles={{
          '*': {
            margin: astro.spacing(0),
          },
          header: {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
          },
          '.panel-container': {
            backgroundColor: astro.color.background.surface.default,
          },
          '.panel-title': {
            backgroundColor: astro.color.background.surface.default,
          },
          '.sidemenu': {
            backgroundColor: astro.color.background.base.default,
          },
          '.btn': {
            backgroundColor: astro.color.background.interactive.default,
            borderRadius: astro.radius.base,
            backgroundImage: 'none',
            color: astro.color.text.black,
          },
          'svg:not(:root)': {
            fill: astro.color.background.interactive.default,
          },
          '.dropdown::before': {
            backgroundColor: astro.color.background.interactive.default,
          },
          '.css-1uf1299::before': {
            backgroundImage: 'none',
            backgroundColor: astro.color.background.interactive.default,
          },
          '.dashboard-row': {
            color: astro.color.text.primary,
          },
          '.page-toolbar': {
            backgroundColor: astro.color.background.base.default,
            color: astro.color.text.primary,
            width: '100%',
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
          '.css-xh38be-input-wrapper': {
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
          input: {
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
          'div[role=row]': {
            ':hover': {
              background: astro.color.background.surface.hover,
              color: astro.color.text.primary,
            },
          },
          'div[role=cell]': {
            ':hover': {
              background: astro.color.background.surface.hover,
              color: astro.color.text.primary,
            },
          },
          'div[role=columnheader]': {
            color: astro.color.text.primary,
            backgroundColor: astro.color.background.surface.default,
          },
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
          'class-secret': {
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
