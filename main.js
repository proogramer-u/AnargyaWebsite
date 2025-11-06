const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("nav__links--open");
  });

  navLinks.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target.closest("a") : null;
    if (target) {
      navLinks.classList.remove("nav__links--open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Modal helpers
function openModal(modal) {
  if (!modal) return;
  modal.setAttribute("aria-hidden", "false");
  const focusable = modal.querySelector("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
  if (focusable) {
    focusable.focus();
  }
}

function closeModal(modal) {
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
}

const contactTrigger = document.getElementById("open-contact");
const sponsorTrigger = document.getElementById("open-sponsorship");
const contactModal = document.getElementById("contact-modal");
const sponsorModal = document.getElementById("sponsorship-modal");

if (contactTrigger && contactModal) {
  contactTrigger.addEventListener("click", () => openModal(contactModal));
}

if (sponsorTrigger && sponsorModal) {
  sponsorTrigger.addEventListener("click", () => openModal(sponsorModal));
}

document.addEventListener("click", (e) => {
  const target = e.target;
  if (!(target instanceof Element)) return;
  if (target.hasAttribute("data-close-modal")) {
    const modal = target.closest(".modal");
    closeModal(modal);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    [contactModal, sponsorModal].forEach(closeModal);
  }
});

// Basic demo submit (replace with real handling/mailto if desired)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const phoneInput = document.getElementById("contact-phone");

    const submission = {
      name: nameInput && "value" in nameInput ? nameInput.value.trim() : "",
      email: emailInput && "value" in emailInput ? emailInput.value.trim() : "",
      phone: phoneInput && "value" in phoneInput ? phoneInput.value.trim() : "",
      submittedAt: new Date().toISOString(),
    };

    try {
      const key = "Contact Form Submissions";
      const existingRaw = localStorage.getItem(key);
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      existing.push(submission);
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (err) {
      console.error("Failed to save submission to localStorage", err);
    }

    alert("Thanks! We'll get back to you soon.");
    closeModal(contactModal);
    contactForm.reset();
  });
}
