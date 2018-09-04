    import { Component, OnInit, Input } from '@angular/core';

    @Component({
      selector: 'app-gotcharacter',
      templateUrl: './gotcharacter.component.html',
      styleUrls: ['./gotcharacter.component.css']
    })
    export class GOTCharacterComponent implements OnInit {

        GOTCharacter: string[];
        GOTCharacterFirstName:string[] = ['John', 'Arya', 'Cersei', 'Daenerys'];
        GOTCharacterLastName:string[] = ['Snow', 'Stark', 'Lannister', 'Targaryen'];
        i = 0;
        stopSwitch: any;
        stopSwitchStatus = true;
        twoWayData = 'Tyrian';

        @Input() imageUrlChild: string;

        switchFirstAndLastName() {
            this.stopSwitch = setInterval(()=> {
                if (this.i%2 == 0) {
                    this.GOTCharacter = this.GOTCharacterFirstName;
                    console.log('in if');
                } else {
                    this.GOTCharacter = this.GOTCharacterLastName = this.GOTCharacterLastName;
                    console.log('in else');
                }
                this.i++;
            }, 1000);
            this.stopSwitchStatus = true;
        }

        stopSwitchFirstAndLastName() {
            clearInterval(this.stopSwitch);
            this.stopSwitchStatus = false;
        }

        constructor() { 
            console.log('in Constructor of gotcharacter');
            this.GOTCharacter = this.GOTCharacterFirstName;
        }

        ngOnInit() {
            console.log('in ngOnInit: ', this.imageUrlChild);
            //sarmad = this;
        }

    }
