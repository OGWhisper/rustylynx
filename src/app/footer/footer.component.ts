import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  discord(): void {
    window.open('https://discord.gg/XarTNGEC44', '_blank');
  }

  facebook(): void {
    window.open('https://www.facebook.com/RustyLynxServers/', '_blank');
  }

  learnToPlay(): void {
    window.open('https://www.battlemetrics.com/servers/rust/4484447', '_blank');
  }

  twox(): void {
    window.open('https://www.battlemetrics.com/servers/rust/7019484', '_blank');
  }

  pve(): void {
    window.open('https://www.battlemetrics.com/servers/rust/9932483', '_blank');
  }

  fivex(): void {
    window.open('https://www.battlemetrics.com/servers/rust/8810826', '_blank');
  }
}
