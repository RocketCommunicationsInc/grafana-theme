import React, { useState, useEffect } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import { Style } from 'react-style-tag';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles();

  const [astroTheme, setAstroTheme] = useState(`${options.defaultTheme}`);
  useEffect(() => {
    appendLightClass(astroTheme);
  }, [astroTheme]);

  function appendLightClass(theme?: string) {
    const body = document.querySelector('body');
    if (theme === 'light') {
      body?.classList.add('light-theme');
      setAstroTheme('light');
    } else {
      body?.classList.remove('light-theme');
      setAstroTheme('dark');
    }
  }

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      {options.hideTheme === true ? null : (
        <div>
          <h3>Astro Theme Selection</h3>
          <div className="astro-btn-container">
            <div className="astro-btn" onClick={() => setAstroTheme('dark')} style={{ width: '80px', height: '28px' }}>
              Dark
            </div>
            <div className="astro-btn" onClick={() => setAstroTheme('light')} style={{ width: '80px', height: '28px' }}>
              Light
            </div>
          </div>
        </div>
      )}

      <Style>
        {`
          @import url(https://unpkg.com/@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css);
          .astro-btn {
            height: 28px; 
            width: 80px;
            border: none;
            display: flex;
            position: relative;
            margin: var(--spacing-0);
            width: inherit;
            padding: var(--spacing-2) var(--spacing-4);
            border-radius: var(--radius-base);
            color: var(--color-text-inverse);
            font-family: var(--font-control-body-1-font-family);
            font-size: var(--font-control-body-1-font-size);
            font-weight: var(--font-control-body-1-font-weight);
            line-height: var(--font-control-body-1-line-height);
            letter-spacing: var(--font-control-body-1-letter-spacing);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            justify-content: center;
            align-items: center;
            user-select: none;
            background-color: var(--color-background-interactive-default);
            cursor: pointer;
            &:hover {
              border-color: transparent;
              background-color: var(--color-background-interactive-hover);
            }
          }
          .astro-btn-container  {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
          }

          /* Dashboard */
          header{
            background-color: var(--color-background-base-default);
            color: var(--color-text-primary);
          }
          .panel-container{
            background-color: var(--color-background-surface-default);
            }
          .panel-title {
            background-color: var(--color-background-surface-default);
          }
            .sidemenu {
            background-color: var(--color-background-base-default);
            }
            .btn{
            background-color: var(--color-background-interactive-default);
            border-radius: var(--radius-base);
            background-image: none;
            color: black;
            }
            svg:not(:root){
            fill: var(--color-background-interactive-default);
            }
            /* Bar that shows selected nav item */
            .dropdown::before {
              background-color: var(--color-background-interactive-default);
            }
            .css-1uf1299::before {
              background-image: none;
              background-color: var(--color-background-interactive-default);
            }
            /* New row titles */
            .dashboard-row {
              color: var(--color-text-primary);
            }
            .page-toolbar{
              background-color: var(--color-background-base-default);
              color: var(--color-text-primary);
              width: 100%;
            }
            /* Dashboard Settings */ 
            .dashboard-settings {
              background-color: var(--color-background-base-default);
              color: var(--color-text-primary);
            }
            .dashboard-settings__aside {
              background-color: var(--color-background-base-default);
              color: var(--color-text-primary);

            }
            .dashboard-settings__aside + div {
              background-color: var(--color-background-surface-default);
              color: var(--color-text-primary);
            }
            /* pesky time inputs */ 
            .css-xh38be-input-wrapper{
              width: 100%;
              overflow: hidden;
              flex: 1 1 auto;
              display: inline-flex;
              align-items: center;
              justify-content: start;
              position: relative;
              box-sizing: border-box;
              order: 2;
              box-shadow: var(--color-border-interactive-muted) 0 0 0 1px inset;
              border-radius: var(--radius-base);
              font-family: var(--font-control-body-1-font-family);
              font-size: var(--font-control-body-1-font-size);
              font-weight: var(--font-control-body-1-font-weight);
              line-height: var(--font-control-body-1-line-height);
              letter-spacing: var(--font-control-body-1-letter-spacing);
              color: var(--color-text-primary);
              background-color: var(--color-background-base-default);
              &:hover {
                box-shadow: var(--color-background-interactive-hover) 0 0 0 1px
                    inset;
                outline: none;
              }
            }
            input { 
              width: 100%;
              overflow: hidden;
              flex: 1 1 auto;
              display: inline-flex;
              align-items: center;
              justify-content: start;
              position: relative;
              box-sizing: border-box;
              order: 2;
              box-shadow: var(--color-border-interactive-muted) 0 0 0 1px inset;
              border-radius: var(--radius-base);
              font-family: var(--font-control-body-1-font-family);
              font-size: var(--font-control-body-1-font-size);
              font-weight: var(--font-control-body-1-font-weight);
              line-height: var(--font-control-body-1-line-height);
              letter-spacing: var(--font-control-body-1-letter-spacing);
              color: var(--color-text-primary);
              background-color: var(--color-background-base-default);
              &:hover {
                box-shadow: var(--color-background-interactive-hover) 0 0 0 1px
                    inset;
                outline: none;
            }
            }

        `}
      </Style>
      {options.customCSS ? <Style>{options.customCSS}</Style> : null}
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
      text-align: center;
    `,
  };
});
