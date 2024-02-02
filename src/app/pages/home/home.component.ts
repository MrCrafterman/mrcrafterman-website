import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ClassDirective } from '../../directives/class.directive'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ClassDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomeComponent { }
