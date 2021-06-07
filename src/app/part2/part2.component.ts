import { Component, OnInit } from '@angular/core';
import { PerlinService } from '../perlin.service';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss']
})
export class Part2Component implements OnInit {
  canvas: any;
  ctx: any;

  points: number[][] = [];

  constructor(
    public perlin: PerlinService
  ) { }

  ngOnInit(): void {
    this.canvas = document.getElementById('sceneB');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    let width = this.canvas.width;
    let height = this.canvas.height;

    for (let r = 0; r < 40; r++) {
      this.points.push([Math.random() * width, Math.random() * height, Math.random(), (Math.random() * 2) - 1, (Math.random() * 2) - 1]);
      //X Y TTL XSpeed YSpeed
    }

    this.ctx.fillStyle = "#aaa";
    this.ctx.lineWidth = 1;

    setInterval(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.draw();
    }, 25)
  }

  draw() {
    let width = this.canvas.width;
    let height = this.canvas.height;

    // this.rect(0, 0, 400, 300);

    for (let point of this.points) {
      point[2] -= 0.001;
      point[0] += point[3] / 7;
      point[1] += point[4] / 7;

      if (point[0] + point[2] > width - 10) {
        point[3] = -point[3];
        point[0] = width - point[2] - 10;
      }

      if (point[0] - point[2] < 10) {
        point[3] = -point[3];
        point[0] = point[2] + 10;
      }

      if (point[1] + point[2] > height - 10) {
        point[4] = -point[4];
        point[1] = height - point[2] - 10;
      }

      if (point[1] - point[2] < 10) {
        point[4] = -point[4];
        point[1] = point[2] + 10;
      }

      if (point[2] < -0.1) point[2] = Math.random();

      for (let target of this.points) {
        if (point == target) continue;
        if (point[2] <= 0 || target[2] <= 0) continue;

        let xDiff = Math.abs(point[0] - target[0]);
        let yDiff = Math.abs(point[1] - target[1]);
        let diff = (xDiff ** 2 + yDiff ** 2) ** 0.5;

        if (diff > 100) continue;

        this.ctx.fillStyle = "#0000"
        this.ctx.strokeStyle = `rgba(${diff / 10}, 100, 100, ${diff / 100})`;
        this.ctx.lineWidth = diff / 200;
        this.line(point[0], point[1], target[0], target[1]);
      }

      this.ctx.fillStyle = `rgba(${(1-point[2]) * 200}, 255, 255, ${point[2] * 0.8})`;
      this.ctx.lineWidth = 0;
      this.ctx.strokeStyle = "#0000";
      this.ellipse(point[0], point[1], (2 * point[2]) + 2);
    }
  }

  line(x1: number, y1: number, x2: number, y2: number): void {
    this.ctx.beginPath();

    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);

    this.ctx.closePath();
    this.ctx.stroke();
  }

  rect(x1: number, y1: number, x2: number, y2: number): void {
    this.ctx.beginPath();
    this.ctx.rect(0, 0, 400, 300);
    this.ctx.stroke();
  }

  ellipse(x: number, y: number, r: number): void {
    this.ctx.beginPath();

    this.ctx.arc(x, y, r, 0, 2 * Math.PI)

    this.ctx.closePath();

    this.ctx.fill();

    this.ctx.stroke();
  }
}
