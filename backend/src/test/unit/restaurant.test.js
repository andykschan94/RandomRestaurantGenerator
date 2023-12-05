import { getRestaurantByID, updateRestaurant } from '../../library/restaurant';

describe('Testing restaurant functions', () => {
  test('getRestaurantByID() - Valid', async () => {
    expect(getRestaurantByID('HIhk7UXflI734uo9thXC')).toMatchInlineSnapshot();
  });

  test('getRestaurantByID() - Invalid', async () => {
    try {
      await getRestaurantByID('Invalid_Restaurant_ID');
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`[Error: Restaurant not found!]`);
    }
  });

  test('getRestaurantByID() - Valid', async () => {
    expect(getRestaurantByID('HIhk7UXflI734uo9thXC')).toMatchInlineSnapshot();
  });

  test('updateRestaurant() - Valid', async () => {
    try {
      await updateRestaurant('HIhk7UXflI734uo9thXC', "Andy's Diner");
    } catch (error) {
      expect(error).toMatchInlineSnapshot();
    }
  });

  test('updateRestaurant() - Invalid', async () => {
    try {
      await updateRestaurant('Invalid_Restaurant_ID', "Andy's Diner");
    } catch (error) {
      expect(error).toMatchInlineSnapshot(`[Error: Restaurant not found!]`);
    }
  });

  test('updateRestaurant() - Valid', async () => {
    try {
      await updateRestaurant('HIhk7UXflI734uo9thXC', "James's Diner");
    } catch (error) {
      expect(error).toMatchInlineSnapshot();
    }
  });
});
