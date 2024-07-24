import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmen as env } from '../../envs/environment';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserCoreService {

  constructor(private http:HttpClient) { }

  public creatUser(user:any){
    const url= env.baseURL + '/user/add';
    return this.http.post<any>(url,user);
  }


}
