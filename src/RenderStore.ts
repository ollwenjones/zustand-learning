import { produce } from 'immer';
import create from 'zustand';

type RenderStoreState = {
  count: number;
  dos: { count: number };
  people: ReturnType<typeof getPeople>;
  notes: string;
  actions: {
    setNotes: (value: string) => void;
    increment: () => void;
    decrement: () => void;
    increment2: () => void;
    decrement2: () => void;
  };
};

export const useRenderStore = create<RenderStoreState>((set, get) => ({
  count: 0,
  dos: { count: 0 },
  people: getPeople(),
  notes: '',
  actions: {
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    increment2: () => {
      set((state) => ({ dos: { count: state.dos.count + 1 } }));
    },
    // set(
    //   produce((state) => {
    //     state.count += 1;
    //     state.dos.count += 1;

    //   })
    // ),
    decrement2: () => {
      const prevCount = get().count;
      // decrement uno
      set((state) => ({ count: state.count - 1 }));

      const newCount = get().count;

      console.warn('newCount', newCount, 'prevCount', prevCount);
      // decrement dos pretend this is some async action
      setTimeout(() => {
        set(
          produce((state) => {
            // state.count -= 1;
            state.dos.count -= 1;
          })
        );
      });
    },
    setNotes: (notes) => set({ notes }),
  },
}));

//#region selectors

export function getNotes(state: RenderStoreState) {
  return state.notes;
}

export function setNotes(notes: string) {
  useRenderStore.setState({ notes });
}

//#endregion selectors

// create 50 entities with name and age
function getPeople() {
  return [
    { first: 'Georgia', last: 'Mathews', age: 1, selected: false },
    { first: 'Jamir', last: 'Friedman', age: 1, selected: false },
    { first: 'Aspyn', last: 'Callahan', age: 1, selected: false },
    { first: 'Quinton', last: 'Hester', age: 1, selected: false },
    { first: 'Zendaya', last: 'O’Neal', age: 1, selected: false },
    { first: 'Eddie', last: 'Zimmerman', age: 1, selected: false },
    { first: 'Ariyah', last: 'Jacobson', age: 1, selected: false },
    { first: 'Legacy', last: 'Cooper', age: 1, selected: false },
    { first: 'Serenity', last: 'Quinn', age: 1, selected: false },
    { first: 'Rhys', last: 'McDonald', age: 1, selected: false },
    { first: 'Daisy', last: 'Montgomery', age: 1, selected: false },
    { first: 'Maximiliano', last: 'O’Neal', age: 1, selected: false },
    { first: 'Treasure', last: 'Carroll', age: 1, selected: false },
    { first: 'Oscar', last: 'Chen', age: 1, selected: false },
    { first: 'Valeria', last: 'Kent', age: 1, selected: false },
    { first: 'Mekhi', last: 'Chandler', age: 1, selected: false },
    { first: 'Viviana', last: 'McCarthy', age: 1, selected: false },
    { first: 'Devin', last: 'McMahon', age: 1, selected: false },
    { first: 'Belen', last: 'Bowman', age: 1, selected: false },
    { first: 'Francisco', last: 'Pearson', age: 1, selected: false },
    { first: 'Kiara', last: 'Kane', age: 1, selected: false },
    { first: 'Brock', last: 'Morse', age: 1, selected: false },
    { first: 'Kairi', last: 'Church', age: 1, selected: false },
    { first: 'Terrance', last: 'Thompson', age: 1, selected: false },
    { first: 'Madison', last: 'Villegas', age: 1, selected: false },
    { first: 'Clyde', last: 'McKenzie', age: 1, selected: false },
    { first: 'Briar', last: 'Hayes', age: 1, selected: false },
    { first: 'Legend', last: 'Arias', age: 1, selected: false },
    { first: 'Aleah', last: 'Villalobos', age: 1, selected: false },
    { first: 'Reuben', last: 'Rosario', age: 1, selected: false },
    { first: 'Louisa', last: 'Kramer', age: 1, selected: false },
    { first: 'Kylan', last: 'Branch', age: 1, selected: false },
    { first: 'Luisa', last: 'Villarreal', age: 1, selected: false },
    { first: 'Nikolai', last: 'Duke', age: 1, selected: false },
    { first: 'Melani', last: 'Nelson', age: 1, selected: false },
    { first: 'Dylan', last: 'Berger', age: 1, selected: false },
    { first: 'Laylah', last: 'McCormick', age: 1, selected: false },
    { first: 'Jasiah', last: 'Barry', age: 1, selected: false },
    { first: 'Waverly', last: 'Ward', age: 1, selected: false },
    { first: 'Jameson', last: 'Butler', age: 1, selected: false },
    { first: 'Athena', last: 'Montoya', age: 1, selected: false },
    { first: 'Ford', last: 'Lopez', age: 1, selected: false },
    { first: 'Gianna', last: 'Paul', age: 1, selected: false },
    { first: 'Noel', last: 'Sutton', age: 1, selected: false },
    { first: 'Izabella', last: 'Harris', age: 1, selected: false },
    { first: 'Samuel', last: 'Pineda', age: 1, selected: false },
    { first: 'Nola', last: 'Kim', age: 1, selected: false },
    { first: 'Roman', last: 'Hess', age: 1, selected: false },
    { first: 'Kaliyah', last: 'Fields', age: 1, selected: false },
    { first: 'Clayton', last: 'Suarez', age: 1, selected: false },
  ].map((p, i) => ({ ...p, id: i, age: Math.round(Math.random() * 100) }));
}
