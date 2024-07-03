import { Routes } from '@angular/router';
import { OptionOneComponent } from './option-one/option-one.component';
import { OptionTwoComponent } from './option-two/option-two.component';
import { OptionThreeComponent } from './option-three/option-three.component';

export const routes: Routes = [
    { path: 'one', component: OptionOneComponent },
    { path: 'two', component: OptionTwoComponent },
    { path: 'three', component: OptionThreeComponent },
];
