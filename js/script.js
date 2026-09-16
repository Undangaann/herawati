document.addEventListener("DOMContentLoaded", () => {
    // 1. Inisialisasi Data dari Config
    initConfiguration();

    // 2. Personalisasi Nama Tamu dari URL Parameter (?to=...)
    initGuestName();

    // 3. Tombol Buka Undangan & Musik
    initCoverAndMusic();

    // 4. Countdown Timer
    initCountdown();

    // 5. Render Love Story Timeline
    initLoveStory();

    // 6. Render Gallery & Lightbox
    initGallery();

    // 7. RSVP Handler
    initRSVP();

    // 8. Copy Rekening Handler
    initCopyGift();

    // 9. Scroll Animation (Intersection Observer)
    initScrollAnimations();
});

// --- Inisialisasi Konfigurasi ---
function initConfiguration() {
    // Couple Names
    document.querySelectorAll(".groom-name").forEach(el => el.textContent = WEDDING_CONFIG.couple.groom.nickname);
    document.querySelectorAll(".bride-name").forEach(el => el.textContent = WEDDING_CONFIG.couple.bride.nickname);
    
    document.querySelector(".groom-full-name").textContent = WEDDING_CONFIG.couple.groom.name;
    document.querySelector(".bride-full-name").textContent = WEDDING_CONFIG.couple.bride.name;

    document.querySelectorAll(".parent-info")[0].innerHTML = `Putra dari<br>${WEDDING_CONFIG.couple.groom.father} & ${WEDDING_CONFIG.couple.groom.mother}`;
    document.querySelectorAll(".parent-info")[1].innerHTML = `Putri dari<br>${WEDDING_CONFIG.couple.bride.father} & ${WEDDING_CONFIG.couple.bride.mother}`;

    document.getElementById("groom-ig").href = WEDDING_CONFIG.couple.groom.instagram;
    document.getElementById("groom-ig").innerHTML = `<i class="fa-brands fa-instagram"></i> ${WEDDING_CONFIG.couple.groom.instagramUsername}`;
    
    document.getElementById("bride-ig").href = WEDDING_CONFIG.couple.bride.instagram;
    document.getElementById("bride-ig").innerHTML = `<i class="fa-brands fa-instagram"></i> ${WEDDING_CONFIG.couple.bride.instagramUsername}`;

    // Photos
    document.querySelector(".cover-bg").style.backgroundImage = `url('${WEDDING_CONFIG.couple.groom.photo}')`; // atau cover foto
    document.querySelectorAll(".closing-photo img")[0].src = WEDDING_CONFIG.couple.groom.photo;

    // Event Akad & Resepsi
    document.getElementById("akad-date").textContent = WEDDING_CONFIG.event.akad.date;
    document.getElementById("akad-time").textContent = `${WEDDING_CONFIG.event.akad.startTime} - ${WEDDING_CONFIG.event.akad.endTime} WIB`;
    document.getElementById("akad-venue").textContent = WEDDING_CONFIG.event.akad.venue;
    document.getElementById("akad-address").textContent = WEDDING_CONFIG.event.akad.address;
    document.getElementById("akad-maps").href = WEDDING_CONFIG.event.akad.mapsUrl;

    document.getElementById("reception-date").textContent = WEDDING_CONFIG.event.reception.date;
    document.getElementById("reception-time").textContent = `${WEDDING_CONFIG.event.reception.startTime} - ${WEDDING_CONFIG.event.reception.endTime} WIB`;
    document.getElementById("reception-venue").textContent = WEDDING_CONFIG.event.reception.venue;
    document.getElementById("reception-address").textContent = WEDDING_CONFIG.event.reception.address;
    document.getElementById("reception-maps").href = WEDDING_CONFIG.event.reception.mapsUrl;

    // Location Maps Embed
    document.getElementById("main-maps-btn").href = WEDDING_CONFIG.event.reception.mapsUrl;
    document.getElementById("map-iframe").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.81956135045434!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43f988cad1f%3A0x6b2e3f890731df46!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid";

    // Gift
    document.getElementById("gift-bank").textContent = WEDDING_CONFIG.gift.bank;
    document.getElementById("gift-account").textContent = WEDDING_CONFIG.gift.accountNumber;
    document.getElementById("gift-account-name").textContent = `A.n ${WEDDING_CONFIG.gift.accountName}`;
    document.querySelectorAll(".copy-btn")[0].setAttribute("data-clipboard", WEDDING_CONFIG.gift.accountNumber);

    if (WEDDING_CONFIG.gift.bank2) {
        document.getElementById("gift-bank-2").textContent = WEDDING_CONFIG.gift.bank2.bank;
        document.getElementById("gift-account-2").textContent = WEDDING_CONFIG.gift.bank2.accountNumber;
        document.getElementById("gift-account-name-2").textContent = `A.n ${WEDDING_CONFIG.gift.bank2.accountName}`;
        document.querySelectorAll(".copy-btn")[1].setAttribute("data-clipboard", WEDDING_CONFIG.gift.bank2.accountNumber);
    } else {
        document.getElementById("bank-2-wrapper").style.display = "none";
    }

    document.getElementById("gift-address").textContent = WEDDING_CONFIG.gift.giftAddress;

    // Render Sample Wishes
    renderSampleWishes();
}

// --- Personalisasi Nama Tamu ---
function initGuestName() {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get("to");
    const guestNameEl = document.getElementById("guest-name");

    if (guestParam) {
        guestNameEl.textContent = decodeURIComponent(guestParam);
    } else {
        guestNameEl.textContent = "Bapak/Ibu/Saudara/i";
    }
}

// --- Cover & Music Handler ---
function initCoverAndMusic() {
    const coverSection = document.getElementById("cover");
    const mainContent = document.getElementById("main-content");
    const openBtn = document.getElementById("open-invitation-btn");
    const bgMusic = document.getElementById("bg-music");
    const musicToggleBtn = document.getElementById("music-toggle-btn");

    let isPlaying = false;

    openBtn.addEventListener("click", () => {
        coverSection.style.opacity = "0";
        coverSection.style.visibility = "hidden";
        mainContent.classList.remove("hidden");

        // Play Music
        bgMusic.play().then(() => {
            isPlaying = true;
            musicToggleBtn.classList.add("playing");
        }).catch(err => {
            console.log("Autoplay blocked or failed: ", err);
        });

        // Smooth scroll to top of main
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    musicToggleBtn.addEventListener("click", () => {
        if (isPlaying) {
            bgMusic.pause();
            isPlaying = false;
            musicToggleBtn.classList.remove("playing");
            musicToggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        } else {
            bgMusic.play();
            isPlaying = true;
            musicToggleBtn.classList.add("playing");
            musicToggleBtn.innerHTML = '<i class="fa-solid fa-compact-disc"></i>';
        }
    });
}

// --- Countdown Timer ---
function initCountdown() {
    const countDownDate = new Date(WEDDING_CONFIG.countdownDate).getTime();

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// --- Love Story Timeline ---
function initLoveStory() {
    const container = document.getElementById("timeline-container");
    const storyData = WEDDING_CONFIG.story;

    if (!storyData || storyData.length === 0) {
        document.getElementById("story").style.display = "none";
        return;
    }

    container.innerHTML = storyData.map(item => `
        <div class="timeline-item fade-up">
            <span class="timeline-year">${item.year}</span>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-desc">${item.description}</p>
        </div>
    `).join('');
}

// --- Gallery & Lightbox ---
function initGallery() {
    const grid = document.getElementById("gallery-grid");
    const galleryData = WEDDING_CONFIG.gallery;

    grid.innerHTML = galleryData.map((img, index) => `
        <div class="gallery-item" data-index="${index}">
            <img src="${img}" alt="Gallery Photo ${index + 1}" loading="lazy">
        </div>
    `).join('');

    // Lightbox Logic
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");
    let currentIndex = 0;

    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", () => {
            currentIndex = parseInt(item.getAttribute("data-index"));
            openLightbox(currentIndex);
        });
    });

    function openLightbox(index) {
        lightboxImg.src = galleryData[index];
        lightbox.classList.add("active");
    }

    closeBtn.addEventListener("click", () => lightbox.classList.remove("active"));
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.classList.remove("active");
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
        lightboxImg.src = galleryData[currentIndex];
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % galleryData.length;
        lightboxImg.src = galleryData[currentIndex];
    });
}

// --- RSVP Handler ---
function initRSVP() {
    const form = document.getElementById("rsvp-form");
    const statusEl = document.getElementById("rsvp-status");
    const submitBtn = document.getElementById("rsvp-submit-btn");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const apiUrl = WEDDING_CONFIG.rsvp.apiUrl;

        if (!apiUrl || apiUrl.trim() === "") {
            statusEl.style.color = "#d9534f";
            statusEl.textContent = "RSVP online belum diaktifkan (Endpoint API kosong).";
            return;
        }

        const formData = {
            name: document.getElementById("rsvp-name").value,
            phone: document.getElementById("rsvp-phone").value,
            count: document.getElementById("rsvp-count").value,
            attendance: document.getElementById("rsvp-attendance").value,
            message: document.getElementById("rsvp-message").value
        };

        submitBtn.disabled = true;
        submitBtn.textContent = "Mengirim...";
        statusEl.textContent = "";

        fetch(apiUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(() => {
            statusEl.style.color = "green";
            statusEl.textContent = "Terima kasih atas konfirmasi kehadiran Anda.";
            form.reset();
        })
        .catch(error => {
            statusEl.style.color = "#d9534f";
            statusEl.textContent = "Terjadi kesalahan. Silakan coba lagi.";
            console.error("Error:", error);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = "Kirim Konfirmasi";
        });
    });
}

// --- Wishes Sample & Render ---
function renderSampleWishes() {
    const container = document.getElementById("wishes-container");
    const sampleWishes = [
        { name: "Budi Santoso", date: "10 Des 2026", message: "Selamat menempuh hidup baru, Adit & Alya! Semoga menjadi keluarga sakinah, mawaddah, warahmah." },
        { name: "Siti Rahma", date: "11 Des 2026", message: "Barakallah fii kum! Bahagia selalu hingga akhir masa." }
    ];

    container.innerHTML = sampleWishes.map(wish => `
        <div class="wish-card">
            <div class="wish-header">
                <span class="wish-name">${wish.name}</span>
                <span class="wish-date">${wish.date}</span>
            </div>
            <p class="wish-text">${wish.message}</p>
        </div>
    `).join('');
}

// --- Copy Gift Handler ---
function initCopyGift() {
    const copyBtns = document.querySelectorAll(".copy-btn");
    const toast = document.getElementById("toast");

    copyBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const textToCopy = btn.getAttribute("data-clipboard");
            navigator.clipboard.writeText(textToCopy).then(() => {
                toast.classList.add("show");
                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2500);
            }).catch(err => {
                console.error("Gagal menyalin teks: ", err);
            });
        });
    });
}

// --- Intersection Observer untuk Animasi Fade Up ---
function initScrollAnimations() {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}