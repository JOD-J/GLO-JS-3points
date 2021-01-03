/* eslint-disable max-len */
'use sctrict';

const
	addCarElem = document.querySelector('.add__car'),
	addCarConteinerElem = document.querySelector('.add__car-conteiner'),
	addCarBrandElem = document.querySelector('.add__car-brand'),
	addCarModelElem = document.querySelector('.add__car-model'),
	addCarReleaseElem = document.querySelector('.add__car-release'),
	addCarMileageElem = document.querySelector('.add__car-mileage'),
	addCarBtnElem = document.querySelector('.add__car-btn'),
	filterCarElem = document.querySelector('.filter__car'),
	filterCarConteinerElem = document.querySelector('.filter__car-conteiner'),
	filterCarBrandElem = document.querySelector('.filter__car-brand'),
	filterCarModelElem = document.querySelector('.filter__car-model'),
	filterCarReleaseElem = document.querySelector('.filter__car-release'),
	filterCarMileageElem = document.querySelector('.filter__car-mileage'),
	theadStrElem = document.querySelector('.thead__str'),
	tbodyElem = document.querySelector('.tbody'),
	tbodyStrElem = document.querySelector('.tbody__str'),
	tbodyNumElem = document.querySelector('.tbody__num'),
	tbodyBrandElem = document.querySelector('.tbody__brand'),
	tbodyModelElem = document.querySelector('.tbody__model'),
	tbodyReleaseElem = document.querySelector('.tbody__release'),
	tbodyMileageElem = document.querySelector('.tbody__mileage');
const addSpan = document.createElement('span');

const arrCar = [{
	brand: 'Mazda',
	model: '3/bk',
	release: 2006,
	mileage: 150000
},
{
	brand: 'BMW',
	model: 'x7',
	release: 2020,
	mileage: 15
},
{
	brand: 'OPEL',
	model: 'GRANDLAND X',
	release: 2019,
	mileage: 20000
},
{
	brand: 'Hyundai',
	model: 'PALISADE',
	release: 2021,
	mileage: 50000
}];

//======================================================removeInputAddCar==========================================================
const removeInputAddCar = () => {
	addCarBrandElem.value = ''; 			// очищаем все инпуты
	addCarModelElem.value = ''; 			// очищаем все инпуты
	addCarReleaseElem.value = ''; 			// очищаем все инпуты
	addCarMileageElem.value = ''; 			// очищаем все инпуты
};
//==============================================\\\\\\\removeInputAddCar======================================================


//======================================================showArrCar==========================================================
const showArrCar = arrCar => {
	arrCar.forEach((item, i) => {
		const addTbodyStr = document.createElement('tr');
		addTbodyStr.classList.add('tbody__str');
		addTbodyStr.innerHTML = `
		<th class="tbody__num">${i + 1}</th>
		<th class="tbody__brand">${item.brand}</th>
		<th class="tbody__model">${item.model}</th>
		<th class="tbody__release">${item.release}</th>
		<th class="tbody__mileage">${item.mileage}</th>
		`;
		tbodyElem.insertAdjacentElement('beforeend', addTbodyStr);
	});
};
//==============================================\\\\\\\showArrCar======================================================


//======================================================addCarTbody==========================================================
const addCarTbody = () => {
	if (addCarBrandElem.value !== '' &&	addCarModelElem.value !== '' &&	addCarReleaseElem.value !== '' && addCarMileageElem.value !== '') {
		tbodyElem.innerHTML = '';
		arrCar.push({
			brand: addCarBrandElem.value,
			model: addCarModelElem.value,
			release: Number(addCarReleaseElem.value),
			mileage: Number(addCarMileageElem.value)
		});
		showArrCar(arrCar);
		addCarConteinerElem.children[0].innerHTML = '';
		removeInputAddCar();
	} else {
		addSpan.textContent = 'Заполните все поля';
		addSpan.classList.add('errorAddCar');
		addCarConteinerElem.insertAdjacentElement('afterbegin', addSpan);
	}
};
//==============================================\\\\\\\addCarTbody======================================================


//======================================================filterAddCar==========================================================
const filterAddCar = () => {
	if (filterCarBrandElem.value !== '' || filterCarModelElem.value !== '' ||	filterCarReleaseElem.value !== '' || filterCarMileageElem.value !== '') {
		tbodyElem.innerHTML = '';
		const newArrCar = arrCar.filter(item => {
			if (item.brand === filterCarBrandElem.value) {
				return item.brand === filterCarBrandElem.value;
			}
			if (item.model === filterCarModelElem.value) {
				return item.model === filterCarModelElem.value;
			}
			if (item.release === +filterCarReleaseElem.value) {
				return item.release === Number(filterCarReleaseElem.value);
			}
			if (item.mileage === +filterCarMileageElem.value) {
				return item.mileage === Number(filterCarMileageElem.value);
			}
		});
		showArrCar(newArrCar);
	} else {
		tbodyElem.innerHTML = '';
		showArrCar(arrCar);
	}
};
//==============================================\\\\\\\filterAddCar======================================================


//======================================================sortCar==========================================================
const sortCar = elem => {
	if (elem.matches('.thead__brand')) {
		tbodyElem.innerHTML = '';
		arrCar.sort((a, b) => {
			if (a.brand > b.brand) {
				return 1;
			}
			if (a.brand < b.brand) {
				return -1;
			}
			return 0;
		});
		showArrCar(arrCar);
	}
	if (elem.matches('.thead__model')) {
		tbodyElem.innerHTML = '';
		arrCar.sort((a, b) => {
			if (a.model > b.model) {
				return 1;
			}
			if (a.model < b.model) {
				return -1;
			}
			return 0;
		});
		showArrCar(arrCar);
	}
	if (elem.matches('.thead__release')) {
		tbodyElem.innerHTML = '';
		arrCar.sort((a, b) => {
			if (a.release > b.release) {
				return 1;
			}
			if (a.release < b.release) {
				return -1;
			}
			return 0;
		});
		showArrCar(arrCar);
	}
	if (elem.matches('.thead__mileage')) {
		tbodyElem.innerHTML = '';
		arrCar.sort((a, b) => {
			if (a.mileage > b.mileage) {
				return 1;
			}
			if (a.mileage < b.mileage) {
				return -1;
			}
			return 0;
		});
		showArrCar(arrCar);
	}
};
//==============================================\\\\\\\sortCar======================================================


//======================================================слушатели==========================================================
addCarBtnElem.addEventListener('click', addCarTbody);
filterCarConteinerElem.addEventListener('change', filterAddCar);
theadStrElem.addEventListener('click', event => {
	const target = event.target;
	sortCar(target);
});
//==============================================\\\\\\\слушатели======================================================

showArrCar(arrCar);
