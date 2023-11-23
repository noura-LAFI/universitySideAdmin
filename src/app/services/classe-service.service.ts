import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Class } from '../Models/class';
import { Devices } from '../Models/devices';
@Injectable({
  providedIn: 'root',
})
export class ClasseServiceService {
  updateClasse( upClass:any,id:string) {
   return this.httpCl.put(`${this.host}/classes/updateClasses/${id}`,upClass);
  }
  delClasse(id: string) {
    return this.httpCl.delete(`${this.host}/classes/deleteClass/${id}`);
  }
  addClass(creaClasse: any) {
    return this.httpCl.post(`${this.host}/classes/addNewClasse`,creaClasse);
  }
  private host = environment.baseUrl;
  constructor(private httpCl: HttpClient) {}
  getAllClasses() {
    return this.httpCl.get<Class[]>(`${this.host}/classes/getAllClasses`);
  }
  getDetailsClass(id: string) {
    return this.httpCl.get<Class>(`${this.host}/classes/getClassDetails/${id}`);
  }
  getDevices(id: string) {
    return this.httpCl.get<Devices[]>(
      `${this.host}/classes/allDevicesForClass/${id}`
    );
  }
}
