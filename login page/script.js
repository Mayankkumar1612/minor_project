const form = document.querySelector("form");
const nextBtn = form.querySelector(".nextBtn");
const backBtn = form.querySelector(".backBtn");
const allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
    const formData = {};

    allInput.forEach(input => {
        formData[input.name] = input.value.trim();
    });

    formData["gender"] = document.querySelector("select[name='gender']").value;
    formData["branch"] = document.querySelector("select[name='branch']").value;
    formData["bloodGroup"] = document.querySelector("select[name='bloodGroup']").value;

    if (Object.values(formData).every(value => value !== "")) {
        form.classList.add("secActive");
    } else {
        form.classList.remove("secActive");
    }
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {};

    allInput.forEach(input => {
        formData[input.name] = input.value.trim();
    });

    try {
        const response = await fetch("http://localhost:4000/personal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            window.open("mantiee_2.html");
            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                console.log(data.message);
            } else {
                console.error("Response is not in JSON format");
            }
        } else {
            console.error("Server responded with an error");
        }
    } catch (error) {
        console.error(error.message);
    }
});
