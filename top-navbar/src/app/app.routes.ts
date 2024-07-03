import { Routes } from '@angular/router';
import { OptionOneComponent } from './option-one/option-one.component';
import { OptionTwoComponent } from './option-two/option-two.component';
import { OptionThreeComponent } from './option-three/option-three.component';
import { OptionFourComponent } from './option-four/option-four.component';
import { OptionFiveComponent } from './option-five/option-five.component';

export const routes: Routes = [
    { path: 'one', component: OptionOneComponent },
    { path: 'two', component: OptionTwoComponent },
    { path: 'three', component: OptionThreeComponent },
    { path: 'four', component: OptionFourComponent },
    { path: 'five', component: OptionFiveComponent },
];
