import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements AfterViewInit {

  credentials = { login: ''};

  // Le décorateur informe angular qu'il doit requêter la vue por trouver l'élément Input, une propriété
  // de type ElementRef est alors initialisée avec cet élément.
  @ViewChild('loginInput') private loginInputRef: ElementRef<HTMLInputElement>

  //Confère directive
  ngAfterViewInit() {
    this.loginInputRef.nativeElement.focus();
  }
}
