const stages = [...document.querySelectorAll(".circle")];
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const progress = document.querySelector("#progress");
let count = 0;

function checkButtonState() {
	if (count === stages.length - 1) {
		next.setAttribute("disabled", "");
	} else {
		next.removeAttribute("disabled");
	}
	if (count === 0) {
		prev.setAttribute("disabled", "");
	} else {
		prev.removeAttribute("disabled");
	}
}

function colorCircles(event) {
	if (event.target === next && count < stages.length - 1) {
		count += 1;
		stages[count].classList.add("active");
	}
	if (event.target === prev && count > 0) {
		stages[count].classList.remove("active");
		count -= 1;
	}
}

function clickHandler(event) {
	event.preventDefault();
	if (event.target.tagName !== "BUTTON") return;
	colorCircles(event);
	checkButtonState();
	progress.style.width = `${count * 33.333}%`;
}

document.addEventListener("click", clickHandler);
