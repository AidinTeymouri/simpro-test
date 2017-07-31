import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Job } from '../shared/models/job.model';

@Injectable()
export class JobService {

	jobsChanged = new Subject<Job[]>();

	private jobs: Job[] = [
  new Job (
    '5310', 
    '31/07/2017',
    'Alarkon, Bab',
    'Basket Case',
    '10:00am'
    )
  ];

  constructor() { }

  addJob(job: Job) {
    this.jobs.push(job);
    this.jobsChanged.next(this.jobs.slice());
  }

  setJobs(jobs: Job[]) {
    this.jobs = jobs;
    this.jobsChanged.next(this.jobs.slice());
  }

  getJobs() {
    return this.jobs.slice();
  }

  refreshJobs() {
    return this.jobs.slice();
  }

}
