import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }

 services = [
   {"id":1,"srvName":"Web Designing","srvCont":"Lorem Ipsum is a Dummy Content..."},
   {"id":2,"srvName":"Web Development","srvCont":"Lorem Ipsum is a Dummy Content..."},
   {"id":3,"srvName":"Angular JS Development","srvCont":"Lorem Ipsum is a Dummy Content..."},
   {"id":4,"srvName":"React JS Development","srvCont":"Lorem Ipsum is a Dummy Content..."},
   {"id":5,"srvName":"Front End Development","srvCont":"Lorem Ipsum is a Dummy Content..."},
   {"id":6,"srvName":"UI/UX","srvCont":"Lorem Ipsum is a Dummy Content..."},
   {"id":7,"srvName":"Graphic Designing","srvCont":"Lorem Ipsum is a Dummy Content..."},
   {"id":8,"srvName":"App Development","srvCont":"Lorem Ipsum is a Dummy Content..."},
 ]

  

  onSelect(service){
    this.router.navigate(['/services', service.id]);
  }

  ngOnInit() {
  }

}
