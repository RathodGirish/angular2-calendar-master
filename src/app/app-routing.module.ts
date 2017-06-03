/**
 * App Routing.
 */
import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import { MetaGuard, MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@nglibs/meta';

@NgModule({
    imports: [
        RouterModule.forRoot([
            // {
            //     path: '', 
            //     redirectTo: '/', 
            //     pathMatch: 'full'
            // },
            {
                path: '', 
                // canActivateChild: [MetaGuard],
                loadChildren: 'app/components/home/home.module#HomeModule'
            },
            {   path: '**', 
                redirectTo: '' 
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}