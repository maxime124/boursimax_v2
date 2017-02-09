import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Account }      from '../class/account';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EpargneService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private accountsUrl = 'http://localhost:3000/accounts';

  constructor(private http: Http) { }

  getAccounts(): Promise<Account[]> {
    return this.http.get(this.accountsUrl)
        .toPromise()
        .then(response => response.json() as Account[])
        .catch(this.handleError);
  }

  create(account: Account): Promise<Account> {
    console.log(account);
    return this.http.post(this.accountsUrl,account)
        .toPromise()
        .then(response => response.json() as Account)
        .catch(this.handleError);
  }

  deleteAccount(id: string) {
    return this.http.delete(this.accountsUrl + '/' + id)
        .toPromise()
        .then(response => this.http.get(this.accountsUrl)
            .toPromise()
            .then(response => response.json() as boolean)
            .catch(this.handleError))
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
