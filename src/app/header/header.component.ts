import { Component, OnChanges, OnInit } from '@angular/core';
import { UiStyleToggleService } from '../services/ui-style-toggle.service';
import { TranslocoService } from '@ngneat/transloco';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

@Component({
  selector: 'renan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {

  faGlobeAmericas = faGlobeAmericas;

  constructor(private uiStyleToggleService: UiStyleToggleService,private transloco: TranslocoService) { }

  private darkMode(){

    var $hamburger = $('.hamburger-inner');
    var $menu = $('#navbar');

    if(this.uiStyleToggleService.darkTheme()){
      //Dark Mode no simbolo do hamburguer
      $hamburger.addClass("dark-mode-hamburguer");
      //Cores no menu
      $menu.addClass("dark-mode-menu");
    }else{
      $hamburger.removeClass("dark-mode-hamburguer");
      $menu.removeClass("dark-mode-menu");
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.uiStyleToggleService.toggle();
    this.darkMode();
  }

  openHamburger(){
    var $hamburger = $(".hamburger");
    $hamburger.toggleClass("is-active");
  }
  
  public setActiveLang(lang: string){
    this.transloco.setActiveLang(lang);
  }

}
