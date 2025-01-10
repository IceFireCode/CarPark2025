// src/floorIndex.ts
export class Carpark {
  private yourCar: number = 2;
  private stairCase: number = 1;

  constructor(private carParkLayout: number[][]) {}

  getRoute(): string[] {
    const carFloor: number | undefined = this.findMyCarFloor();
    if (carFloor === undefined) return [];

    const carFloorIndex: number = this.getIndexFromFloor(carFloor);

    let route: string[] = [];
    let carSpotOnFloor: number = this.findMyCarOnThisFloor(
      this.carParkLayout[carFloorIndex]
    );

    this.carParkLayout.forEach((floorLayout, floorIndex) => {
      const isParkedCarFloorOrLower = floorIndex >= carFloorIndex;
      if (isParkedCarFloorOrLower) {
        const isGroundFloor = floorIndex == this.carParkLayout.length - 1;
        if (isGroundFloor) {
          route.push('R' + carSpotOnFloor);
        } else {
          const stairsSpotOnFloor: number = this.findStairsInFloor(floorLayout);
          if (carSpotOnFloor >= stairsSpotOnFloor) {
            route.push('R' + (carSpotOnFloor - stairsSpotOnFloor));
          } else {
            route.push('L' + (stairsSpotOnFloor - carSpotOnFloor));
          }
          route.push('D1');
          carSpotOnFloor = stairsSpotOnFloor;
        }
      }
    });

    return route;
  }

  findMyCarOnThisFloor(floorLayout: number[]): number {
    return floorLayout.length - floorLayout.indexOf(this.yourCar) - 1;
  }

  findMyCarFloor(): number | undefined {
    for (let i = 0; i < this.carParkLayout.length; i++) {
      if (this.isMyCarParkedThere(this.carParkLayout[i])) {
        return this.carParkLayout.length - i - 1;
      }
    }
    return undefined;
  }

  getIndexFromFloor(floorNumber: number): number {
    return this.carParkLayout.length - floorNumber - 1;
  }

  findStairsInFloor(floorLayout: number[]): number {
    return floorLayout.length - floorLayout.indexOf(this.stairCase) - 1;
  }

  private isMyCarParkedThere(floorLayout: number[]): boolean {
    return floorLayout.find((value) => value == this.yourCar) !== undefined;
  }
}
