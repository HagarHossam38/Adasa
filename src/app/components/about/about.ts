import { Component } from '@angular/core';
import { GridBackground } from "../grid-background/grid-background";
import { SectionLabel } from "../section-label/section-label";
import { PingDot } from "../ping-dot/ping-dot";

@Component({
  selector: 'app-about',
  imports: [GridBackground, SectionLabel, PingDot],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
