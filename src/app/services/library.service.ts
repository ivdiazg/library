import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LibraryService {

  constructor(private http: HttpClient) { }

  obtieneEstados() {
    this.http.get('http://localhost:50612/api/Estados').toPromise()
      .then(data => {
        return data;
      });
  }

}
