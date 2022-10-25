import React, { useState, useEffect } from 'react';
// import { PanelProps } from '@grafana/data';
import { DefaultTheme } from 'types';
import { Global } from '@emotion/react';
import { useAstroTokens, Mode } from 'use-astro-tokens';
import { getDayOfYear } from 'date-fns';

interface Props {
  defaultTheme: DefaultTheme;
}

export const Clock: React.FC<Props> = (props) => {
  //@ts-ignore
  const [mode, setMode] = useState<Mode>(props.defaultTheme);
  const astro = useAstroTokens({ mode });

  const [time, setTime] = useState<Date>(new Date(Date.now()));
  const [dayOfYear, setDayOfYear] = useState(getDayOfYear(time));

  const [clockTime, setClockTime] = useState(time.toUTCString().slice(17, -3));

  //? Do I need to clear interval?
  function startTimer() {
    window.setInterval(() => {
      updateTime();
    }, 1000);
  }

  function updateTime() {
    // convert time to UTC
    let rawClockTime = new Date(Date.now()).toUTCString();
    let formattedClocktime = rawClockTime.slice(17, -3);
    setClockTime(formattedClocktime);
    setTime(new Date(Date.now()));
    setDayOfYear(getDayOfYear(time));
  }

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="rux-clock">
      <div className="date-container">
        <div className="j-day">{dayOfYear}</div>
        <div className="date-label">Date</div>
      </div>
      <div className="time-container">
        <div className="time">{clockTime} UTC</div>
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
              },
            },
          },
        }}
      />
    </div>
  );
};
