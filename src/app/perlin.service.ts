import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerlinService {
  pixelLength: number = 1;
  pixelsAlong:number = 400;
  pixelsUp: number = 300;

  pointSpread: number = 100;

  points: any[] = [];

  constructor() {
    for (let i = 0; i < this.pixelsAlong; i += this.pointSpread) {
      for (let j = 0; j < this.pixelsUp; j += this.pointSpread) {
        this.points.push({
          "x": this.random(0, this.pointSpread) + i,
          "y": this.random(0, this.pointSpread) + j
        })
      }
    }
  }

  noise(x: number, y: number) {
    x = x % 400;
    y = y % 300;
    
    let s = Infinity;

    for (let point of this.points) {
      let d = ((point.x - x) ** 2 + (point.y - y) ** 2) ** 0.5;

      if (d < s) {
        s = d;
      }
    }

    return (s / (this.pointSpread * (2**0.5))**0.95);
  }

  random(lower: number, upper: number) {
    let diff = upper - lower;

    return lower + (diff * Math.random());
  }
}
