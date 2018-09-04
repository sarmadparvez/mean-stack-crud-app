import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    providers: []
})
export class ListComponent implements OnInit {

    itemsReceived: string[] = [''];

    addNewItem(form: any) {
        this.dataService.addItem(form.value.itemName);
    }

    getItemsFromServiceClass(){
        this.itemsReceived = this.dataService.getItems();
        // to do later
    }

    constructor(private dataService: DataService) {

    }

    ngOnInit() {
    }

}
