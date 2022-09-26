function getNumOptions() {
    const urlParams = new URLSearchParams(window.location.search);
    const numOptions = parseInt(urlParams.get("numOptions") || 2);
    if (numOptions < 2) {
        return 2;
    }
    return numOptions;
}

function changeSubmitter(selectionIndex) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const replyToEmail = urlSearchParams.get("replyToEmail") || "hr@valdera.com";
    const SUBJECT = "Compensation Option Selection";
    const href = `mailto:${replyToEmail}?subject=${SUBJECT}&body=`;
    const emailBody = `I have selected ${cashSelections[selectionIndex]} in cash and ${equitySelections[selectionIndex]} in equity.`;
    replyAnchor.href = `${href}${encodeURIComponent(emailBody)}`;
}