/**
 * Centralized Navbar Loader
 * Dynamically injects the navbar into all pages with correct paths.
 */

function initNavbar(relPath = "", isScrolled = false) {
    const navbarHTML = `
    <nav class="navbar ${isScrolled ? 'scrolled' : ''}">
        <div class="nav-container">
            <div class="logo-wrapper">
                <a href="${relPath}index.html">
                    <img src="${relPath}assets/images/Horizon-Tours-Travels-White.svg" alt="Horizon DMC" class="logo-img" id="nav-logo">
                </a>
            </div>
            
            <ul class="nav-menu">
                <li><a href="${relPath}index.html" data-i18n="nav.home">Home</a></li>
                <li class="nav-item-dropdown">
                    <a href="#destinations" data-i18n="nav.destinations">Destinations ▾</a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-submenu">
                            <a href="#australia">Australia ▹</a>
                            <ul class="dropdown-menu-sub">
                                <li><a href="${relPath}destinations/australia/sydney.html">Sydney</a></li>
                                <li><a href="${relPath}destinations/australia/brisbane.html">Brisbane</a></li>
                                <li><a href="${relPath}destinations/australia/gold-coast.html">Gold Coast</a></li>
                                <li><a href="${relPath}destinations/australia/cairns.html">Cairns</a></li>
                                <li><a href="${relPath}destinations/australia/melbourne.html">Melbourne</a></li>
                                <li><a href="${relPath}destinations/australia/tasmania.html">Tasmania</a></li>
                                <li><a href="${relPath}destinations/australia/whitsundays.html">Whitsundays</a></li>
                            </ul>
                        </li>
                        <li class="dropdown-submenu">
                            <a href="#newzealand">New Zealand ▹</a>
                            <ul class="dropdown-menu-sub">
                                <li><a href="${relPath}destinations/new-zealand/auckland.html">Auckland</a></li>
                                <li><a href="${relPath}destinations/new-zealand/christchurch.html">Christchurch</a></li>
                                <li><a href="${relPath}destinations/new-zealand/rotorua.html">Rotorua</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="${relPath}services.html" data-i18n="nav.services">Services</a></li>
                <li><a href="${relPath}index.html#packages" data-i18n="nav.packages">Packages</a></li>
                <li><a href="${relPath}contact.html" data-i18n="nav.contact">Contact</a></li>
                
                <!-- Mobile Menu Footer -->
                <li class="mobile-menu-footer" style="list-style: none;">
                    <div class="mobile-lang-selector">
                        <button data-lang="en" class="active">EN</button>
                        <button data-lang="ja">日本語</button>
                    </div>
                    <div class="mobile-cta-buttons">
                        <a href="${relPath}agent/portal.html" class="mobile-cta-btn secondary" data-i18n="b2b.nav.agentPortal">AGENT PORTAL</a>
                        <a href="${relPath}partner-register.html" class="mobile-cta-btn primary" data-i18n="b2b.nav.becomePartner">BECOME A PARTNER</a>
                    </div>
                </li>
            </ul>

            <div class="nav-actions">
                <div class="lang-selector desktop-only">
                    <button data-lang="en">EN</button>
                    <button data-lang="ja">日本語</button>
                </div>
                <div class="nav-btns">
                    <a href="${relPath}agent/portal.html" class="nav-portal-link" data-i18n="b2b.nav.agentPortal">AGENT PORTAL</a>
                    <a href="${relPath}partner-register.html" class="cta-btn" data-i18n="b2b.nav.becomePartner">BECOME A PARTNER</a>
                </div>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </nav>
    <div class="mobile-menu-backdrop"></div>
    `;

    // Inject at the top of the body or into a specific placeholder
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }

    // Add filter for logo when navbar is scrolled (since we only have white version)
    if (!document.getElementById('navbar-logo-filter')) {
        const style = document.createElement('style');
        style.id = 'navbar-logo-filter';
        style.textContent = `
            .navbar.scrolled #nav-logo {
                filter: brightness(0);
            }
        `;
        document.head.appendChild(style);
    }

    // Attach functionality
    setupNavbarLogic(relPath, isScrolled);
}

function setupNavbarLogic(relPath, initiallyScrolled) {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLogo = document.getElementById("nav-logo");

    // Scroll Effect
    if (!initiallyScrolled) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    // Mobile menu toggle
    const backdrop = document.querySelector('.mobile-menu-backdrop');

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
        backdrop.classList.toggle("active");
    });

    // Close menu when clicking backdrop
    backdrop.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        backdrop.classList.remove("active");
    });

    // Mobile dropdown toggles - Destinations (Main dropdown)
    const destinationsDropdown = document.querySelector('.nav-item-dropdown > a');
    if (destinationsDropdown) {
        destinationsDropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                const parent = destinationsDropdown.parentElement;
                parent.classList.toggle('active');
                console.log('Destinations clicked, active:', parent.classList.contains('active'));
            }
        });
    }

    // Mobile dropdown toggles - Australia & New Zealand (Submenus)
    document.querySelectorAll('.dropdown-submenu > a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                const parent = link.parentElement;

                // Close other submenus
                document.querySelectorAll('.dropdown-submenu').forEach(submenu => {
                    if (submenu !== parent) {
                        submenu.classList.remove('active');
                    }
                });

                // Toggle current submenu
                parent.classList.toggle('active');
                console.log('Submenu clicked:', link.textContent, 'active:', parent.classList.contains('active'));
            }
        });
    });

    // Close mobile menu when clicking on a destination link (city)
    document.querySelectorAll('.dropdown-menu-sub a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                backdrop.classList.remove('active');
            }
        });
    });

    // Language Selector within Navbar (Desktop)
    document.querySelectorAll('.lang-selector button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            if (typeof setLanguage === 'function') {
                setLanguage(lang);
            }
        });
    });

    // Mobile Language Selector
    document.querySelectorAll('.mobile-lang-selector button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all buttons
            document.querySelectorAll('.mobile-lang-selector button').forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');

            const lang = e.target.getAttribute('data-lang');
            if (typeof setLanguage === 'function') {
                setLanguage(lang);
            }
        });
    });

    // Update translations for newly injected elements
    if (typeof setLanguage === 'function') {
        const currentLang = localStorage.getItem("preferredLanguage") || "en";
        setLanguage(currentLang);
    }
}
