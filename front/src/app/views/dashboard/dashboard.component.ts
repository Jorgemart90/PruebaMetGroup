import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service'
import {Router} from '@angular/router';
import { Stores } from '../../models/stores.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stores!: Stores[];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getStores().subscribe(data => {
      console.log(data);
      this.stores = data
    })
  }


}
