const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    const currentPath = window.location.pathname;
    const username = this.querySelector("#username");
    const password = this.querySelector("#password");
    const errorMessage = this.querySelector("#error-message");

    errorMessage.innerHTML = "";
    username.classList.remove("color-border-error");
    password.classList.remove("color-border-error");

    if (!username.value && !password.value) {
        event.preventDefault();
        username.focus();
    } else if (!username.value || !password.value) {
        event.preventDefault();
        if (!username.value) {
            errorMessage.innerHTML = "<p>Enter a username</p>";
            username.classList.add("color-border-error");
            username.focus();
        } else {
            errorMessage.innerHTML = "<p>Enter a password</p>";
            password.classList.add("color-border-error");
            password.focus();
        }
    } else if (currentPath === "/salarysense/pages/login.html") {
        if (username.value !== localStorage.getItem("username")) {
            event.preventDefault();
            errorMessage.innerHTML = "<p>Username don't exist</p>";
            username.classList.add("color-border-error");
            password.classList.add("color-border-error");
            username.value = "";
            password.value = "";
            username.focus();
        } else if (password.value !== localStorage.getItem("password")) {
            event.preventDefault();
            errorMessage.innerHTML = "<p>Incorrect password</p>";
            password.classList.add("color-border-error");
            password.value = "";
            password.focus();
        } else {
            localStorage.setItem("token", username.value + password.value);
            history.replaceState(null, "", "/salarysense/pages/home.html");
            window.location.reload();
        }
    } else if (currentPath === "/salarysense/pages/signup.html") {
        if (username.value === localStorage.getItem("username")) {
            event.preventDefault();
            errorMessage.innerHTML = "<p>Username already exist</p>";
            username.classList.add("color-border-error");
            password.classList.add("color-border-error");
            username.value = "";
            password.value = "";
            username.focus();
        } else {
            localStorage.setItem("username", username.value);
            localStorage.setItem("password", password.value);
            localStorage.setItem("token", username.value + password.value);
            history.replaceState(null, "", "/salarysense/pages/home.html");
            window.location.reload();
        }
    }

})