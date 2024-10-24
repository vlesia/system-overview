import { Component } from '@angular/core';
import { DummyTraffic } from '../../../data/dummy-traffic';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  dummyTrafficData = DummyTraffic;
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
