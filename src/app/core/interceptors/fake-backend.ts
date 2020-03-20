import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';


export class Company {
  name: string;
  symbol: string;
  description: string;
}

export class Index {
  name: string;
  symbol: string;
}

export class Future {
  name: string;
  symbol: string;
}

const companies: Company[] = [
    { name: 'PKN Orlen', symbol: 'PKN', description: 'Polski Koncern Naftowy Orlen. Opis.'},
    { name: 'KGHM', symbol: 'KGH', description: 'Kombinat Gorniczo Hutniczy. Opis.'},
    { name: 'PKO BP', symbol: 'PKO', description: 'Polska Kasa Oszczednosciowa. Opis.'},
];

const indexes: Index[] = [
  { name: 'WIG20', symbol: 'W20'},
  { name: 'mWIG40', symbol: 'mW40'},
  { name: 'sWIG80', symbol: 'sW80'},
];

const futures: Future[] = [
  { name: 'FW20M2020', symbol: 'FW20M2020'},
  { name: 'FW40M2020', symbol: 'FW40M2020'},
  { name: 'FKGHM20', symbol: 'FKGHM20'},
];

@Injectable({
  providedIn: 'root'
})
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            // tslint:disable-next-line: max-line-length
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/companies') && method === 'GET':
                    return getCompanies();
                case url.endsWith('/indexes') && method === 'GET':
                    return getIndexes();
                case url.endsWith('/futures') && method === 'GET':
                    return getFutures();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }

        }

        // route functions

        function getCompanies() {
          return ok(companies);
        }

        function getIndexes() {
            return ok(indexes);
        }

        function getFutures() {
          return ok(futures);
        }

        // helper functions

        function ok(body) {
            return of(new HttpResponse({ status: 200, body }));
        }
    }
}
