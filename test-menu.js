// Test if mobile menu is working
console.log('Testing mobile menu...');

// Wait for DOM to be ready
setTimeout(() => {
    const destLink = document.querySelector('.nav-item-dropdown > a');
    const submenuLinks = document.querySelectorAll('.dropdown-submenu > a');

    console.log('Destinations link found:', !!destLink);
    console.log('Submenu links found:', submenuLinks.length);

    if (destLink) {
        console.log('Destinations href:', destLink.getAttribute('href'));
    }

    submenuLinks.forEach((link, i) => {
        console.log(`Submenu ${i} text:`, link.textContent.trim(), 'href:', link.getAttribute('href'));
    });
}, 1000);
