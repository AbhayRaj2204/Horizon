/**
 * Booking Widget Logic
 * Handles the 'Check availability' interaction and simulated booking flow.
 */

document.addEventListener('DOMContentLoaded', () => {
    const checkAvailabilityBtn = document.querySelector('.btn-check-availability');
    const bookingForm = document.querySelector('.booking-form');
    const successMsg = document.querySelector('.booking-success-msg');

    if (checkAvailabilityBtn) {
        checkAvailabilityBtn.addEventListener('click', (e) => {
            e.preventDefault();

            // Basic validation
            const dateInput = document.getElementById('tour-date');
            if (dateInput && !dateInput.value) {
                dateInput.style.borderColor = '#e53e3e';
                dateInput.focus();
                return;
            } else if (dateInput) {
                dateInput.style.borderColor = '#e2e8f0';
            }

            // Show loading state
            const originalText = checkAvailabilityBtn.innerHTML;
            checkAvailabilityBtn.classList.add('loading');
            checkAvailabilityBtn.innerHTML = `
                <svg class="spinner" width="20" height="20" viewBox="0 0 50 50" style="animation: spin 1s linear infinite;">
                    <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-dasharray="80, 200"></circle>
                </svg>
                Checking...
            `;
            checkAvailabilityBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                checkAvailabilityBtn.classList.remove('loading');
                checkAvailabilityBtn.innerHTML = 'Check availability';
                checkAvailabilityBtn.disabled = false;

                // Show success message
                if (successMsg) {
                    successMsg.style.display = 'block';
                    successMsg.innerHTML = '✅ Availability found! Redirecting to inquiry form...';

                    setTimeout(() => {
                        // Redirect to contact page with pre-filled details
                        const tourName = document.title.split(' - ')[0];
                        const date = dateInput ? dateInput.value : '';
                        const guests = document.getElementById('guest-count') ? document.getElementById('guest-count').value : '1';

                        // Calculate relative path to root/contact.html
                        let prefix = '../';
                        if (window.location.pathname.includes('/destinations/')) {
                            prefix = '../../';
                        }

                        window.location.href = `${prefix}contact.html?tour=${encodeURIComponent(tourName)}&date=${date}&guests=${guests}#contact-form`;
                    }, 1500);
                }
            }, 2000);
        });
    }

    // Add CSS for spinner dynamically if not in style.css
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            100% { transform: rotate(360deg); }
        }
        .spinner {
            display: inline-block;
            vertical-align: middle;
        }
    `;
    document.head.appendChild(style);
});
