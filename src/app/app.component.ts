import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ServerStatusComponent } from "./components/server-status/server-status.component";
import { TicketsComponent } from "./components/tickets/tickets.component";
import { TrafficComponent } from "./components/traffic/traffic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ServerStatusComponent, TicketsComponent, TrafficComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'system-overview';
}
