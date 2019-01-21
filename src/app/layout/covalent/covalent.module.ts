import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  CovalentCommonModule,
  CovalentLayoutModule,
  CovalentMenuModule
} from "@covalent/core";
/* any other core modules */
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from "@covalent/http";
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from "@covalent/dynamic-forms";
import { CovalentMessageModule } from '@covalent/core/message';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CovalentCommonModule,
    CovalentLayoutModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentMessageModule
  ],
  exports: [
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMenuModule,
    CovalentHttpModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentMessageModule
  ]
})
export class CovalentModule {}
