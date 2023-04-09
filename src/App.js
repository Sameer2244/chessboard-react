import React, { useState } from 'react';
import './style.css';
import { board } from './board/board';

export default function App() {
  const [fields, setFields] = useState(board);

  const changeColor = (row, column) => {
    console.log(row, column);
  };
  return (
    <div className="field-container">
      {fields.map((e, i) => {
        return e.map((e1, i1) => {
          return (
            <div
              className="field"
              key={i + i1}
              style={{ background: `${e1}` }}
              onClick={() => {
                changeColor(i, i1);
              }}
            ></div>
          );
        });
      })}
    </div>
  );
}
