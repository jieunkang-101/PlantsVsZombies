export const storePlayerState = (initialPlayerState) => {
  let currentPlayerState = initialPlayerState;
  return (playerStateChangeFunction) => {
    const newPlayerState = playerStateChangeFunction(currentPlayerState);
    currentPlayerState = {...newPlayerState };
    return newPlayerState;
  }
}

const initialPlayerValue = { sunflowers: 3, potatoes: 5, beanThrowers: 2, zombies: 2 }
export const playerOne = storePlayerState(initialPlayerValue);
export const playerTwo = storePlayerState(initialPlayerValue);

export const changePlayerState  = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

// Player Attack Methods
export const addSunflower = changePlayerState("sunflowers")(1);
export const addPotato = changePlayerState("potatoes")(1);
export const addBeanThrower = changePlayerState("beanThrowers")(1);
export const addZombie = changePlayerState("zombies")(1);
export const loseSunflower = changePlayerState("sunflowers")(-1);
export const losePotato = changePlayerState("potatoes")(-1);
export const loseBeanThrower = changePlayerState("beanThrowers")(-1);
export const killZombie = changePlayerState("zombies")(-1);


//Zombie Attack Methods