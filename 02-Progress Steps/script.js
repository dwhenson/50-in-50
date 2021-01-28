const links = [...document.querySelectorAll(".progress a")];
const next = document.querySelector("#next");
const previous = document.querySelector("#previous");
let stage = 0;

function activateLink(element) {
	links.forEach((link, index) => {
		if (index > stage) {
			link.classList.remove("active");
		} else {
			link.classList.add("active");
		}
	});

	element.classList.add("active");
	if (!element.hasAttribute("data-complete")) {
		element.setAttribute("data-complete", "");
	}
}

function buttonHandler(event) {
	event.preventDefault();
	if (event.target === next && stage < links.length - 1) stage += 1;
	if (event.target === previous && stage > 0) stage -= 1;

	links.forEach((link, index) => {
		if (index === stage) {
			activateLink(link);
		}
	});
}

function clickHandler(event) {
	if (event.target.tagName === "BUTTON") buttonHandler(event);
}

document.addEventListener("click", clickHandler);
