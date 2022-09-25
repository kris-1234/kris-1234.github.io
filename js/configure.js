//const BASE_URL = "https://kris-1234.github.io/index.html";
const BASE_URL = "file:///Users/kris/code/kris-1234.github.io/index.html";

function getLoader() {
	const loader = document.createElement("img");
	loader.src = "./img/loading.gif";
	return loader;
}

submit.onclick = () => {
	const prevResults = results.innerHTML;
	results.innerHTML = "";
	results.appendChild(getLoader());
	const params = new URLSearchParams({
		headerImgUrl: encodeURIComponent(headerLogoInput.value),
		headerTitle: encodeURIComponent(headerTitleInput.value),
		message: encodeURIComponent(messageInput.value),
		numOptions: numOptionsInput.value,
		cashUnit: cashUnitInput.value,
		minCash: minCashInput.value,
		maxCash: maxCashInput.value,
		equityUnit: encodeURIComponent(equityUnitInput.value),
		minEquity: minEquityInput.value,
		maxEquity: maxEquityInput.value,
	});
	const url = new URL(BASE_URL);
	url.search = params;
	window.setTimeout(() => {
		results.innerHTML = prevResults;
		linkResult.value = url.toString();

		copyIcon.onclick = () => {
			console.log("??");
			navigator.clipboard.writeText(linkResult.value);
			copiedText.classList.remove("hidden");
			window.setTimeout(() => {
				copiedText.classList.add("hidden");
			}, 1000)
		};
	}, 500);	
};
