/* eslint-disable max-len */
'use sctrict';

const headerElem = document.querySelector('.header'),
	addCarElem = document.querySelector('.add__car'),

	addCarBrandElem = document.querySelector('.add__car-brand'),
	addCarModelElem = document.querySelector('.add__car-model'),
	addCarReleaseElem = document.querySelector('.add__car-release'),
	addCarMileageElem = document.querySelector('.add__car-mileage'),
	addCarBtnElem = document.querySelector('.add__car-btn'),

	filter__car = document.querySelector('.filter__car'),

	filterCarBrandElem = document.querySelector('.filter__car-brand'),
	filterCarModelElem = document.querySelector('.filter__car-model'),
	filterCarReleaseElem = document.querySelector('.filter__car-release'),
	filterCarMileageElem = document.querySelector('.filter__car-mileage'),

	tbodyElem = document.querySelector('.tbody'),
	tbodyStrElem = document.querySelector('.tbody__str'),

	tbodyNumElem = document.querySelector('.tbody__num'),
	tbodyBrandElem = document.querySelector('.tbody__brand'),
	tbodyModelElem = document.querySelector('.tbody__model'),
	tbodyReleaseElem = document.querySelector('.tbody__release'),
	tbodyMileageElem = document.querySelector('.tbody__mileage');


const arrCar = [];
let countNum = 0;
//======================================================removeInputAddCar==========================================================
const removeInputAddCar = () => {
	addCarBrandElem.value = ''; 			// очищаем все инпуты
	addCarModelElem.value = ''; 			// очищаем все инпуты
	addCarReleaseElem.value = ''; 			// очищаем все инпуты
	addCarMileageElem.value = ''; 			// очищаем все инпуты
};
//==============================================\\\\\\\removeInputAddCar======================================================


//======================================================addCarTbody==========================================================
const addCarTbody = () => {
	if (addCarBrandElem.value !== '' &&
	addCarModelElem.value !== '' &&
	addCarReleaseElem.value !== '' &&
	addCarMileageElem.value !== '') {
		const addTbodyStr = document.createElement('tr');
		addTbodyStr.classList.add('tbody__str');
		addTbodyStr.innerHTML = `
		<th class="tbody__num">${countNum += 1}</th>
		<th class="tbody__brand">${addCarBrandElem.value}</th>
		<th class="tbody__model">${addCarModelElem.value}</th>
		<th class="tbody__release">${addCarReleaseElem.value}</th>
		<th class="tbody__mileage">${addCarMileageElem.value}</th>
		`;
		arrCar.push(addTbodyStr);
		arrCar.forEach(item => {
			tbodyElem.insertAdjacentElement('beforeend', item);
		});
		console.log('arrCar: ', arrCar);
		removeInputAddCar();
	}
};
//==============================================\\\\\\\addCarTbody======================================================

// ||
// filterCarModelElem.value !== '' ||
// filterCarReleaseElem.value !== '' ||
// filterCarMileageElem.value !== ''
//======================================================filterAddCar==========================================================
const filterAddCar = () => {
	if (filterCarBrandElem.value !== '') {
		const newArrCar = arrCar.filter(item => {
			if (item.th.class === "tbody__brand") {
				console.log(123);
			}

		});
		console.log('newArrCar: ', newArrCar);
		newArrCar.forEach(item => {
			console.log('item: ', item);
			tbodyElem.insertAdjacentElement('beforeend', item);
		});
	}
};
filterAddCar();
//==============================================\\\\\\\filterAddCar======================================================


//======================================================слушатели==========================================================
addCarBtnElem.addEventListener('click', addCarTbody);
//==============================================\\\\\\\слушатели======================================================
