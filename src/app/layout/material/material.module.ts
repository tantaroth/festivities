import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
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
    MatFormFieldModule,
    MatInputModule,
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
    MatFormFieldModule,
    MatInputModule,
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
