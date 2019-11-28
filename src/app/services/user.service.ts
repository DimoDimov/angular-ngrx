import { Injectable } from "@angular/core";
import { USERS } from "./user-data.mock";
import { User } from "./user.model";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  getUserList(): Observable<User[]> {
    return of(USERS);
  }
}
