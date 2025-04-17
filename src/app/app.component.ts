import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsModule } from './investment-results/investment-results.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    InvestmentResultsModule,
    UserInputComponent,
  ],
})
export class AppComponent {}
