import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];
  hoveredCandidate: object;

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg', title: "President and CEO of Sally Ride Science"},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg', title: "The first African American woman in space"},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg', title: "11th director of the Johnson Space Center"},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg', title: "NASA's Deputy Administrator"},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg', title: "American aerospace engineer"},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg', title: "Commander of NASA's SpaceX Crew-4 mission"},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg', title: "Aerospace engineer and NASA astronaut"}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
addCrewMember(candidate: object) {
  let index = this.crew.indexOf(candidate);
  if(!this.crew.includes(candidate) && this.crew.length < 3) {
    // this.inCrew = true;
    this.crew.push(candidate);
  } else if (this.crew.includes(candidate)) {
    // this.inCrew = false;
    this.crew.splice(index, 1);
  }
}

memberHover(candidate: object) {
  this.hoveredCandidate = candidate;
}

}
