<<<<<<< HEAD
import { Component, OnInit } from '@angular/core'
=======
import { Component } from '@angular/core';
>>>>>>> parent of af2cc09 (config lint)

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.')
    }
=======
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
>>>>>>> parent of af2cc09 (config lint)
}
