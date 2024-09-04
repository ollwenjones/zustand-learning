import React from 'react';
import { useRenderStore } from './RenderStore';
import { useRenderFlashClass } from './RenderFlash';

interface IListOfPeopleProps extends React.HTMLProps<{}> {}

/**
 *
 *
 * Copyright (c) 2024 Decisions All Rights Reserved
 */
export const ListOfPeople = (_: IListOfPeopleProps) => {
  const people = useRenderStore((s) => s.people);
  const flashClass = useRenderFlashClass();

  return (
    <fieldset>
      <ul style={{ maxHeight: '800px', overflow: 'auto' }}>
        {people.map((item, i) => (
          <li
            key={i}
            className={flashClass}
            style={{ border: '1px solid black', background: 'white', padding: '8px 16px', display: 'flex' }}
          >
            <input type="checkbox" checked={item.selected} onChange={() => {}} />
            <label> First Name: </label>
            <input value={item.first} />
            <label> Last Name: </label>
            <input value={item.last} />
            <label> Age: </label>
            <input value={item.age} />
          </li>
        ))}
      </ul>
    </fieldset>
  );
};
