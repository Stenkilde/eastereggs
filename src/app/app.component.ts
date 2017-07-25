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
                name: "Captain Americas Shield, while Tony takes off his suit",
                timestamp: "00:21:31"
              },
              {
                name: "Stan Lee as Hugh Hefner",
                timestamp: "00:21:31"
              },
              {
                name: "The 10 rings are mentioned several times, and showed in the credits",
                timestamp: "00:21:31"
              },
              {
                name: "War Machine is shown in the credits",
                timestamp: "00:21:31"
              },
              {
                name: "Fighter jets chasing Tony are called 'Whiplash'",
                timestamp: "00:21:31"
              },
              {
                name: "Tonys ring tone throughout the movie is the original Iron Man Cartoon theme",
                timestamp: "00:21:31"
              },
              {
                  name: "Post credits scene",
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
                {
                  name: "Stan Lee, drinks a soda with Banners blood.",
                  timestamp: "00:21:31"
                },
                {
                  name: "There are several Stark Industries logos",
                  timestamp: "00:21:31"
                },
                {
                  name: "The Original Hulk actor from the TV series, Lou Ferrigno is a security guard in the movie",
                  timestamp: "00:21:31"
                }
            ]
        },
        {
            id: 3,
            title: "Iron Man 2",
            year: 2010,
            phase: "1",
            eastereggs: [
                {
                  name: "Captains Americas Shield",
                  timestamp: "00:21:31"
                },
                {
                  name: "'Blueprints' for a contraption using the Tessarect",
                  timestamp: "00:21:31"
                },
                {
                  name: "A world map, which was confirmed by Jon Favreau to contain something to the Cinematic Universe, can you guess what it is?",
                  timestamp: "00:21:31"
                }
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
