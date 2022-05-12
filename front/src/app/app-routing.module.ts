import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from  './views/dashboard/dashboard.component'
import { NewStoreComponent } from  './views/new-store/new-store.component'
import { EditStoreComponent } from  './views/edit-store/edit-store.component'
import { DeleteStoreComponent } from  './views/delete-store/delete-store.component'
import { ItemsComponent } from  './views/items/items.component'
import { NewItemComponent } from  './views/new-item/new-item.component'
import { EditItemComponent } from  './views/edit-item/edit-item.component'
import { DeleteItemComponent } from  './views/delete-item/delete-item.component'


const routes: Routes = [
  {path: '' , redirectTo: 'dashboard', pathMatch:'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'newstore', component: NewStoreComponent},
  {path: 'editstore', component: EditStoreComponent},
  {path: 'deletestore', component: DeleteStoreComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'newitem', component: NewItemComponent},
  {path: 'edititem', component: EditItemComponent},
  {path: 'deleteitem', component: DeleteItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,NewStoreComponent,EditStoreComponent,DeleteStoreComponent,ItemsComponent,NewItemComponent,EditItemComponent, DeleteItemComponent]
