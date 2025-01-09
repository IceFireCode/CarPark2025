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

describe('Car park of multiple floors', () => {
  describe('given one floor with car parked in the first floor ', () => {
    it('findMyCarFloor should return 0', () => {
      expect(new Carpark([[0, 0, 0, 0, 2]]).findMyCarFloor()).toStrictEqual(0);
    });
  });
  describe('given two floors with car parked in the first floor ', () => {
    it('findMyCarFloor should return 0', () => {
      expect(
        new Carpark([
          [1, 0, 0, 0, 0],
          [0, 0, 0, 0, 2],
        ]).findMyCarFloor()
      ).toStrictEqual(0);
    });
    it('we find the route to exit the parking', () => {
      expect(
        new Carpark([
          [0, 0, 0, 0, 1],
          [0, 0, 0, 0, 2],
        ]).getRoute()
      ).toStrictEqual(['R0']);
    });
  });
  describe('given two floors with car parked in the second floor ', () => {
    it('findMyCarFloor should return 1', () => {
      expect(
        new Carpark([
          [0, 0, 0, 2, 1],
          [0, 0, 0, 0, 0],
        ]).findMyCarFloor()
      ).toStrictEqual(1);
    });
    it('we find the route to exit the parking', () => {
      expect(
        new Carpark([
          [0, 0, 0, 2, 1],
          [0, 0, 0, 0, 0],
        ]).getRoute()
      ).toStrictEqual(['R1', 'D1', 'R0']);
    });
  });

  describe('given many floors with car parked in the top floor', () => {
    it('we find the route to exit the parking', () => {
      expect(
        new Carpark([
          [0, 0, 0, 2, 1],
          [1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ]).getRoute()
      ).toStrictEqual(['R1', 'D1', 'L4', 'D1', 'R4']);
    });
    it('we find the route to exit the parking', () => {
      expect(
        new Carpark([
          [0, 0, 2, 0, 1],
          [1, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 0, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0],
        ]).getRoute()
      ).toStrictEqual([
        'R2',
        'D1',
        'L4',
        'D1',
        'R2',
        'D1',
        'L1',
        'D1',
        'R2',
        'D1',
        'R1',
      ]);
    });
  });
  describe('given many floors with car parked in a middle floor', () => {
    it('we find the route to exit the parking', () => {
      expect(
        new Carpark([
          [0, 0, 0, 0, 1],
          [1, 0, 2, 0, 0],
          [0, 0, 0, 0, 0],
        ]).getRoute()
      ).toStrictEqual(['L2', 'D1', 'R4']);
    });
    it('we find the route to exit the parking', () => {
      expect(
        new Carpark([
          [0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0],
          [2, 0, 1, 0, 0],
          [0, 1, 0, 0, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0],
        ]).getRoute()
      ).toStrictEqual(['R2', 'D1', 'L1', 'D1', 'R2', 'D1', 'R1']);
    });
  });
});

describe('Given a car park floor', () => {
  it('we need to return the location of the stairs if any', () => {
    const carparkLayout: number[][] = [
      [1, 0, 0, 2, 0],
      [0, 0, 0, 0, 0],
    ];
    expect(
      new Carpark(carparkLayout).findStairsInFloor(carparkLayout[0])
    ).toStrictEqual(4);
  });
});
