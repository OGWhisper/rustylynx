import { Component, OnInit } from '@angular/core';
import { PerlinService } from '../perlin.service';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {
  canvas: any;
  ctx: any;

  counter = 0;

  lines: number[][] = [];

  constructor(
    public perlin: PerlinService
  ) {

  }

  ngOnInit(): void {
    this.canvas = document.getElementById('sceneA');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    for (let r = 0; r < 180; r += 5) {
      this.lines.push([r, Math.random() * Math.PI * 2, r * 2 * Math.PI]);
    }

    this.ctx.fillStyle = "#0000";
    this.ctx.strokeStyle = "#444";
    this.ctx.strokeStyle = "#444";
    this.ctx.lineWidth = 1;

    setInterval(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.draw();
    }, 40)
  }

  draw() {
    let width = this.canvas.width;
    let height = this.canvas.height;

    // this.rect(0, 0, 400, 300);

    this.counter += 0.005

    let harmony = Math.sin(this.counter) + 3;

    for (let line of this.lines) {
      line[1] += (400 - line[2]) / 40000;

      let shift = line[1];

      let lastTheta = 0;

      for (let a = 0; a < line[2] / 2; a += 2) {
        let theta = (a / line[2]) * Math.PI * 2;
        theta += shift;

        if (a == 0) {
          lastTheta = theta;
          continue;
        }        

        let x1 = Math.cos(lastTheta) * (line[0] + Math.sin(lastTheta*harmony)*100) * 0.6;
        let y1 = Math.sin(lastTheta) * (line[0] + Math.sin(lastTheta*harmony)*100) * 0.6;
        let x2 = Math.cos(theta) * (line[0] + Math.sin(theta*harmony)*100) * 0.6;
        let y2 = Math.sin(theta) * (line[0] + Math.sin(theta*harmony)*100) * 0.6;

        x1 += width / 2;
        x2 += width / 2;
        y1 += height / 2;
        y2 += height / 2;

        this.ctx.strokeStyle = `rgba(${line[0] / 20 - 0.025}, 160, 160, ${line[0] / 400 - 0.025})`;

        this.line(x1, y1, x2, y2);

        lastTheta = theta;
      }
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
}

