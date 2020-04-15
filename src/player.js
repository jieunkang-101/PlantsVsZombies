export const storeState = (initialPlayerState) => {
  let currentPlayerState = initialPlayerState;
  return (stateChangeFunction) => {
    const newPlayerState = stateChangeFunction(currentPlayerState);
    currentPlayerState = {...newPlayerState };
    return newPlayerState;
  }
}

export const changeState  = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

// Store states our plants and zombie
export const initialGardenValue = { sunflowers: 10, potatoes: 10, beanThrowers: 10 }
export const initialZombieValue = { zombies: 10, zombieAttack: false }
export const garden = storeState(initialGardenValue);
export const zombie = storeState(initialZombieValue);

// Change states our plants and zombies
export const changeSunflower = changeState("sunflowers");
export const changePotato = changeState("potatos");
export const changeBeanThrower = changeState("beanThrowers");
export const changeZombie = changeState("zombies");
export const comesZombieAttack = changeState("zombieAttact")(true);

// Add plants and Defence for Garden side
export const addSunflower = changeSunflower(1);
export const addPotato = changePotato(1);
export const addBeanThrower = changeBeanThrower(1);
export const killZombie = changeZombie(-1);

export const growSunflower = garden(addSunflower);
export const growPotato = garden(addPotato);
export const growBeanThrower = garden(addBeanThrower);

// Attact plants and Grow zombies for Zombie side
export const attackedSunflower = changeSunflower(-2);
export const attackedPotato = changePotato(-2);
export const attackedBeanThrower = changeBeanThrower(-2);
export const addZombie = changeZombie(1);

export const attackedSunflower = garden(zombieAttackSunflower);
export const attackedPotato = garden(zombieAttackPotato);
export const attackedBeanThrower = garden(zombieAttackBeanThrower);
export const afterZombieAttack = zombie(killZombie);


