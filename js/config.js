const WEDDING_CONFIG = {
    couple: {
        groom: {
            name: "Aditya Pratama",
            nickname: "Adit",
            father: "Bapak Pratama",
            mother: "Ibu Pratama",
            instagram: "https://instagram.com",
            instagramUsername: "@adityapratama",
            photo: "assets/images/groom.jpg"
        },
        bride: {
            name: "Alya Maharani",
            nickname: "Alya",
            father: "Bapak Maharani",
            mother: "Ibu Maharani",
            instagram: "https://instagram.com",
            instagramUsername: "@alyamaharani",
            photo: "assets/images/bride.jpg"
        }
    },

    event: {
        akad: {
            date: "12 Desember 2026",
            startTime: "08:00",
            endTime: "10:00",
            venue: "Gedung Pernikahan Harmoni",
            address: "Jl. Melati No. 123, Kota Jakarta",
            mapsUrl: "https://goo.gl/maps/example"
        },
        reception: {
            date: "12 Desember 2026",
            startTime: "11:00",
            endTime: "13:00",
            venue: "Gedung Pernikahan Harmoni",
            address: "Jl. Melati No. 123, Kota Jakarta",
            mapsUrl: "https://goo.gl/maps/example"
        }
    },

    // Format: YYYY-MM-DDTHH:MM:SS
    countdownDate: "2026-12-12T08:00:00",

    story: [
        {
            year: "2019",
            title: "First Meet",
            description: "Kami pertama kali bertemu di sebuah acara seminar kampus di Jakarta."
        },
        {
            year: "2021",
            title: "First Date",
            description: "Menjalani komitmen dan memutuskan untuk saling mengenal lebih dekat."
        },
        {
            year: "2024",
            title: "Engagement",
            description: "Melangkah ke jenjang yang lebih serius dengan melangsungkan pertunangan."
        },
        {
            year: "2026",
            title: "The Wedding",
            description: "Hari bahagia di mana kami menyatukan janji suci pernikahan."
        }
    ],

    gallery: [
        "assets/images/gallery-1.jpg",
        "assets/images/gallery-2.jpg",
        "assets/images/gallery-3.jpg",
        "assets/images/gallery-4.jpg"
    ],

    music: "assets/music/music.mp3",

    gift: {
        bank: "BCA",
        accountNumber: "1234567890",
        accountName: "Aditya Pratama",

        bank2: {
            bank: "Mandiri",
            accountNumber: "0987654321",
            accountName: "Alya Maharani"
        },

        giftAddress: "Jl. Mawar Indah No. 45, RT 02/RW 05, Kebayoran Baru, Jakarta Selatan"
    },

    rsvp: {
        // Kosongkan jika belum memiliki Google Apps Script API endpoint
        apiUrl: ""
    },

    social: {
        groomInstagram: "@adityapratama",
        brideInstagram: "@alyamaharani"
    }
};