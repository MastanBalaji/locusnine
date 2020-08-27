import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  sales:string;
  date:string;
  client:string;
  primary:string;
  title:string;
  vertical:string;
  meeting:string;
  purpose:string;
  outcome:string;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sales: 'John Doe', date:'July 20th,2018', client:'Oberio Group', primary:'Mahmud Ritelli', title:'C level', vertical:'Marketing', meeting:'Goto meeting', purpose:'Understand their current ecosystem', outcome:'Send first cut of proposed solution', status:'Needs defined'},
  {sales: 'Ethan Hunt', date:'July 20th,2018', client:'Taj Group', primary:'Avie Peasegood', title:'C level', vertical:'Sales', meeting:'Video', purpose:'Demo the product', outcome:'She will get back with availability for next meeting', status:'Needs defined'},
  {sales: 'John Doe', date:'July 20th,2018', client:'Accenture', primary:'Dew Tilbey', title:'C level', vertical:'Senior Management', meeting:'Face to face', purpose:'Negotiations', outcome:'He needs to get final approval by the board will happen by today EOD', status:'Needs defined'},
  {sales: 'Julia Cruise', date:'July 20th,2018', client:'Google', primary:'Jerri Casswell', title:'Sr Manager level', vertical:'Technology', meeting:'call', purpose:'Introductory call', outcome:'Need to send them a reminder', status:'Contact made'},
  {sales: 'Tom Roberts', date:'July 20th,2018', client:'Microsoft', primary:'Dannye Halms', title:'VP Level', vertical:'Senior Management', meeting:'Email', purpose:'Confirm final meeting', outcome:'Meeting confirmed for tomorrow', status:'Negotiations started'},
  {sales: 'John Doe', date:'July 21th,2018', client:'Oberio Group', primary:'Mahmud Ritelli', title:'C level', vertical:'Marketing', meeting:'Face to face', purpose:'propose our solution', outcome:'Send first cut of proposed solution', status:'Needs defined'},
  {sales: 'Ethan Hunt', date:'July 21th,2018', client:'Taj Group', primary:'Avie Peasegood', title:'C level', vertical:'Sales', meeting:'call', purpose:'fix up next meeting', outcome:'Send first cut of proposed solution', status:'Contact mase'},
  {sales: 'John Doe', date:'July 21th,2018', client:'Accenture', primary:'Dew Tilbey', title:'C level', vertical:'Senior Management', meeting:'Face to face', purpose:'Deal signing', outcome:'Deal closed', status:'Won'},
  {sales: 'Julia Cruise', date:'July 21th,2018', client:'Google', primary:'Jerri Casswell', title:'Sr Manager level', vertical:'Technology', meeting:'Text', purpose:'Understand their current ecosystem', outcome:'Send first cut of proposed solution', status:'Needs defined'},
  {sales: 'Tom Roberts', date:'July 21th,2018', client:'Microsoft', primary:'Dannye Halms', title:'Vp Level', vertical:'Senior Management', meeting:'Face to face', purpose:'Finalize negotiation', outcome:'Deal lost', status:'Lost'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [  'sales',
    'date',
    'client',
    'primary',
    'title',
    'vertical',
    'meeting',
    'purpose',
    'outcome',
    'status']
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  data=[];
  tabledata=[];
  ngOnInit() {
    this.data=[
      { img:'assets/ico-calls.png',
        name:'CALLS',
        num:'10/15'
      },
      {
        img:'assets/ico-wins.png',
        name:'WINS',
        num:'1/3'
      },
      {
        img:'assets/ico-revenue.png',
        name:'REVENUE',
        num:'80k/100k'
      }
    ];
    this.tabledata=[
      {
        title:'John Doe',
        t1name:'New MRR',
        t1num:'5230',
        t2name:'New Logos',
        t2num:'102',
        t3name:'Demo Calls',
        t3num:'30',
      },
      {
        title:'Jane Smith',
        t1name:'New MRR',
        t1num:'4586',
        t2name:'New Logos',
        t2num:'95',
        t3name:'Demo Calls',
        t3num:'23',
      },
      {
        title:'Ethan Hunt',
        t1name:'New MRR',
        t1num:'3500',
        t2name:'New Logos',
        t2num:'82',
        t3name:'Demo Calls',
        t3num:'10',
      },
    ]
    this.dataSource.sort = this.sort;
  }
  
  change(data){
    if(data == 1){
      this.data=[
        { img:'assets/ico-calls.png',
          name:'CALLS',
          num:'10/15'
        },
        {
          img:'assets/ico-wins.png',
          name:'WINS',
          num:'1/3'
        },
        {
          img:'assets/ico-revenue.png',
          name:'REVENUE',
          num:'80k/100k'
        }
      ];
      this.tabledata=[
        {
          title:'John Doe',
          t1name:'New MRR',
          t1num:'5230',
          t2name:'New Logos',
          t2num:'102',
          t3name:'Demo Calls',
          t3num:'30',
        },
        {
          title:'Jane Smith',
          t1name:'New MRR',
          t1num:'4586',
          t2name:'New Logos',
          t2num:'95',
          t3name:'Demo Calls',
          t3num:'23',
        },
        {
          title:'Ethan Hunt',
          t1name:'New MRR',
          t1num:'3500',
          t2name:'New Logos',
          t2num:'82',
          t3name:'Demo Calls',
          t3num:'10',
        },
      ]
    }
    else{
      this.data=[
        {
          img:'assets/ico-revenue.png',
          name:'REVENUE',
          num:'80k/100k'
        },
        {
          img:'assets/ico-wins.png',
          name:'WINS',
          num:'1/3'
        },

        { img:'assets/ico-calls.png',
        name:'CALLS',
        num:'10/15'
        },

      ];
      this.tabledata=[
        {
          title:'Ethan Hunt',
          t1name:'New MRR',
          t1num:'3500',
          t2name:'New Logos',
          t2num:'82',
          t3name:'Demo Calls',
          t3num:'10',
        },
        {
          title:'Jane Smith',
          t1name:'New MRR',
          t1num:'4586',
          t2name:'New Logos',
          t2num:'95',
          t3name:'Demo Calls',
          t3num:'23',
        },

        {
          title:'John Doe',
          t1name:'New MRR',
          t1num:'5230',
          t2name:'New Logos',
          t2num:'102',
          t3name:'Demo Calls',
          t3num:'30',
        },
      ]
    }

  }
}
