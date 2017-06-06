/**
 * Created by namita on 7/10/16.
 */
import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {ResponsiveComponent}    from './responsive.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ResponsiveComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ResponsiveRoutingModule {
}