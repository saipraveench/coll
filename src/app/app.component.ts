import { Component, ViewChild, OnInit } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',   
})

export class AppComponent implements OnInit {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    // Decision Variable

    source: any =
    {
        datatype: "csv",
        datafields:
        [
            
            { name: 'Label', type: 'string' }
                ],
       url: '../assets/Decisionvar.csv/'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        {
            text: 'Decision Variable', sortable: false, filterable: false, editable: true,
            groupable: false, draggable: false, resizable: false,pinned: true,
            datafield: '', columntype: 'number', width: 130,
            cellsrenderer: (row: number, column: any, value: number): string => {
                return '<div style="margin: 4px;">' + 'X' +(value + 1) + '</div>';  
                
            }
        },
        
        { text: 'Label', columntype: 'textbox', datafield: 'Label', width: 330 }
    ];    

    btnTopOnChecked(): void {
        this.myGrid.everpresentrowactions('add reset');
    }

    btnBottomOnChecked(): void {
        this.myGrid.everpresentrowactions('addBottom reset');
    }

//Objective function

    ngOnInit(): void {
        this.generateData();
    }
    data2: any[] = [];
    datafields2: any[] = [];
    columns2: any[] = [

        {
            text: 'Decision Variables', sortable: false, filterable: false, editable: true,
            groupable: false, draggable: false, resizable: false,pinned: true,
            datafield: '', columntype: 'number', width: 130,
            cellsrenderer: (row: number, column: any, value: number): string => {
                return '<div style="margin: 4px;">' + 'Coefficients' + '</div>';  
                
            }     

        },

    
        
    ];
    source2: any =
    {
        localdata: this.data2,
        datatype: 'array',
        datafields: this.datafields2
    }

    dataAdapter2: any = new jqx.dataAdapter(this.source2);

    generateData(): void {
        for (let i = 0; i < 1; i++) {
            let row = {};
            for (let j = 0; j < 50; j++) {
                row['Coefficients'] = ' ' ;
                if (i == 0) {
                    this.columns2.push({ datafield: 'Name' + j, text: 'X' + (1 + j), width: 75 });
                    this.datafields2.push({ name: 'coefficients', type: 'string' });
                }
            }
            this.data2[i] = row;
        }
    }


    dataAdapter02 : string[] =
        [
            'Maximize',
            'Minimize'

        ]

// Constraints

        ngDoCheck(): void {
            this.generateData3();
        }
        data3: any[] = [];
        datafields3: any[] = [];
        dataAdapter03 : string[] = ['less than equal','greater than equal']
        columns3: any[] = [
    
            {
                text: 'Constraints', sortable: false, filterable: false, editable: true,
                groupable: false, draggable: false, resizable: false,pinned: true,
                datafield: '', columntype: 'number', width: 130,
                cellsrenderer: (row: number, column: any, value: number): string => {
                    return '<div style="margin: 4px;">' + 'Constraint '+ (value + 1) + '</div>';  
                    
                }
              
            },
            
            { text: 'Value', columntype: 'textbox', datafield: 'Value', width: 80 },
            
            {
                text: 'Inequality', datafield: 'countryCode', displayfield: 'Country', columntype: 'dropdownlist',width: 135, 
                createeditor: (row: number, value: any, editor: any): void => {
                    editor.jqxDropDownList({ width: '99%', height: 27,dropDownHeight:55, source: this.dataAdapter03, displayMember: 'label', valueMember: 'value' });
                }
            }

          
        ];
       
    
        source3: any =
        {
            localdata3: this.data3,
            datatype3: 'array',
            datafields3: this.datafields3
        }
    
        dataAdapter3: any = new jqx.dataAdapter(this.source3);
    
        generateData3(): void {
            for (let i = 0; i < 1; i++) {
                let row = {};
                for (let j = 0; j < 50; j++) {
                    row['Coefficients'] = ' ' ;
                    if (i == 0) {
                        this.columns3.push({ datafield: 'Name' + j, text: 'X' + (1 + j), width: 75 });
                        this.datafields3.push({ name: 'coefficients', type: 'string' });
                    }
                }
                this.data3[i] = row;
            }
        
        
        }
    
        


        

}
