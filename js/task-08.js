const loginForm = document.querySelector(".login-form");

const hendleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Все поля должны быть заполнены!");
    }

    const submitValue = {
        email: email.value,
        password: password.value,
    };

    console.log(submitValue);
    event.currentTarget.reset();
};

loginForm.addEventListener("submit", hendleSubmit);


