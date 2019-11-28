import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as fromUserActions from "./actions";
import { User } from "src/app/services/user.model";
import { EMPTY } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { map, catchError, mergeMap } from "rxjs/operators";

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUserActions.loadUsers),
      mergeMap(() => {
        return this.userService.getUserList().pipe(
          map((users: User[]) => fromUserActions.loadUsersSuccess({ users })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
