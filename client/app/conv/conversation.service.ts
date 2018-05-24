import { Injectable }    from '@angular/core';
import { Headers, Http,Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import translate = require('google-translate-api');


@Injectable()
export class ConversationService {
  private convUrl ='/api/conversation/';
  private convIoTUrl ='/api/ac/conversation/';

  constructor(private http: Http) {
  };

  submitMessage(msg:string,ctx:any): Observable<any>{
    let bodyString = JSON.stringify(  { text:msg,context:ctx });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.convUrl,bodyString,options)
           .map((res:Response) => res.json())
  } // end submitMessage
  
  
  // STILL WORK IN PROGESS!!
  translateMessage(msg:string) {
	translate(msg, {from: 'fi', to: 'en'}).then(res => {
		console.log(res.text);
		return res.text;
	}).catch(err => {
		console.error(err);
		return "Hello, I can't be translated";
	});
  } // end translateMessage
}
