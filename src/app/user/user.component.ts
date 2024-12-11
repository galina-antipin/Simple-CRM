import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink, CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
