
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button-group button');
    const projects = document.querySelectorAll('.element-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            projects.forEach(project => {
                if (filter === '.popular' && project.classList.contains('popular')) {
                    project.style.display = 'block';
                } else if (filter === '.latest' && project.classList.contains('latest')) {
                    project.style.display = 'block';
                } else if (!filter) {  // Case for "ALL" button
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

});







