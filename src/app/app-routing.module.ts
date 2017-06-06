/**
 * App Routing.
 */
import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

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
            {
                path: 'responsive', 
                // canActivateChild: [MetaGuard],
                loadChildren: 'app/components/responsive/responsive.module#ResponsiveModule'
            },
            {
                path: 'calendar', 
                // canActivateChild: [MetaGuard],
                loadChildren: 'app/components/calendar/calendar.module#CalendarCustomModule'
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