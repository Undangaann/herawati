const WEDDING_CONFIG = {
    couple: {
        groom: {
            name: "Andi Agung Pratama Putra",
            nickname: "Adit",
            father: "Bapak Andi Muhtar",
            mother: "Ibu Jamila",
            instagram: "https://instagram.com",
            instagramUsername: "@adityapratama",
            photo: "assets/images/groom.jpg"
        },
        bride: {
            name: "Herawati Haeruddin",
            nickname: "Hera",
            father: "Bapak H. Haeruddin",
            mother: "Ibu Hj. Indah",
            instagram: "https://instagram.com",
            instagramUsername: "@heiirawt_",
            photo: "assets/images/bride.jpg"
        }
    },

    event: {
        akad: {
            date: "24 September 2026",
            startTime: "11:00",
            endTime: "12:00",
            venue: "Rumah Keluarga Herawati",
            address: "Jl. Bone 10 Blok J no 310",
            mapsUrl: "https://goo.gl/maps/example"
        },
        reception: {
            date: "24 September 2026",
            startTime: "12:00",
            endTime: "17:00",
            venue: "Rumah Keluarga Herawati",
            address: "Jl. Bone 10 Blok J no 310",
            mapsUrl: "https://goo.gl/maps/example"
        }
    },

    // Format: YYYY-MM-DDTHH:MM:SS
    countdownDate: "2026-09-24T11:00:00",

    story: [
        {
            year: "2025",
            title: "First Meet",
            description: "Tidak ada yang kebetulan di dunia ini, semua sudah tersusun dengan rapi oleh sang maha kuasa, kita tidak bisa memilih kepada siapa kita akan jatuh cinta. Kami bertemu pertama kalinya tanpa sengaja pada tanggal 14 Juni 2025"
        },
        {
            year: "2025",
            title: "First Date",
            description: "Katanya cinta dapat tumbuh dengan kebersamaan, seiring berjalannya waktu kami semakin dekat, memang tidak ada kata pacaran tapi tuhan mentakdirkan kita untuk bersama."
        },
        {
            year: "2026",
            title: "Engagement",
            description: "Kehendaknya menuntun kami pada sebuah pertemuan yang tak pernah disangka hingga akhirnya pada tanggal 13 September 2026 membawa kami pada sebuah ikatan yang di Ridhoi-nya"
        },
        {
            year: "2026",
            title: "The Wedding",
            description: "ukan karena bertemu lalu berjodoh, tapi karna berjodohlah kami bisa bertemu kami memutuskan untuk mengikrarkan janji suci pernikahan pada 24 September 2026.
Sebagaimana yang pernah dikatakan oleh ali bin abi Thalib : apa yang menjadi takdirmu akan menemukan jalannya untuk menemukanmu."
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
        accountNumber: "7991205920",
        accountName: "Herawati Haeruddin",

        bank2: {
            bank: "BRI",
            accountNumber: "3818 0102 3768 536",
            accountName: "Andi agung pratama putra"
        },

        giftAddress: "Jl Bone 10 Blok j no 310"
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
