const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");

addItems.addEventListener("submit", addItem);

function addItem(event) {
	event.preventDefault();
	const text = this.querySelector("[name='item']").value;
	const item = {
		text: text,
		done: false
	};
	itemsList.push(item);
	populateList(items, itemsList);
	this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, index) => {
    return `
			<li>
				<input type='checkbox' data-index='${index}' id='item${index}' ${
      plate.done ? "checked" : ""
    } />
				<label for='item${index}'>${plate.text}</label>
			</li>
		`;
  });
}