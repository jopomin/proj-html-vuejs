var app = new Vue ({
    el: '#root',
    data: {
        logos: [
            {
                size: ["xs", "sm", "md", "lg"],
                title: "MaxCoach",
                path: "img/",
                name: "dark-logo",
                ext: ".png"
            }
        ],

        
        headLinks: [
            {
                title: "Home",
                url: "#"
            },
            {
                title: "Pages",
                url: "#"
            },
            {
                title: "Courses",
                url: "#"
            },
            {
                title: "Features",
                url: "#"
            },
            {
                title: "Blog",
                url: "#"
            },
            {
                title: "Shop",
                link: "#"
            }
        ],
        socialIcons: [
            {
                family: "fab",
                prefix: "fa-",
                name: "facebook",
                suffix: "-f",
                url: "#"
            },
            {
                family: "fab",
                prefix: "fa-",
                name: "twitter",
                suffix: "",
                url: "#"
            },
            {
                family: "fab",
                prefix: "fa-",
                name: "instagram",
                suffix: "",
                url: "#"
            },
            {
                family: "fab",
                prefix: "fa-",
                name: "linkedin",
                suffix: "",
                url: "#"
            },
        ],
        countdownBtn: "Get Ticket",
        timer: {
            icon: {
                family: "far",
                prefix: "fa-",
                name: "clock",
                suffix: "",
                url: "#",
            },
            d: "00",
            h: "00",
            m: "00",
            s: "00"
        },
        address: [
            {
                header: "Address",
                url: "#",
                street: "382 NE 191st",
                streetNum: 87394,
                city: "Miami",
                state: "FL",
                zip1: 33179,
                zip2: 3899,
                intPref: 1,
                phoneNum: "(305) 547-9909",
                opTime: "9am",
                clTime: "5pm",
                timeZone: "EST",
                opDay: "Monday",
                clDay: "Friday",
                email: "support@maxcoach.com",
            }
        ],
        explore: [
            {
                header: "Explore",
                url: "#",
                chLinks: [
                    {
                        header: "Start Here",
                        url: "#",
                    },
                    {
                        header: "Success Story",
                        url: "#",
                    },
                    {
                        header: "Blog",
                        url: "#",
                    },
                    {
                        header: "Courses",
                        url: "#",
                    },
                    {
                        header: "Contact us",
                        url: "#",
                    },
                ]
            }
        ],
        information: [
            {
                header: "Information",
                url: "#",
                chLinks: [
                    {
                        header: "Membership",
                        url: "#",
                    },
                    {
                        header: "Purchase Guide",
                        url: "#",
                    },
                    {
                        header: "Privacy Policy",
                        url: "#",
                    },
                    {
                        header: "Terms of services",
                        url: "#",
                    },
                ]
            }
        ],
    }
})

