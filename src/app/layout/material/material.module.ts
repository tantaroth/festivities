import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatTabsModule,
  MatSidenavModule,
  MatGridListModule,
  MatIconModule,
  MatListModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
    MatIconModule,
    MatListModule
  ]
})
export class MaterialModule {}
