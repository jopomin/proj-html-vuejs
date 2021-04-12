var app = new Vue ({
    el: '#root',
    data: {
        logo: "img/dark-logo.png",
        headLinks: [
            "Home",
            "Pages",
            "Courses",
            "Features",
            "Blog",
            "Shop"
        ],
        socialIcons: [
            "fab fa-facebook-f",
            "fab fa-twitter",
            "fab fa-instagram",
            "fab fa-linkedin"
        ],
        countdownBtn: "Get Ticket",
        timer: {
            icon: "far fa-clock",
            d: "00",
            h: "00",
            m: "00",
            s: "00"
        }
    }
})

