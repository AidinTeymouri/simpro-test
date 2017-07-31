import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicesService {
	// url = "https://itssuite.simprocloud.com/api/oauth/request_token.php";

  constructor(private http: Http) { }



  getTokenAcess() {
  	
  	  // return this.http.get('https://itssuite.simprocloud.com/api/oauth/request_token.php?oauth_consumer_key=aidinteymouri&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1501405829&oauth_nonce=7p9DzL&oauth_version=1.0&oauth_signature=CDyfGFLKgnBuW3MM5fwCe2cwJhA=')

     //  .map(
     //    (response: Response) => {
     //      return response.json();
     //    }
     //  );
  }

}
