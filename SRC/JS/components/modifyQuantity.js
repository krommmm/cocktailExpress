const modifyQuantity = (e) => {
	let quantity = e.target.value;

	let name = e.target.closest('article').querySelector('h2').textContent;
    let accessoire = e.target.closest('article').querySelector(".accessoire").textContent;
	let localStorageContent = JSON.parse(localStorage.getItem('cocktails'));
	for (let i = 0; i < localStorageContent.length; i++) {
		if (localStorageContent[i].nom === name && localStorageContent[i].accessoire === accessoire) {
			localStorageContent[i].unitée = quantity;
		}
	}

	localStorage.setItem('cocktails', JSON.stringify(localStorageContent));
};

export default modifyQuantity;
