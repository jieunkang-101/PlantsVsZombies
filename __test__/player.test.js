import { storePlayerState, changePlayerState, garden, zombie, addSunflower } from './../src/player.js';

describe('changePlayerState', () => {

  test('should increment amount of sunflowers by 1', () => {
    const addPlant = garden(addSunflower);
    expect(addPlant.sunflowers).toBe(4)
  });

});