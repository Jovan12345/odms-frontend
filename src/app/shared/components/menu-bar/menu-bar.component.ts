import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  open = false;

  @ViewChild('navContainer', {static: true}) navContainer: ElementRef;

  onOpen(): void {
    this.open = !this.open;
    this.navContainer.nativeElement.classList.toggle('menuActive');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < document.querySelectorAll('.icon-bar').length; i++) {
      document.querySelectorAll('.icon-bar')[i].classList.toggle('burger-icon');
    }
  }

  ngOnInit(): void {
    // tslint:disable-next-line: prefer-for-of
    for(let i = 0; i < document.querySelectorAll('.navigation ul li').length; i++) {
      document.querySelectorAll('.navigation ul li')[i].addEventListener('click', () => {
        this.onOpen();
      });
    }
  }

}
