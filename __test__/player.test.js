import { storePlayerState, changePlayerState, playerOne, playerTwo, addSunflower } from './../src/player.js';

describe('changePlayerState', () => {

  test('should increment amount of sunflowers by 1', () => {
    const addPlant = playerOne(addSunflower);
    expect(addPlant.sunflowers).toBe(4)
  });

});
