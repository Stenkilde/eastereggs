import { Component } from '@angular/core';
import { MovieInterface } from './movie-interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public activeState: Boolean = false;

    public movies: Array<MovieInterface> = [
        {
            id: 1,
            title: "Iron Man",
            year: 2008,
            phase: "1",
            eastereggs: [
              {
                name: "Rhodey sees 'War Machine'",
                timestamp: "00:21:31"
              },
              {
                name: "Some eastereggs",
                timestamp: "00:21:31"
              }
            ]
        },
        {
            id: 2,
            title: "The Incredible Hulk",
            year: 2008,
            phase: "1",
            eastereggs: [

            ]
        },
        {
            id: 3,
            title: "Iron Man 2",
            year: 2010,
            phase: "1",
            eastereggs: [

            ]
        },
        {
            id: 4,
            title: "Thor",
            year: 2011,
            phase: "1",
            eastereggs: [

            ]
        },
        {
            id: 5,
            title: "Captain America: The first Avenger",
            year: 2011,
            phase: "1",
            eastereggs: [

            ]
        },
        {
            id: 6,
            title: "Avengers",
            year: 2012,
            phase: "1",
            eastereggs: [

            ]
        }
    ]
}
