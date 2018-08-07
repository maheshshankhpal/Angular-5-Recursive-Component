import { Injectable } from '@angular/core';
import { ApiHandler } from '../../providers/api-handler.service';
import { Observable } from 'rxjs';
import { RequestMethod } from '@angular/http';
@Injectable()

export class HomeService {
    public message: string;

    constructor(private _apiHandler: ApiHandler) {
    }

    getReportMasterdata(ScreenName): Observable<string> {
        return this._apiHandler.callService('/api/Report/getreportmasters/' + ScreenName, RequestMethod.Get)
            .map(res => <string>res.text())
            .do((result: string) => {
            });
    }

}
