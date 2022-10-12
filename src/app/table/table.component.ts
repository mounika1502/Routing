import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
  <table>
    <tr>
        <th *ngFor = "let column of headers">
            {{column}}     
        </th>
    </tr>
    <tr *ngFor ="let row of rows">
        
          <td>{{row.ID}}</td>
          <td>{{row.NAME}}</td>
          <td>{{row.AGE}}</td>
          <td>{{row.GENDER}}</td>
          
            
            
            

         
    </tr>

</table>
`
  

})
export class TableComponent implements OnInit {
 
  public selectedID!: number;
  

  headers = ["ID","NAME","AGE","GENDER"];
  rows = [
    {
      "ID" : "1",
      "NAME" : "Mounika",
      "AGE" : "23",
      "GENDER" : "F"
    },
    {
      "ID" : "2",
      "NAME" : "Sai",
      "AGE" : "24",
      "GENDER" : "M"

    },
    {
      "ID" : "3",
      "NAME" : "Ramya",
      "AGE" : "23",
      "GENDER" : "F"
    },
    {
      "ID" : "4",
      "NAME" : "Manoj",
      "AGE" : "25",
      "GENDER" : "M"
    }

    
  ]

  constructor() {}


  ngOnInit(): void {
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

