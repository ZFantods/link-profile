document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll('.icon');

    function loadSVG(icon, color) {
        const src = icon.getAttribute('data-src');
        fetch(src)
            .then(response => response.text())
            .then(svgText => {
                const parser = new DOMParser();
                const svg = parser.parseFromString(svgText, 'image/svg+xml').documentElement;
                svg.setAttribute('width', '24px');
                svg.setAttribute('height', '24px');
                svg.querySelectorAll('path').forEach(path => path.setAttribute('fill', color));
                icon.replaceWith(svg);
            });
    }

    icons.forEach(icon => {
        loadSVG(icon, '#9a7ccf'); // Color initial for the icons
    });
});
