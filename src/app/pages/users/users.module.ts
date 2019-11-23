import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent],
  imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {}
