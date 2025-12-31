document.addEventListener("DOMContentLoaded", () => {

  // ===== SIDE NAVIGATION =====
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

  // ===== PROFILE MODAL =====
  const profile = document.querySelector(".profile");
  const profileModal = document.querySelector(".profile-modal-overlay");
  const closeBtn = document.querySelector(".close-btn");
  const modalBox = document.querySelector(".profile-modal");

  if (profile && profileModal) {
    // Open modal
    profile.addEventListener("click", (e) => {
      e.stopPropagation();
      profileModal.classList.add("show");
    });

    // Close when clicking outside
    profileModal.addEventListener("click", () => {
      profileModal.classList.remove("show");
    });

    // Prevent close when clicking inside modal box
    if (modalBox) {
      modalBox.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }

    // Close when clicking ❌
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        profileModal.classList.remove("show");
      });
    }
  }

});
