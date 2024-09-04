import React from 'react';
import { useRenderStore } from './RenderStore';
import { ListOfPeople } from './ListOfPeople';
import { Counters } from './Counters';

interface IRenderTestProps extends React.HTMLProps<{}> {}

/**
 *
 *
 * Copyright (c) 2024 Decisions All Rights Reserved
 */
export function RenderTest(_: IRenderTestProps) {
  const { setNotes } = useRenderStore((s) => s.actions);
  const notes = useRenderStore((s) => s.notes);

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
    <div>
      <Counters />
      <hr />
      <label>
        Notes:
        <br />
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </label>
      <ListOfPeople />
    </div>
  );
}
