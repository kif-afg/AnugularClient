import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../app/Owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  Url = 'https://localhost:44310/api';

 constructor(private http: HttpClient) {
   }
    /*method for creating company */
   CreateOwner(Outlet: Owner): Observable<Owner[]> {
 const httpOptions = { headers: new HttpHeaders({
   'Content-Type': 'application/json',
   // tslint:disable-next-line:max-line-length
   'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOREEwUWpGRVJFSTFRemRFTXpsQlJVSkZORFUyTkRGRlJqQTVSVFJFUTBNeU5VWkVOdyJ9.eyJpc3MiOiJodHRwczovL2Rldi1sbXV6djZwdS5hdXRoMC5jb20vIiwic3ViIjoidTRYMGQzWDRWVHo5M2hzNGVDVDBuWE9qZ0tqMm1lTVpAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcmVmbG93bWFyaXRpbWUuY29tIiwiaWF0IjoxNTg0OTE5MzkzLCJleHAiOjE1ODUwMDU3OTMsImF6cCI6InU0WDBkM1g0VlR6OTNoczRlQ1QwblhPamdLajJtZU1aIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOltdfQ.GWsGMMk7MbP3a2ux-d1qzW3Zxmkeow2lTwnZoyifqlvrHzNF0ELgoLeks_d-FkpVKn-d3VhkFpyN77jM27yoSna7ECuhqCnDRymvC5iOAgZqzea5xEaTZ4w80xEJopM1WLCx80uN5QlBthAjXX2HntsujmbO0h1jlyzRKoKAqi6DdpUeIW0t9tJIb1wbSnNP22oUFgirjLgKjARvkZyyHRVeW_OlPhqhevun76uJ1eWPKvPfFBjbS0okYspgssh2FqpHvZyOGeLAW3x0ANq-x2Mt58tVEMyDvAO8tRDbGauDHyU7xzM4yTlOTE1DGZeXqBlh93Y1NPHbjmlRsvSjGA'
    })};
  return this.http.post<Owner[]>
  (this.Url + '/owners', Outlet, httpOptions);
   }


    /*method for getting list of companies */
    getOwners(): Observable<Owner[]> {
      const httpOptions = { headers: new HttpHeaders({
   'Content-Type': 'application/json',
   // tslint:disable-next-line:max-line-length
   'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOREEwUWpGRVJFSTFRemRFTXpsQlJVSkZORFUyTkRGRlJqQTVSVFJFUTBNeU5VWkVOdyJ9.eyJpc3MiOiJodHRwczovL2Rldi1sbXV6djZwdS5hdXRoMC5jb20vIiwic3ViIjoidTRYMGQzWDRWVHo5M2hzNGVDVDBuWE9qZ0tqMm1lTVpAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcmVmbG93bWFyaXRpbWUuY29tIiwiaWF0IjoxNTg0OTE5MzkzLCJleHAiOjE1ODUwMDU3OTMsImF6cCI6InU0WDBkM1g0VlR6OTNoczRlQ1QwblhPamdLajJtZU1aIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwicGVybWlzc2lvbnMiOltdfQ.GWsGMMk7MbP3a2ux-d1qzW3Zxmkeow2lTwnZoyifqlvrHzNF0ELgoLeks_d-FkpVKn-d3VhkFpyN77jM27yoSna7ECuhqCnDRymvC5iOAgZqzea5xEaTZ4w80xEJopM1WLCx80uN5QlBthAjXX2HntsujmbO0h1jlyzRKoKAqi6DdpUeIW0t9tJIb1wbSnNP22oUFgirjLgKjARvkZyyHRVeW_OlPhqhevun76uJ1eWPKvPfFBjbS0okYspgssh2FqpHvZyOGeLAW3x0ANq-x2Mt58tVEMyDvAO8tRDbGauDHyU7xzM4yTlOTE1DGZeXqBlh93Y1NPHbjmlRsvSjGA'
    })};
     return this.http.get<Owner[]>
     (this.Url + '/owners', httpOptions);
   }
}
