import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginReq } from '../Models/UserLoginReq';
import { Admin } from '../Models/Admin';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private host = environment.baseUrl;
  public loggedUser!: string;
  public isloggedIn: Boolean = false;

  constructor(private httpCl: HttpClient) {}

  forgotMypassword(forgotPassword: any) {
    return this.httpCl.post(
      this.host + '/admin/forgot-password',
      forgotPassword
    );
  }
  signIn(userLogin: UserLoginReq): Observable<any> {
    return this.httpCl.post(this.host + '/admin/login', userLogin, {
      observe: 'response',
    });
  }

  signUp(adminSignup: Admin): Observable<any> {
    return this.httpCl.post(`${this.host}/admin/register`, adminSignup, {
      responseType: 'text',
    });
  }

  resetMypassword(resetpassword: any) {
    return this.httpCl.post(`${this.host}/admin/reset-password`, resetpassword);
  }
}
