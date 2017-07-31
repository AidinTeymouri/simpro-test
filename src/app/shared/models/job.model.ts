import { User } from '../models/user.model';
import { Customer } from '../models/customer.model';
import { Site } from '../models/site.model';

export class Job {
	public job_Id: string;
	public job_Date: string;
	public job_Customer_Names: string;
	public job_Site_Names: string;
	public job_Time: string;

	

	constructor(
		job_Id: string,
		job_Date: string,
		job_Customer_Names: string,
		job_Site_Names: string,
		job_Time: string
		
		) 
	{
		this.job_Id = job_Id;
		this.job_Date = job_Date;
		this.job_Customer_Names = job_Customer_Names;
		this.job_Site_Names = job_Site_Names;
		this.job_Time = job_Time;
		
	}
}
