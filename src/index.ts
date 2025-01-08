// src/index.ts
export class Carpark {
  private yourCar: number = 2;

  constructor(private carParkLayout: number[][]) {}

  getRoute(): string[] {
    if (this.isMyCarParkedThere(this.carParkLayout[0])) {
      return ['R' + this.findMyCarOnThisFloor(this.carParkLayout[0])];
    }
    return [];
  }

  isMyCarParkedThere(floorLayout: number[]): boolean {
    return floorLayout.find((value) => value == this.yourCar) !== undefined;
  }

  findMyCarOnThisFloor(floorLayout: number[]): number {
    return floorLayout.length - floorLayout.indexOf(this.yourCar) - 1;
  }
}
