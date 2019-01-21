import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicComponent } from "./public/public.component";
import { AdminComponent } from "./admin/admin.component";

@NgModule({
  declarations: [PublicComponent, AdminComponent],
  imports: [CommonModule],
  exports: [PublicComponent, AdminComponent]
})
export class LayoutModule {}
