import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserEffects } from "./store/effects";

@NgModule({
  imports: [
    EffectsModule.forFeature([UserEffects]),
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UserListComponent, UserDetailsComponent]
})
export class UsersModule {}
