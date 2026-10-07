const headerPlaceholder = document.querySelector("[data-site-header]");

if (headerPlaceholder) {
    const scriptUrl = document.currentScript?.src;
    const headerUrl = scriptUrl ? new URL("./header.html", scriptUrl) : "./header.html";

    fetch(headerUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Unable to load header: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then((headerMarkup) => {
            headerPlaceholder.innerHTML = headerMarkup;
        })
        .catch((error) => {
            console.error(error);
            headerPlaceholder.textContent = "Site navigation could not be loaded.";
        });
}