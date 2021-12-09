import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarksListService {

  constructor(private http: HttpClient) { }

  /** Function to fetch API through JSON file from the assets folder */
  getMarksList(): Observable<any> {
    return this.http.get('../../assets/details.json');
  }
}
