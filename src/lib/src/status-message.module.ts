import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { StatusMessageComponent } from './components/status-message/status-message';

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [StatusMessageComponent],
    exports: [StatusMessageComponent]
})
export class StatusMessageModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StatusMessageModule,
            providers: []
        };
    }
}
