import { storeState, changeState, garden, zombie, initialGardenValue, addSunflower } from './../src/player.js';

describe('changeState', () => {

  test('should change state of gerden', () => {
    const garden = storeState(initialGardenValue);
    const addPlant = garden(addSunflower);
    expect(addPlant.sunflowers).toBe(11)
  });

});