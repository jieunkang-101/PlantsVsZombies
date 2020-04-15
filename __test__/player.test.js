import { storePlayerState, changePlayerState, playerOne, playerTwo, addSunflower } from './../src/player.js';

describe('changePlayerState', () => {

  test('should increment amount of sunflowers by 1', () => {
    const newGardenState = playerOne(addSunflower);
    expect(newGardenState.sunflowers).toBe(4)
  });

});
