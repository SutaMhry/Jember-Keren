document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  document.getElementById("search-btn").addEventListener("click", function () {
    // Tampilkan modal pencarian
    var modal = document.getElementById("search-modal");
    modal.style.display = "block";
  });

  document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman
    const query = document.getElementById("search-query").value.toLowerCase();

    // Daftar file HTML yang akan dicari
    const items = {
      jfc: "carousel/jfc.html",
      papuma: "carousel/papuma.html",
      suwar: "carousel/suwar.html",
      lahbako: "carousel/lahbako.html",
      batik: "carousel/batik.html",
      "jember fashion carnaval": "carousel/jfc.html",
      "pantai papuma": "carousel/papuma.html",
      "suwar suwir": "carousel/suwar.html",
      "tari lahbako": "carousel/lahbako.html",
      "batik jember": "carousel/batik.html",
    };

    // Cek apakah query sesuai dengan salah satu kunci di items
    if (items[query]) {
      // Jika cocok, arahkan ke halaman yang sesuai
      window.location.href = items[query];
    } else {
      // Jika tidak ditemukan, tampilkan pesan atau arahkan ke halaman default
      alert("Page not found");
    }
  });

  // Timeline
  const timelineItems = document.querySelectorAll(".timeline-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const content = entry.target.querySelector(".timeline-content");
        const dot = entry.target.querySelector(".timeline-dot");
        const date = entry.target.querySelector(".timeline-date");

        if (entry.isIntersecting) {
          content.classList.add("highlight");
          dot.style.backgroundColor = "rgba(234, 160, 35, 1)";
          date.style.color = "rgba(234, 160, 35, 1)";
          entry.target.querySelector("h3").style.color = "#ffffff";
          entry.target.querySelector("p").style.color = "#c8c8c8";
        } else {
          content.classList.remove("highlight");
          dot.style.backgroundColor = "rgba(234, 160, 35, 0.5)";
          date.style.color = "rgba(234, 160, 35, 0.5)";
          entry.target.querySelector("h3").style.color = "rgba(255, 255, 255, 0.5)";
          entry.target.querySelector("p").style.color = "rgba(200, 200, 200, 0.5)";
        }
      });
    },
    { threshold: 0.5 }
  );

  timelineItems.forEach((item) => {
    observer.observe(item);
  });

  // Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

