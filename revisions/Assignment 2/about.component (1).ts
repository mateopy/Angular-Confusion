import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/Leader';
import { LEADERS } from '../shared/Leaders';
import {LeaderService} from '../services/leader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 
  constructor(private leaderService : LeaderService) { }
  leaders : Leader[] 

  ngOnInit() {
    this.leaders=this.leaderService.getLeaders();
  }

}
