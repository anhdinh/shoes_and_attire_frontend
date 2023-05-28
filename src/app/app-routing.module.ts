import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContainerComponent} from "./index/main-container.component";
import {HomeComponent} from "./index/pages/home-page/home.component";
import {ProductDetailComponent} from "./index/pages/product-detail/product-detail.component";
import {LoginComponent} from "./guard/login/login.component";
import {RattingComponent} from "./index/pages/components/ratting/ratting.component";


const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "",
    component: MainContainerComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "product/:id",
        component: ProductDetailComponent
      }
    ],

  },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "ratingTest",
    component:RattingComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
