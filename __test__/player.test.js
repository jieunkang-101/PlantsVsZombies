import { storeState, changeState, garden, zombie, initialGardenValue, addSunflower, changeGardenProps, zombieAttackThreePlants } from './../src/player.js';

describe('changeState', () => {

  test('should change state of gerden', () => {
    const garden = storeState(initialGardenValue);
    const addPlant = garden(addSunflower);
    expect(addPlant.sunflowers).toBe(11)
  });
});

describe('changeThreePropsCurried', () => {
  
  test('should update three properties of garden state', () => {
    const garden = storeState(initialGardenValue);
    const gardenHitByZombies = garden(zombieAttackThreePlants);
    expect(gardenHitByZombies).toEqual({ sunflowers: 8, potatoes: 8, beanThrowers: 8 })
  });
});
