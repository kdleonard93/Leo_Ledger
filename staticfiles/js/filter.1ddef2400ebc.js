document.addEventListener('DOMContentLoaded', function() {
    const filterForm = document.getElementById('filterform');
    const filterButtons = filterForm.querySelectorAll('label.btn');
    const checkboxes = filterForm.querySelectorAll('input[type="checkbox"][name="category"]');

    // Function to update the active state based on the checked checkboxes
    function updateCategoryActiveState() {
        checkboxes.forEach(checkbox => {
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            if (checkbox.checked) {
                label.classList.add('btn-active');
            } else {
                label.classList.remove('btn-active');
            }
        });
    }

    // Initial update of the active state
    updateCategoryActiveState();

    // Event listener for filter button clicks
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const checkbox = document.getElementById(this.getAttribute('for'));
            checkbox.checked = !checkbox.checked;
            this.classList.toggle('btn-active');
        });
    });

    // Event listener for form submission to retain the state after submission
    filterForm.addEventListener('submit', function() {
        // Using a timeout to wait for the form to be processed by HTMX
        setTimeout(updateCategoryActiveState, 100);
    });
});
