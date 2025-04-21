import { Component } from "@angular/core";
import { InvestmentResultsService } from "./investment-results.service";

@Component({
  selector: "app-investment-results",
  templateUrl: "./investment-results.component.html",
  styleUrls: ["./investment-results.component.css"],
  standalone: false,
})
export class InvestmentResultsComponent {
  constructor(private investmentResultsService: InvestmentResultsService) {}

  get ran_once() {
    return this.investmentResultsService.ran_once; // needs to be computed since the service value is initalized to false
                                                   // and we need to trigger change detection
  }

  get totalAnnualInvestmentsData() {
    return this.investmentResultsService.calculateInvestmentResults();
  }
}