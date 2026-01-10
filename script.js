document.addEventListener("DOMContentLoaded", () => {


  const menu = document.querySelector(".menu");
  const sideNav = document.querySelector(".side-nav");
  const overlay = document.querySelector(".overlay");

  if (menu && sideNav && overlay) {
    menu.addEventListener("click", () => {
      sideNav.classList.add("open");
      overlay.classList.add("show");
    });

    overlay.addEventListener("click", () => {
      sideNav.classList.remove("open");
      overlay.classList.remove("show");
    });
  }


  const profile = document.querySelector(".profile");
  const profileModal = document.querySelector(".profile-modal-overlay");
  const closeBtn = document.querySelector(".close-btn");
  const modalBox = document.querySelector(".profile-modal");

  if (profile && profileModal) {
   
    profile.addEventListener("click", (e) => {
      e.stopPropagation();
      profileModal.classList.add("show");
    });

   
    profileModal.addEventListener("click", () => {
      profileModal.classList.remove("show");
    });


    if (modalBox) {
      modalBox.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }

   
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        profileModal.classList.remove("show");
      });
    }
  }

});

