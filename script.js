// Function to show the selected tab and hide the others
function showTab(event, tabName) {
    event.preventDefault();

    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    // Remove the active class from all tab links
    const tabLinks = document.querySelectorAll('nav ul li a');
    tabLinks.forEach(tabLink => {
        tabLink.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabName).style.display = 'block';

    // Add the active class to the clicked tab link
    event.currentTarget.classList.add('active');
}
