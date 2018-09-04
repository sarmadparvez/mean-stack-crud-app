import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	items: string[] = ['Butter', 'Bread', 'Salt'];

	addItem(newItem) {
		this.items.push(newItem);
		return this.items;
	}

	getItems(): string[] {
		return this.items;
	}

 	constructor() { }
}
