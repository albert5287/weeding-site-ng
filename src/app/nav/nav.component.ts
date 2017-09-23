import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    public navIsFixed: boolean = false;
    constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {}

@HostListener("window:scroll", [])
onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(number);
    if (number > 60) {
        this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
        this.navIsFixed = false;
    }
}

}
