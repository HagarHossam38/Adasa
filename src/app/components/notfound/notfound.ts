import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { GridBackground } from "../grid-background/grid-background";

@Component({
  selector: 'app-notfound',
  imports: [RouterLink, GridBackground],
  templateUrl: './notfound.html',
  styleUrl: './notfound.css',
})
export class Notfound {

}
