import { NgModule } from "@angular/core";
import { InvestmentResultsComponent } from "./investment-results.component";
import { ResultRowComponent } from "./result-row.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    InvestmentResultsComponent,
    ResultRowComponent,
  ],
  imports: [CommonModule],
  exports: [
    InvestmentResultsComponent,
  ],
})
export class InvestmentResultsModule {}