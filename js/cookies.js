document.addEventListener('DOMContentLoaded', function() {
    // Check if user has already accepted or rejected cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        createCookieBanner();
    }
});

function createCookieBanner() {
    // Create the banner element
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.className = 'fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 md:p-6 z-[60] transform transition-transform duration-500 translate-y-full';
    
    // Banner HTML content
    banner.innerHTML = `
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="text-sm text-[#415A77] text-center md:text-left">
                <p>
                    Ta strona używa plików cookies w celu zapewnienia prawidłowego działania serwisu oraz w celach analitycznych. 
                    Korzystając ze strony, wyrażasz zgodę na używanie cookies zgodnie z naszą 
                    <a href="polityka-prywatnosci.html" class="text-[#1B263B] font-medium underline hover:text-[#F4D03F]">Polityką Prywatności</a>.
                </p>
            </div>
            <div class="flex gap-3 shrink-0">
                <button id="accept-cookies" class="px-6 py-2.5 bg-[#1B263B] text-white text-sm font-medium rounded hover:bg-[#2a3850] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#1B263B]">
                    Akceptuję
                </button>
            </div>
        </div>
    `;

    // Append to body
    document.body.appendChild(banner);

    // Animate in
    setTimeout(() => {
        banner.classList.remove('translate-y-full');
    }, 100);

    // Event Listener for Accept
    document.getElementById('accept-cookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.classList.add('translate-y-full'); // Animate out
        setTimeout(() => {
            banner.remove();
        }, 500);
    });
}
