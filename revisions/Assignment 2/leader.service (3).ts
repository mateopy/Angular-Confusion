import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leader';
import { Leader } from '../shared/leader.model';

@Injectable()
export class LeaderService {

  constructor() {
  }
  getLeaders(): Leader[] {
    return LEADERS;
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
