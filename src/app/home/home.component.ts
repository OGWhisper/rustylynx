import { Component, OnInit } from '@angular/core';
import { ScrollMasterService } from '../scroll-master.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hardware: any = [
    // {
    //   "Name": "Sarma",
    //   "Threads": "64",
    //   "Clock": "4.4GHz",
    //   "Ram": "256GB",
    //   "Operational": true
    // },
    {
      "Name": "Hex",
      "Threads": "16",
      "Clock": "4.4GHz",
      "Ram": "32GB",
      "Operational": true
    },
    {
      "Name": "Wheat",
      "Threads": "8",
      "Clock": "3.8GHz",
      "Ram": "32GB",
      "Operational": true
    },
    {
      "Name": "Barley",
      "Threads": "8",
      "Clock": "3.8GHz",
      "Ram": "32GB",
      "Operational": true
    },
    {
      "Name": "Corn",
      "Threads": "8",
      "Clock": "3.8GHz",
      "Ram": "32GB",
      "Operational": true
    },
    {
      "Name": "Oct",
      "Threads": "8",
      "Clock": "3.4GHz",
      "Ram": "16GB",
      "Operational": true
    },
    {
      "Name": "Hyrican",
      "Threads": "8",
      "Clock": "3.4GHz",
      "Ram": "16GB",
      "Operational": true
    },
    {
      "Name": "Rice",
      "Threads": "4",
      "Clock": "3.4GHz",
      "Ram": "16GB",
      "Operational": false
    },
    {
      "Name": "Alpha",
      "Threads": "4",
      "Clock": "3.7GHz",
      "Ram": "16GB",
      "Operational": true
    },
    {
      "Name": "Beta",
      "Threads": "4",
      "Clock": "3.7GHz",
      "Ram": "16GB",
      "Operational": true
    },
    {
      "Name": "Gamma",
      "Threads": "8",
      "Clock": "3.4GHz",
      "Ram": "16GB",
      "Operational": false
    }
  ]

  constructor(
    public scroll: ScrollMasterService
  ) { }

  ngOnInit(): void {
  }

  getServerOffset(): number {
    let offset = Math.max((this.scroll.getScrollHeight()*0.1) - 50, 0);
    return offset;
  }

}
