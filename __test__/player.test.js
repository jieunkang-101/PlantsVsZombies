import { storePlayerState, changePlayerState, playerOne, playerTwo, addSunflower } from './../src/player.js';

describe('changePlayerState', () => {

  test('should change player state by a specigied function', () => {
    const addPlant = playerOne(addSunflower);
    expect(addPlant.sunflowers).toBe(4)
  });

});
