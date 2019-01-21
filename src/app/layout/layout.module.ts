import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material/material.module";
import { CovalentModule } from "./covalent/covalent.module";
import { PublicComponent } from "./public/public.component";
import { AdminComponent } from "./admin/admin.component";

@NgModule({
  declarations: [PublicComponent, AdminComponent],
  imports: [CommonModule, MaterialModule, CovalentModule],
  exports: [PublicComponent, AdminComponent]
})
export class LayoutModule {}
