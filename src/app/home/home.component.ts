import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hideMobile: boolean = true;
  hideDesktop: boolean = false;



  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.TabletPortrait, Breakpoints.HandsetLandscape])
    .subscribe(result => {

      const breakPoints = result.breakpoints;

      if (breakPoints[Breakpoints.TabletPortrait]) {
        console.log('Screen matches TabletPortrait');
        this.hideDesktop = false;
        this.hideMobile = true;

      } else if (breakPoints[Breakpoints.HandsetLandscape]) {
        this.hideMobile = false;
        this.hideDesktop = true;

      }
      console.log("mobile", this.hideMobile);
      console.log("desktop", this.hideDesktop);
    })


  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }
}
