import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  faCog = faCog;

  constructor(private router: Router,private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("Error 404");
  }

  goToHome(){
    this.router.navigate(['/']);
  }
}
