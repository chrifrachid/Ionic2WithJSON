# Ionic2WithJSON
Ionic2 with JSON Data Display in this project.

Create Ionic2 Project
/**************************************************/
ionic start Ionic2WithJSON blank --v2
cd Ionic2WithJSON
ionic platform add android
ionic g provider userService
ionic serve --lab
/*************************************************/

Now provider->human.ts
 loadStangers(){
   var resp=this.http.get("https://randomuser.me/api/?results=10").
   map(res=>res.json());
   return resp;    
  }

------------------------------------------------------------------------------------------------------
EDIT
-------------------------------------------------------------------------------------------------------
hello-ionic.ts (This is my home.ts)
-----------------------
import{Human} from '../../providers/human';
Create variable
--------------------
 people:any;
 loading:any;
Initialize the constructor
constructor( public human:Human,public loadingCtrl:LoadingController,public alertCtrl:AlertController) {
      this.load();
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
  -----------------------------------------------------------------------------------------------------
  ADD our Human provider to app.module.ts file
  import{Human} from '../providers/human';
   providers: [Human]
  ----------------------------------------------------------------------------------------------------
  Go to hello-ionic.html (home.html) file and edit it
  <ion-list>
  <ion-item *ngFor="let person of people">
    <ion-avatar item-left>
      <img [src]="person.picture.thumbnail">
    </ion-avatar>
    <h2>{{person.name.first}}{{person.name.last}}</h2>
    <p>{{person.email}}</p>
  </ion-item>
</ion-list>
  ----------------------------------------------------------------------------------------------------------
  
  
  
  
