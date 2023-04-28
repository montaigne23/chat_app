import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  signupUrl = 'http://localhost:3000/api/signup';
  loginUrl = 'http://localhost:3000/api/login';
  messageUrl = 'http://localhost:3000/api/message';
  getMessageUrl = 'http://localhost:3000/api/messages/';
  
  constructor(private httpClient: HttpClient) { }
   // User signup
   signUp(user: { Name: any; userName: any; email: any; password: any; }) {
    return this.httpClient.post<any>(this.signupUrl, user);
   }
    // login
  login(user: { email: any; password: any; }) {
    return this.httpClient.post<any>(this.loginUrl, user);
  }
    // save messagep
  saveMessage(user: { Name: string | null; userName: string | null; email: string | null; message: string | undefined; room: string | undefined; date: string; time: string; }) {
    return this.httpClient.post<any>(this.messageUrl, user);
   }
     // get Email Marketing Messages
     allMessages(newUser: { room: any; }) {
      return this.httpClient.get<any>(this.getMessageUrl + newUser.room);
    }
}
