export const stateOpen = (
  currentState: boolean,
  setCurrentState: (value: boolean) => void
) => {
  setCurrentState(!currentState);
};
