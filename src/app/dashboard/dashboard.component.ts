import { Component, OnInit } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('sobatbisnis')
    this.meta.addTag({
      name: 'sobatbisnis',
      content: 'sobatbisnis',
    })
    this.meta.updateTag({
      name: 'description',
      content:
        'A smart healthcare application that allows each healthcare’s value chain to be integrated with each other safely' +
        'and reliably',
    })
  }
}
