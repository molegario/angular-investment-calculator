import { Component } from "@angular/core";
import { InvestmentResultsService } from "./investment-results.service";
import { CommonModule } from "@angular/common";


@Component({
  selector: "app-investment-results",
  templateUrl: "./investment-results.component.html",
  styleUrls: ["./investment-results.component.css"],
  standalone: true,
  imports: [
    CommonModule,
  ],
})
export class InvestmentResultsComponent {

  constructor(private investmentResultsService: InvestmentResultsService) {}

  get totalAnnualInvestmentsData() {
    return this.investmentResultsService.calculateInvestmentResults();
  }
}