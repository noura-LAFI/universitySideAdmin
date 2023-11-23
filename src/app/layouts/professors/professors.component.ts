import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss']
})
export class ProfessorsComponent implements OnInit ,AfterViewInit{
  data: any[] = [];
  dtOptions: any;

  constructor(private router:Router , private translateservice:TranslateService,private renderer:Renderer2){
    this.translateservice.setDefaultLang('ar')

  }
 
  ngOnInit(): void {
    this.data = [
      { id: 1,"classesName": "class 1", "firstName": "xdcfghjkl","lastName": "xdcfghjkl" } ,
      { id:2, "classesName": "class 1", "firstName": "sdfghjkl" ,"lastName": "xdcfghjkl" },
      { id:3, "classesName": "class 1", "firstName": "sdfghjklm" ,"lastName": "xdcfghjkl" },
       { id:4, "classesName": "class 1", "firstName": "sdfghjklm" ,"lastName": "xdcfghjkl" },
       { id:5, "classesName": "class 1", "firstName": "qsdcfbh;l" ,"lastName": "xdcfghjkl"},
       { id:6, "classesName": "class 1", "firstName": "sdfghjkl" ,"lastName": "xdcfghjkl" },
       { id:7, "classesName": "class 1", "firstName": "sdfghjklm" ,"lastName": "xdcfghjkl"},
        { id:8, "classesName": "class 1", "firstName": "sdfghjklm" ,"lastName": "xdcfghjkl"},
        { id:9, "classesName": "class 1", "firstName": "qsdcfbh;l" ,"lastName": "xdcfghjkl"},
        { id:10, "classesName": "class 1", "firstName": "sdfghjkl" ,"lastName": "xdcfghjkl"},
        { id:11, "classesName": "class 1", "firstName": "sdfghjklm" ,"lastName": "xdcfghjkl"},
         { id:12, "classesName": "class 1", "firstName": "sdfghjklm" ,"lastName": "xdcfghjkl"},
         { id:13, "classesName": "class 1", "firstName": "qsdcfbh;l" ,"lastName": "xdcfghjkl"}
      
    ];
    this.dtOptions = {
      language: {
        lengthMenu: 'عرض _MENU_ مدخلات',
        search: 'بحث', 
        paginate: {
          first: 'الأول',
          previous: 'السابق',
          next: 'التالي',
          last: 'الأخير'
        },
        info: 'عرض _START_ إلى _END_ من _TOTAL_ مدخلات',
      },
    };
    
  }


  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute("view-class-id")) {
        this.router.navigate(["/class/" + event.target.getAttribute("view-class-id")]);
      }
    });
  

  
  }
  showProfApprovedTable = true; 

  toggleProfApproved() {
    this.showProfApprovedTable = true; 
  }

  toggleProfInapproved() {
    this.showProfApprovedTable = false; 
  }
}
