import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./material/material.module";
import { CovalentModule } from "./covalent/covalent.module";
import { PublicComponent } from "./public/public.component";
import { AdminComponent } from "./admin/admin.component";

@NgModule({
  declarations: [PublicComponent, AdminComponent],
  imports: [CommonModule, RouterModule, MaterialModule, CovalentModule],
  exports: [MaterialModule, CovalentModule, PublicComponent, AdminComponent]
})
export class LayoutModule {}
