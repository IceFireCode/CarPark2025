// tests/index.test.ts
import { Carpark } from '../src/';

describe('Car park of one floor', () => {
  describe('with no car', () => {
    it('getRoute should return no navigation steps', () => {
      expect(new Carpark([[0, 0, 0, 0, 0]]).getRoute()).toStrictEqual([]);
    });
  });
  describe('with the car parked at the exit', () => {
    it('getRoute should return the navigation step "R0"', () => {
      expect(new Carpark([[0, 0, 0, 0, 2]]).getRoute()).toStrictEqual(['R0']);
    });
  });
  describe('with not knowing where is the car', () => {
    it('finds the car in the correct park', () => {
      const layout: number[][] = [[2, 0, 0, 0, 0]];
      expect(new Carpark(layout).findMyCarOnThisFloor(layout[0])).toStrictEqual(
        4
      );
    });
  });
  describe('with the car parked at any position', () => {
    it('getRoute should return the navigation step from the position to the exit', () => {
      expect(new Carpark([[2, 0, 0, 0, 0]]).getRoute()).toStrictEqual(['R4']);
    });
  });
});
