import React, { useState } from 'react';
// import { PanelOptionsEditorItem } from '@grafana/data';

export const PanelSettings = () => {
  const [customCSS, setCustomCSS] = useState(``);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCustomCSS(e.target.value);
  }

  return (
    <div>
      <label>Custom CSS Overrides</label>
      <textarea
        placeholder="Set Custom CSS. Text must be valid CSS."
        value={customCSS}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
      ></textarea>
    </div>
  );
};
