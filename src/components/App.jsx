// import Counter from 'components/counter/Counter';
import Dropdown from "./drop-down/Dropdown";
import ColorPicker from './color-picker/ColorPicker';
import React from 'react';

const colorPickerOptions = [
  { label: 'red', color: 'rgba(255, 0, 0, 0.778)' },
  { label: 'yallow', color: 'rgba(251, 223, 42, 0.564)' },
  { label: 'blue', color: 'rgba(54, 94, 163, 0.564)' },
  { label: 'green', color: 'rgba(39, 148, 55, 0.564)' },
];

export const App = () => {
  return (
    <div>
      {/* <Counter initialValue= {0} /> */}
      <Dropdown/>
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
};
