// RK BRO CREATIVE website interactions.
// IMPORTANT: Set this to a parent/guardian-managed business email before publishing.
const CONTACT_EMAIL = "ADD_PARENT_MANAGED_EMAIL_HERE";

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;
    document.querySelectorAll(".wall-card").forEach(card => {
      card.hidden = selected !== "all" && card.dataset.category !== selected;
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const message = document.getElementById("formMessage");
  if (!CONTACT_EMAIL || CONTACT_EMAIL === "ADD_PARENT_MANAGED_EMAIL_HERE") {
    message.textContent = "Website demo only: ask a parent or guardian to add a managed contact email in script.js before publishing.";
    return;
  }
  const name = document.getElementById("customerName").value.trim();
  const type = document.getElementById("projectType").value;
  const details = document.getElementById("projectDetails").value.trim();
  const subject = encodeURIComponent("RK BRO CREATIVE enquiry: " + type);
  const body = encodeURIComponent("Name: " + name + "\nService: " + type + "\n\nProject details:\n" + details);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
