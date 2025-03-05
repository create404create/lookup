// APIs
const tcpaApi = "https://api.uspeoplesearch.net/tcpa/v1?x=";
const personApi = "https://api.uspeoplesearch.net/person/v3?x=";
const premiumLookupApi = "https://premium_lookup-1-h4761841.deta.app/person?x=";
const reportApi = "https://api.uspeoplesearch.net/tcpa/report?x=";

// Fetch data from API
async function fetchData() {
    const query = document.getElementById('query').value;
    const resultDiv = document.getElementById('result');

    if (!query) {
        resultDiv.textContent = "Please enter a query.";
        return;
    }

    try {
        // Example: Fetch data from Person API
        const response = await fetch(`${personApi}${query}`);
        const data = await response.json();
        resultDiv.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        resultDiv.textContent = "Error fetching data.";
        console.error(error);
    }
}
