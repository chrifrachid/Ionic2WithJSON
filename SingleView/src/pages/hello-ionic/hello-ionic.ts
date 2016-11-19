import { Component } from '@angular/core';
import{LoadingController,AlertController} from 'ionic-angular'
import{Human} from '../../providers/human';


@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  people:any;
  loading:any;
  constructor( public human:Human,public loadingCtrl:LoadingController,public alertCtrl:AlertController) {
      this.load();
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 6000      
    });
    this.loading.present();
  }

   doRefresh(refresher) {
     
   this.human.loadStangers().subscribe(data=>{
     this.people=data.results;  
     refresher.complete();     
   },
   err=>{
     console.log(err);
   } )
    
      
   
  }

  load(){
    this.presentLoading();
   this.human.loadStangers().subscribe(data=>{
     this.people=data.results;
     console.log(this.people);
     this.loading.dismiss();
     
   },
   err=>{
     console.log(err);
   } )

  } // end load function.
}
