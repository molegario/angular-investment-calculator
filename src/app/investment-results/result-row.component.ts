import { Component, Input } from "@angular/core";
import { AnnualInvestmentResult } from "./investment-results.model";

@Component({
  selector: "tr[app-result-row]",
  templateUrl: "./result-row.component.html",
  styleUrls: ["./result-row.component.css"],
  standalone: false,
})
export class ResultRowComponent {
  @Input({required: true}) resultItem!: AnnualInvestmentResult;
}