// =====================================================
// RANIN IBRAHIM HAMMOUD - PORTFOLIO
// JAVASCRIPT
// =====================================================


document.addEventListener("DOMContentLoaded", function () {


    // =====================================================
    // MOBILE MENU
    // =====================================================

    const menuIcon =
        document.getElementById("menu-icon");

    const navLinks =
        document.querySelector(".nav-links");


    if (menuIcon && navLinks) {


        menuIcon.addEventListener(
            "click",
            function () {


                navLinks.classList.toggle(
                    "active"
                );


                const icon =
                    menuIcon.querySelector("i");


                if (
                    navLinks.classList.contains(
                        "active"
                    )
                ) {


                    icon.classList.remove(
                        "fa-bars"
                    );


                    icon.classList.add(
                        "fa-xmark"
                    );


                    menuIcon.setAttribute(
                        "aria-label",
                        "Close navigation menu"
                    );


                } else {


                    icon.classList.remove(
                        "fa-xmark"
                    );


                    icon.classList.add(
                        "fa-bars"
                    );


                    menuIcon.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );


                }

            }
        );


        // Close menu after clicking link

        const links =
            navLinks.querySelectorAll("a");


        links.forEach(function (link) {


            link.addEventListener(
                "click",
                function () {


                    navLinks.classList.remove(
                        "active"
                    );


                    const icon =
                        menuIcon.querySelector("i");


                    icon.classList.remove(
                        "fa-xmark"
                    );


                    icon.classList.add(
                        "fa-bars"
                    );


                    menuIcon.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );


                }
            );


        });


    }


    // =====================================================
    // ACTIVE NAVIGATION LINK
    // =====================================================

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navItems =
        document.querySelectorAll(
            ".nav-links a"
        );


    function updateActiveLink() {


        let currentSection = "";


        sections.forEach(function (section) {


            const sectionTop =
                section.offsetTop - 160;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {


                currentSection =
                    section.getAttribute("id");


            }


        });


        navItems.forEach(function (link) {


            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (
                href ===
                "#" + currentSection
            ) {


                link.classList.add(
                    "active"
                );


            }


        });


    }


    window.addEventListener(
        "scroll",
        updateActiveLink
    );


    updateActiveLink();


    // =====================================================
    // SMOOTH SCROLL
    // =====================================================

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {


        link.addEventListener(
            "click",
            function (event) {


                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                }


            }
        );


    });


    // =====================================================
    // SCROLL REVEAL ANIMATION
    // =====================================================

    const revealElements =
        document.querySelectorAll(
            ".hero-content, " +
            ".hero-image, " +
            ".about-container, " +
            ".timeline-item, " +
            ".skill-card, " +
            ".project-card, " +
            ".certificate-card, " +
            ".education-box, " +
            ".contact-info, " +
            ".contact-form"
        );


    if (
        "IntersectionObserver" in window
    ) {


        const observer =
            new IntersectionObserver(
                function (
                    entries,
                    observer
                ) {


                    entries.forEach(
                        function (entry) {


                            if (
                                entry.isIntersecting
                            ) {


                                entry.target.classList.add(
                                    "show"
                                );


                                observer.unobserve(
                                    entry.target
                                );


                            }


                        }
                    );


                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(
            function (element) {


                element.classList.add(
                    "reveal"
                );


                observer.observe(
                    element
                );


            }
        );


    } else {


        revealElements.forEach(
            function (element) {


                element.classList.add(
                    "show"
                );


            }
        );


    }


    // =====================================================
    // CONTACT FORM
    // GOOGLE APPS SCRIPT
    // =====================================================


    const contactForm =
        document.getElementById(
            "contactForm"
        );


    const submitBtn =
        document.getElementById(
            "submitBtn"
        );


    /*
     * IMPORTANT:
     * This is your Google Apps Script Web App URL.
     */

    const scriptURL =
        "https://script.google.com/macros/s/AKfycbyBVGZolGlMzJ-epeYRIX_A2OYa9rI-Kahy3uLDY5yDPcV39ArBJTuGB6ldzuUEb1K2Xw/exec";


    if (contactForm) {


        /*
         * Send form directly to Google Apps Script
         * through the hidden iframe.
         */

        contactForm.action =
            scriptURL;


        contactForm.addEventListener(
            "submit",
            function () {


                const name =
                    document.getElementById(
                        "name"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();


                const subject =
                    document.getElementById(
                        "subject"
                    ).value.trim();


                const message =
                    document.getElementById(
                        "message"
                    ).value.trim();


                // Validate fields

                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {


                    alert(
                        "Please fill in all fields."
                    );


                    return;

                }


                // Validate email

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailPattern.test(email)
                ) {


                    alert(
                        "Please enter a valid email address."
                    );


                    return;

                }


                // Change button

                submitBtn.disabled =
                    true;


                submitBtn.innerHTML =
                    'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';


                /*
                 * The form itself is submitted
                 * to Google Apps Script.
                 *
                 * We don't use fetch().
                 */


                setTimeout(
                    function () {


                        alert(
                            "Thank you! Your message has been sent successfully."
                        );


                        contactForm.reset();


                        submitBtn.disabled =
                            false;


                        submitBtn.innerHTML =
                            'Send Message <i class="fa-solid fa-paper-plane"></i>';


                    },
                    1500
                );


            }
        );


    }


    // =====================================================
    // ESC KEY CLOSES MOBILE MENU
    // =====================================================

    document.addEventListener(
        "keydown",
        function (event) {


            if (
                event.key === "Escape" &&
                navLinks &&
                navLinks.classList.contains(
                    "active"
                )
            ) {


                navLinks.classList.remove(
                    "active"
                );


                const icon =
                    menuIcon.querySelector(
                        "i"
                    );


                icon.classList.remove(
                    "fa-xmark"
                );


                icon.classList.add(
                    "fa-bars"
                );


                menuIcon.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );


            }


        }
    );


    // =====================================================
    // CONSOLE
    // =====================================================

    console.log(
        "Ranin Ibrahim Hammoud Portfolio loaded successfully."
    );


});