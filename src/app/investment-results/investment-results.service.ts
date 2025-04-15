import { Injectable } from "@angular/core";
import { AnnualInvestmentResult } from "./investment-results.model";


@Injectable({providedIn: 'root'})
export class InvestmentResultsService {
  private totalAnnualInvestmentData: AnnualInvestmentResult[] = [];

  duration: number = 0;
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;

  // constructor(duration: number, initialInvestment: number, annualInvestment: number, expectedReturn: number) {
  //   this.duration = duration;
  //   this.initialInvestment = initialInvestment;
  //   this.annualInvestment = annualInvestment;
  //   this.expectedReturn = expectedReturn;
  // }

  setDuration(duration: number) {
    this.duration = duration;
  }

  setInitialInvestment(initialInvestment: number) {
    this.initialInvestment = initialInvestment;
  }

  setAnnualInvestment(annualInvestment: number) {
    this.annualInvestment = annualInvestment;
  }

  setExpectedReturn(expectedReturn: number) {
    this.expectedReturn = expectedReturn;
  }

  calculateInvestmentResults(): AnnualInvestmentResult[] {

    if (this.duration <= 0 || this.initialInvestment < 0 || this.annualInvestment < 0 || this.expectedReturn < 0) {
      return [];
    }

    this.totalAnnualInvestmentData = [];
    let investmentValue = this.initialInvestment;

    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.annualInvestment;
      const totalInterest =
        investmentValue - this.annualInvestment * year - this.initialInvestment;
      this.totalAnnualInvestmentData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
      });
    }

    console.log('totalAnnualInvestmentData::', this.totalAnnualInvestmentData);

    return this.totalAnnualInvestmentData;
  }
}