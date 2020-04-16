export const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState };
    return newState;
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

// stateChangeFunction(state) {
//   return  ...state, [prop] : (state[prop] || 0) + value
// }

export const changeThreeProps = (prop1, prop2, prop3) => {
  return (value1, value2, value3) => {
    return (state) => ({
      ...state,
      [prop1] : (state[prop1] || 0) + value1,
      [prop2] : (state[prop2] || 0) + value2,
      [prop3] : (state[prop3] || 0) + value3
    })
  }
}

export const changeThreePropsCurried = (prop1) => {
  return (prop2) => {
    return (prop3) => {
      return (value1) => {
        return (value2) => {
          return (value3) => {
            return (state) => ({
              ...state,
              [prop1] : (state[prop1] || 0) + value1,
              [prop2] : (state[prop2] || 0) + value2,
              [prop3] : (state[prop3] || 0) + value3
            })
          }
        }
      }
    }
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
// export const changeGardenProps = changeThreeProps("sunflowers", "potatoes", "beanThrowers");
export const changeGardenProps = changeThreePropsCurried("sunflowers")("potatoes")("beanThrowers");

// Add plants and Defence for Garden side
export const addSunflower = changeSunflower(1);
export const addPotato = changePotato(1);
export const addBeanThrower = changeBeanThrower(1);


export const killZombie = changeZombie(-1);

export const growSunflower = garden(addSunflower);
export const growPotato = garden(addPotato);
export const growBeanThrower = garden(addBeanThrower);


// Attact plants and Grow zombies for Zombie side
export const zombieAttackSunflower = changeSunflower(-2);
export const zombieAttackPotato = changePotato(-2);
export const zombieAttackBeanThrower = changeBeanThrower(-2);
//export const zombieAttackThreePlants = changeGardenProps(-2, -2, -2);
export const zombieAttackThreePlants = changeGardenProps(-2)(-2)(-2);
export const addZombie = changeZombie(1);

export const attackedSunflower = garden(zombieAttackSunflower);
export const attackedPotato = garden(zombieAttackPotato);
export const attackedBeanThrower = garden(zombieAttackBeanThrower);
export const gardenHitByZombies = garden(zombieAttackThreePlants);
export const afterZombieAttack = zombie(killZombie);