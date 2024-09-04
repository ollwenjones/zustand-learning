import React from 'react';
import { useRenderStore } from './RenderStore';
import { useRenderFlashClass } from './RenderFlash';

interface IRenderTestProps extends React.HTMLProps<{}> {}

/**
 *
 *
 * Copyright (c) 2024 Decisions All Rights Reserved
 */
export function RenderTest(_: IRenderTestProps) {
  const count1 = useRenderStore((s) => s.count);
  const dos = useRenderStore((s) => s.dos);
  const s = useRenderStore((s) => s);
  const increment = useRenderStore((s) => s.increment);
  const decrement = useRenderStore((s) => s.decrement);
  const increment2 = useRenderStore((s) => s.increment2);
  const decrement2 = useRenderStore((s) => s.decrement2);
  const notes = useRenderStore((s) => s.notes);
  const setNotes = useRenderStore((s) => s.setNotes);
  const flashClass = useRenderFlashClass();


  // const [myState, setMyState] = useState(0);

  // const by3 = useMemo(() => {
  //   return dos.count / 3;
  // }, [dos]);

  // useEffect(() => {
  //   if (dosRef.current !== dos) {
  //     // updating local state based on a store change will obviously cause additional renders
  //     // setMyState(myState + 1);
  //     dosRef.current = dos;
  //   }
  // }, [dos]);

  return (
    <div className={flashClass}>
      <div>
        uno {count1} <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        dos {dos.count}
        <button onClick={increment2}>Increment</button>
        <button onClick={decrement2}>Decrement</button>
      </div>
      <hr />
      <label>
        Notes:
        <br />
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </label>
      <fieldset>
        <ul style={{ maxHeight: '800px', overflow: 'auto' }}>
          {s.people.map((item, i) => (
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
    </div>
  );
}
