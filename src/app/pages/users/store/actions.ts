import { createAction, props } from "@ngrx/store";
import { User } from "src/app/services/user.model";

export const loadUsers = createAction("[User/API] Load Users");
export const loadUsersSuccess = createAction(
  "[User/API] Load Users Success",
  props<{ users: User[] }>()
);
export const getUser = createAction("[User] Get User", props<{ id: number }>());
