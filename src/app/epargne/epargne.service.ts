import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Account }      from '../class/account';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class EpargneService {

  private headers = new Headers(
      {'Content-Type': 'application/json'}
      );
  private accountsUrl = 'http://localhost:3000/accounts';

  constructor(private http: Http) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get(this.accountsUrl)
        .map(response => response.json() as Account[])
        .catch(this.handleError);
  }

  create(account: Account): Observable<Account> {
    return this.http.post(this.accountsUrl,account)
        .map(response => response.json() as Account)
        .catch(this.handleError);
  }

  deleteAccount(id: string) {
    return this.http.delete(this.accountsUrl + '/' + id)
        .map(response => this.http.get(this.accountsUrl)
            .map(response => response.json() as boolean)
            .catch(this.handleError))
        .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
