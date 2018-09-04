import {Component} from '@angular/core';

@Component({
	selector : "app-first",
	templateUrl: 'first.component.html',
	styleUrls: ['first.component.css']
})

export class FirstComponent {
	title: string = 'First Component';
	imageUrl: string = '../../assets/audi1.jpg';
	returnString() {
		return 'String returned from class component';
	}

	changeValue() {
		this.title = 'First Component value changed.';
	}

	changeImage() {
		if (this.imageUrl == '../../assets/audi 2.jpg') {
			this.imageUrl='../../assets/audi1.jpg';
		} else {
			this.imageUrl='../../assets/audi 2.jpg';
		}
		
	}

}