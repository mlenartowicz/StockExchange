import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Future } from 'src/app/core/interceptors/fake-backend';

@Component({
  selector: 'app-futures-list',
  templateUrl: './futures-list.component.html'
})

export class FuturesListComponent implements OnInit, OnDestroy {
  futures: Future[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Future[]>('/futures')
      .pipe().subscribe(result => {
      this.futures = result;
    });
  }

  ngOnDestroy(): void {
  }
}
