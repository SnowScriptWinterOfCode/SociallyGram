document.addEventListener('DOMContentLoaded', function () {
    // Get references to the input field and search results container
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    // Add event listener to the input field for real-time searching
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        // Perform your search logic here (e.g., filter an array of items)
        const searchResultsData = performSearch(searchTerm);

        // Update the UI with the search results
        displaySearchResults(searchResultsData);
    });
});

// Example search function - replace this with your actual search logic
function performSearch(searchTerm) {
    // Replace this with your actual data and search logic
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // ... add more items as needed
    ];

    return data.filter(item => item.name.toLowerCase().includes(searchTerm));
}

// Update the UI with search results
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');

    // Clear previous results
    searchResults.innerHTML = '';

    // Display the new results
    results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = result.name;
        searchResults.appendChild(listItem);
    });
}
