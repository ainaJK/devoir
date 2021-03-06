import { Injectable } from '@angular/core';
import { LEADERS } from 'src/app/shared/leaders';
import { Leader } from 'src/app/shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  getLeaders(): Leader[] {
    return LEADERS;
  }
  getLeader(id: string) : Leader{
    return LEADERS.filter((leader)=> (leader.id === id))[0];
  }
  getFeaturedLeader() : Leader{
    return LEADERS.filter((leader) => leader.featured)[0];
  }

  constructor() { }
}
