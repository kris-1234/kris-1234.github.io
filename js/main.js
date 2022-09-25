const urlSearchParams = new URLSearchParams(window.location.search);
const minCash = parseInt(urlSearchParams.get("minCash") || 0);
const maxCash = parseInt(urlSearchParams.get("maxCash") || 100000);
const cashUnit = urlSearchParams.get("cashUnit") || "$";
const minEquity = parseFloat(urlSearchParams.get("minEquity") || 0);
const maxEquity = parseFloat(urlSearchParams.get("maxEquity") || 100);
const equityDecimals = parseInt(urlSearchParams.get("equityDecimals") || 3);
const equityUnit = urlSearchParams.get("equityUnit") || " RSUs";

const cashSelections = [];
const equitySelections = [];

function renderSteps(container, min, max, formatter, selectionsList) {
    const numOptions = getNumOptions();
    const step = (max - min) / (numOptions - 1);
    for (let i = 0; i < numOptions; i++) {
        const stepDiv = document.createElement("div");
        const formattedComp = formatter(step * i); 
        stepDiv.innerHTML = formattedComp;
        selectionsList.push(formattedComp);
        stepDiv.classList.add("option");
        container.appendChild(stepDiv);
    }
}

function formatCash(stepValue) {
    const value = minCash + stepValue;
    const formattedValue = value.toLocaleString(undefined, { minimumFractionDigits: 2 });
    return cashUnit + formattedValue;
}

function formatEquity(stepValue) {
    const value = maxEquity - stepValue;
    return Number(value.toFixed(equityDecimals)) + equityUnit;
}

renderSteps(cashOptions, minCash, maxCash, formatCash, cashSelections);
renderSteps(equityOptions, minEquity, maxEquity, formatEquity, equitySelections);

changeSubmitter(0);

headerLogo.src = urlSearchParams.get("headerImgUrl") || "https://assets.website-files.com/620431a0eb08386b9349b7c1/62f5444b7640274a06091210_Valdera_logo_horizontal_white_RGB%201.png";
headerTitle.innerHTML = urlSearchParams.get("headerTitle") || "";
message.innerHTML = urlSearchParams.get("message") || "Here are all the compensation packages we're offering. Please use the slider below to make a selection.";
