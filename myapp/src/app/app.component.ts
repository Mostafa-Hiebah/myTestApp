import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputData: string = '';
  dropdownData: any[] = [];

  constructor(private http: HttpClient) { }
 
  submitData() {
    const items = 
    { id: Math.floor(Math.random() * 1000), name: this.inputData }
    this.inputData=''
    this.dropdownData.push(items);

    //const requestBody = { data: this.inputData };
    // this.http.post<any[]>('https://your-api-endpoint.com/save', requestBody)
    //   .subscribe((response) => {
    //     this.dropdownData = response;
    //   }, error => {
    //     console.error('Error:', error);
    //   });
  }
}
