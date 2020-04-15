export const storePlayerState = (initialPlayerState) => {
  let currentPlayerState = initialPlayerState;
  return (playerStateChangeFunction) => {
    const newPlayerState = playerStateChangeFunction(currentPlayerState);
    currentPlayerState = {...newPlayerState };
    return newPlayerState;
  }
}

const initialPlayerValue = { sunflowers: 3, potatoes: 5, beanThrowers: 2, zombies: 2 }
const playerOne = storePlayerState(initialPlayerValue);
const playerTwo = storePlayerState(initialPlayerValue);

export const changePlayerState  = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}