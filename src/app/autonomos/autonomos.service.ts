import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AUTONOMOS_API} from '../app.api';
import {Autonomo} from './autonomo/autonomo.model';

@Injectable()
export class AutonomosService {

    constructor(private http: HttpClient) {}

    autonomos(search?: string): Observable<Autonomo[]> {
        let params: HttpParams;
        if (search) {
            params = new HttpParams().append('q', search);
        }
        return this.http.get<Autonomo[]>(`${AUTONOMOS_API}/autonomos/`, {params: params});
    }

    autonomosById(id: string): Observable<Autonomo> {
        return this.http.get<Autonomo>(`${AUTONOMOS_API}/autonomos/${id}/`);
    }
}
