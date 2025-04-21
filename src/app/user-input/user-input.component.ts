import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results/investment-results.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class UserInputComponent {
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  constructor(private investmentResultsService: InvestmentResultsService) {}

  calculate() {
    //ngSubmit prevents form submission and page reload
    this.investmentResultsService.setInitialInvestment(this.initialInvestment);
    this.investmentResultsService.setAnnualInvestment(this.annualInvestment);
    this.investmentResultsService.setExpectedReturn(this.expectedReturn);
    this.investmentResultsService.setDuration(this.duration);
    this.investmentResultsService.setRanOnce();

    // Reset the form values after submission
    this.initialInvestment = 0;
    this.annualInvestment = 0;
    this.expectedReturn = 0;
    this.duration = 0;
  }
}
