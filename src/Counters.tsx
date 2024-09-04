import React from 'react';
import { useRenderStore } from './RenderStore';
import { useRenderFlashClass } from './RenderFlash';

interface ICountersProps extends React.HTMLProps<{}> {}

/**
 *
 *
 * Copyright (c) 2024 Decisions All Rights Reserved
 */
export function Counters(_: ICountersProps) {
  const { increment, increment2, decrement, decrement2 } = useRenderStore((s) => s.actions);
  const count1 = useRenderStore((s) => s.count);
  const dos = useRenderStore((s) => s.dos);
  const flashClass = useRenderFlashClass();

  return (
    <>
      <div className={flashClass}>
        uno {count1} <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div className={flashClass}>
        dos {dos.count}
        <button onClick={increment2}>Increment</button>
        <button onClick={decrement2}>Decrement</button>
      </div>
    </>
  );
}
