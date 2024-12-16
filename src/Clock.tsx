import { Mode, useAstroTokens } from 'use-astro-tokens';
import React, { useEffect, useState } from 'react';

import { DefaultTheme } from 'types';
import { Global } from '@emotion/react';
import { getDayOfYear } from 'date-fns';

interface Props {
  defaultTheme: DefaultTheme;
}

export const Clock: React.FC<Props> = (props) => {
  const [mode] = useState<Mode>(props.defaultTheme);
  const astro = useAstroTokens({ mode });

  const [time, setTime] = useState<Date>(new Date(Date.now()));
  const [dayOfYear, setDayOfYear] = useState(
    getDayOfYear(new Date(time.getUTCFullYear(), time.getUTCMonth(), time.getUTCDate()))
  );

  const [clockTime, setClockTime] = useState(time.toUTCString().slice(17, -3));

  function updateTime() {
    // convert time to UTC
    let rawClockTime = new Date(Date.now());
    let rawClockTimeUTC = rawClockTime.toUTCString();
    let jDayUTC = getDayOfYear(
      new Date(rawClockTime.getUTCFullYear(), rawClockTime.getUTCMonth(), rawClockTime.getUTCDate())
    );
    let formattedClocktime = rawClockTimeUTC.slice(17, -3);
    setClockTime(formattedClocktime);
    setTime(new Date(Date.now()));
    setDayOfYear(jDayUTC);
  }

  useEffect(() => {
    const timerId = setInterval(updateTime, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="rux-clock">
      <div className="date-container">
        <div className="j-day">{dayOfYear}</div>
        <div className="date-label">Date</div>
      </div>
      <div className="time-container">
        <div className="time">{clockTime}UTC</div>
        <div className="time-label">Time</div>
      </div>
      <Global
        styles={{
          '.rux-clock': {
            color: astro.color.text.primary,
            backgroundColor: astro.color.background.base.default,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'fit-content',
            margin: astro.spacing(2),
            ...astro.typography.monospace,
            '.date-container': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              ...astro.typography.monospace,
              '.date-label': {
                background: astro.color.background.surface.default,
                ...astro.typography.body2,
                width: 'fill-available',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                padding: astro.spacing(0, 3, 0, 3),
                lineHeight: astro.typography.body3.lineHeight,
                height: astro.spacing(6),
                alignItems: 'center',
              },
              '.j-day': {
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                overflowY: 'hidden',
                textOverflow: 'ellipsis',
                height: astro.spacing(10),
                padding: astro.spacing(0, 3),
                border: `1px solid ${astro.color.background.surface.default}`,
              },
            },
            '.time-container': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              ...astro.typography.monospace,
              '.time-label': {
                background: astro.color.background.surface.default,
                ...astro.typography.body2,
                width: 'fill-available',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                padding: astro.spacing(0, 3, 0, 3),
                lineHeight: astro.typography.body3.lineHeight,
                height: astro.spacing(6),
                alignItems: 'center',
              },
              '.time': {
                display: 'flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                overflowY: 'hidden',
                textOverflow: 'ellipsis',
                height: astro.spacing(10),
                padding: astro.spacing(0, 3),
                border: `1px solid ${astro.color.background.surface.default}`,
                ...astro.typography.monospace,
                fontVariantNumeric: 'tabular-nums',
              },
            },
          },
        }}
      />
    </div>
  );
};
