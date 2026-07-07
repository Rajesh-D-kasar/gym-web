const year = document.querySelector("[data-year]");
const form = document.querySelector("[data-lead-form]");
const statusMessage = document.querySelector("[data-form-status]");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (form && statusMessage) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const name = String(formData.get("name") || "there").trim();
        statusMessage.textContent = `Thanks ${name}. We will call you soon.`;
        form.reset();
    });
}
