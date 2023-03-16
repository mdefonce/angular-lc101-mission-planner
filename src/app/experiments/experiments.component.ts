import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
   acceptedExperiments: string[] = [];
   maxExperiments: number = 4;

   constructor() { }

   ngOnInit() { }

   addExperiment(experiment: string): boolean {
    if(!this.acceptedExperiments.includes(experiment) && this.acceptedExperiments.length < this.maxExperiments) {
      this.acceptedExperiments.push(experiment);
    }
    if(this.acceptedExperiments.length === this.maxExperiments) {
      return false;
    } else {return true;}
   }

   removeExperiment(experiment: string) {
    let index = this.acceptedExperiments.indexOf(experiment);
    if(this.acceptedExperiments.includes(experiment)) {
      this.acceptedExperiments.splice(index, 1);
    }
   }

}
