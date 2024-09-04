# Zustand Points of Discussion and Ideas

## Prelim: Why use a data-store?

(let people ask)

Have example and interact with it, and look at dev tools profiler - or how easy to have something that flashes on each re-render? - a child that re-parents because it got a different fragment as render props?

- Simple store, but with a lot of rows
- Button to update something random?
  - Have it call _set_ at least 2x
- Show selectors, and how they affect what re-renders
  - returning everything
  - returning a new array every time
  - returning a new object (selected state) every time
  - atomic selectors
- Reduce the number of _set_ calls

# Prefer

1. flatter state
   - reduces getter complexity
   - reduces setter complexity
   - reduce selector complexity
1. atomic selectors
   - selectors save rework over inline functions
   - the more atomic state a sector returns, the less likely it will cause unecessary re-renders.
     - i.e. comparing primitives is cheap
1. fewer set() calls
1. calculating derived state rather than storing it
1. memoize / cache array conversions (e.g. es Map to Array)
   - an anti-pattern becomes an optimization, used with care :)

https://greenonsoftware.com/articles/libraries/working-with-selectors-in-zustand-and-redux/

https://tkdodo.eu/blog/working-with-zustand

# Examples

Q: How can we make this better?

1. Loading description at the root component
1. Comparing to disable Commit button if it's falsy

```tsx
const description = useCheckInWizardStore(getDescription);
```

A: Use a selector that returns a boolean!
Q: Why?
A: The useStore hook will not fire unless the boolean flips!

Q: How Can I improve this?

1. loading a list that will update often
1. only using it in a handler

```tsx
const progressMessages = useCheckInWizardStore(getProgressMessages) ?? [],
const checkinSessionId = useCheckInWizardStore(getCheckinSessionId)
//...
    onClick: () => downloadImportLogs(progressMessages, checkinSessionId),
```

A: use vanilla getState right when you need it, and comment why you did so!

```tsx
    onClick: () => {
        // use vanilla getState() since we don't need to subscribe & re-render at this level for each update to the messages list
        downloadImportLogs(
            getProgressMessages(useCheckInWizardStore.getState()) ?? [],
            getCheckinSessionId(useCheckInWizardStore.getState())
        );
    },
```

A: Even Better! Move that logic out of the component layer altogether!

```tsx
const { downloadLogs } = useCheckInWizardStore((s) => s.actions);
//...
    onClick: downloadLogs,
```

Remember one of the main use-cases of data-stores in React is to move _business logic_ out of components,
(particularly async logic), so components can be about _display logic_.
