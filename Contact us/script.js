// Menu Bar
const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

function kirim(event) {
  const nama = document.querySelector("#nama").value;
  const email = document.querySelector("#email").value;
  const jeniskeluhan = document.querySelector("#jeniskeluhan").value;
  const deskripsi = document.querySelector("#deskripsi").value;

  fetch(
    "https://be-jayapura-18-production.up.railway.app/list-kritik-dan-saran",
    {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        nama: nama,
        email: email,
        jenisKeluhan: jeniskeluhan,
        deskripsi: deskripsi,
      }),
    }
  )
    .then((Response) => Response.json())
    .then((Response) => {
      alert("Pesan Anda Telah Terkirim");
    })
    .catch((Error) => {
      console.error(Error);
    });
}
