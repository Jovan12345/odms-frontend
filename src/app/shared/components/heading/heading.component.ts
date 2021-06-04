import { Component } from '@angular/core';

import { faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {
  faTruck = faTruck;
}
