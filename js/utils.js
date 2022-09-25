function getNumOptions() {
    const urlParams = new URLSearchParams(window.location.search);
    const numOptions = parseInt(urlParams.get("numOptions") || 2);
    if (numOptions < 2) {
        return 2;
    }
    return numOptions;
}

const REPLY_TO_EMAIL = "kris@valdera.com";
const SUBJECT = "Compensation Option Selection";
const HREF = `mailto:${REPLY_TO_EMAIL}?subject=${SUBJECT}&body=`;

function changeSubmitter(selectionIndex) {
    const emailBody = `I have selected ${cashSelections[selectionIndex]} in cash and ${equitySelections[selectionIndex]} in equity.`;
    replyAnchor.href = `${HREF}${emailBody}`;
}