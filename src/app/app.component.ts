import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drag-and-drop';
  files: File[] = [];
  formData = new FormData();

  

  constructor(private http: HttpClient) { }



  onSelect(event) {

      console.log(event);

      this.files.push(...event.addedFiles);



      

  

      for (var i = 0; i < this.files.length; i++) { 

        this.formData.append("file[]", this.files[i]);

      }

  }

 sendToBackend(data){

      this.http.post('endpointUrl', data)

      .subscribe(res => {

         console.log(res);

         alert('Uploaded Successfully.');

      })

  }



  onRemove(event) {

      console.log(event);

      this.files.splice(this.files.indexOf(event), 1);

  }

}
