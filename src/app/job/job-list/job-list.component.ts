import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import { Job } from '../../shared/models/job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit, OnDestroy {

	jobs: Job[];
  subscription: Subscription;
  refreshSubscription: Subscription;

  private timer: Observable<number>;
  private interval: number;

  constructor(private jobService: JobService) {
    this.interval = 300000; // 5 minutes
    this.timer = Observable.timer(0, this.interval);
  }

  ngOnInit() {

    this.subscription = this.jobService.jobsChanged
    .subscribe(
      (jobs: Job[]) => {
        this.jobs = jobs;
      }
      );
    this.jobs = this.jobService.getJobs();

    // Refresh
    this.timer.subscribe(() => {
      this.jobService.getJobs()
    });
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.refreshSubscription.unsubscribe();
  }
}

