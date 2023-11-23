import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn: any = false;
  signInForm: any = {
    email: null,
    password: null,
  };
  submitted = false;
  constructor(
    private router: Router,
    private translateservice: TranslateService,
    private authService: AuthServiceService
  ) {
    this.translateservice.setDefaultLang('ar');
  }
  clearObjectContent(obj: any): void {
    Object.keys(obj).forEach((key) => (obj[key] = undefined));
  }
  onReset(): void {
    this.submitted = false;
    this.clearObjectContent(this.signInForm);
  }
  signIn(): void {
    this.submitted = true;
    console.log('user', this.signInForm);
    if (this.signInForm) {
      this.authService.signIn(this.signInForm).subscribe({
        next: (data) => {
          console.log('data', data);
          this.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', this.isLoggedIn);
          localStorage.setItem('token', data.body.token);
          this.router.navigateByUrl('/classes');
          window.location.reload();
        },
        error: (err) => {
          if (err.status == 404) {
            Swal.fire({
              title: 'خطأ',
              text: 'لم يتم العثور على مستخدم!!!',
              icon: 'error',
              confirmButtonText: 'حسنًا',
              confirmButtonColor: '#FF0000',
            });
          } else {
            if (err.status == 401) {
              Swal.fire({
                title: 'خطأ',
                text: 'البريد الإلكتروني أو كلمة المرور غير صحيحة!!!',
                icon: 'error',
                confirmButtonText: 'حسنًا',
                confirmButtonColor: '#FF0000',
              });
            }
          }
        },
      });
    }
  }
  //   private helper = new JwtHelperService();
  //   signInForm: FormGroup;
  //   userLogin: UserLoginReq;
  //   constructor(private router: Router, private authSer: AuthServiceService) {
  //     this.signInForm = new FormGroup({
  //       email: new FormControl('', Validators.required),
  //       password: new FormControl('', Validators.required),
  //     });
  //     this.userLogin = {
  //       email: '',
  //       password: '',
  //     };
  //   }
  //   aff() {
  //     console.log(this.signInForm.get('email')!.value);
  //     console.log(this.signInForm.get('password')!.value);
  //   }
  //   decodeJWT() {
  // let token :any =localStorage.getItem('token')
  // if(token){
  //     const decodedToken = this.helper.decodeToken(token);
  //     console.log("lll",decodedToken)
  //     return decodedToken}
  //   }

  //   détailsUserLogged(){
  //   const decodedToken=  this.decodeJWT()
  //   const emailLogged = decodedToken.email
  //   console.log("hhh",emailLogged)
  //   console.log("hhh")
  // localStorage.setItem("userLogged",emailLogged)

  //   }
  // signIn() {
  //   if (this.signInForm.valid) {
  //     this.userLogin.email = this.signInForm.get('email')!.value;
  //     this.userLogin.password = this.signInForm.get('password')!.value;
  //     this.authSer.signIn(this.userLogin).subscribe((data) => {
  //       console.log("iii",data)
  //       localStorage.removeItem('token');
  //       localStorage.setItem('token', data.body.token);
  //       localStorage.setItem('role', data.body.data.role);
  //       localStorage.setItem('status', data.body.data.status);
  //       var token = localStorage.getItem('token')
  //       var role = localStorage.getItem('role');
  //       var status = localStorage.getItem('status');
  //       var isLogged = localStorage.getItem('isLogged');

  // if(isLogged){
  // this.router.navigateByUrl('/dashboard')}
  // else {
  // if( token !='' && token != null){
  //        localStorage.setItem('isLogged',"true");
  //        if (role == 'seller' && status == 'NOT_approuved') {
  //           this.router.navigateByUrl('/profil').then(() => {
  //             window.location.reload();
  //           });
  //         } else {
  //           this.router.navigateByUrl('/dashboard').then(() => {
  //             window.location.reload();
  //           });
  //         }} else {
  //           this.router.navigateByUrl('/')

  //         }
  //       });
  //     }}

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn'))
      this.router.navigateByUrl('/classes');
  }
}
