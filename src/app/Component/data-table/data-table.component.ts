import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  tableData = []
  tableHeaders=  []
  sortAsc = true;
  constructor() { }

  ngOnInit() {
    fetch('https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json')
    .then(resp => resp.json())
    .then(data => {
      this.tableData = data['cookies']
      this.tableHeaders = Object.keys(data['cookies'][0]).map(item => {
        return item[0].toLocaleUpperCase()+item.substring(1)
      })
    });
      
  }
  sort(event){
    
    let columnName = event.target.previousSibling.data;
    console.log(columnName.toLocaleLowerCase())
    const newTableData = [...this.tableData];
    
    if (this.sortAsc){
      event.target.innerHTML = '&#9650;';
      newTableData.sort((a,b) =>{
        var x = a[columnName.toLocaleLowerCase()].toLocaleLowerCase();
      var y = b[columnName.toLocaleLowerCase()].toLocaleLowerCase();  
        return x < y ? -1 : x > y ? 1 : 0;
      })
      this.sortAsc= false;
    }else{
      event.target.innerHTML = '&#9660;';
      newTableData.sort((a,b) =>{
        var x = a[columnName.toLocaleLowerCase()].toLocaleLowerCase();
      var y = b[columnName.toLocaleLowerCase()].toLocaleLowerCase();  
        return x > y ? -1 : x > y ? 1 : 0;
      })
      this.sortAsc = true;
    }
    
    console.log(newTableData)
    this.tableData = newTableData
  }

}
