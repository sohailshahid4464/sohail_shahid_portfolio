<script>
document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.our-project');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        threshold: 0.1
    });

    projects.forEach(project => {
        observer.observe(project);
    });
});
</script>
