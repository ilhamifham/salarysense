const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const currentPath = window.location.pathname;
    const user = JSON.parse(localStorage.getItem("user"));
    const username = this.querySelector("#username");
    const password = this.querySelector("#password");
    const errorMessage = this.querySelector("#error-message");

    errorMessage.innerHTML = "";
    username.classList.remove("color-border-error");
    password.classList.remove("color-border-error");

    if (!username.value && !password.value) {
        username.focus();
    } else if (!username.value || !password.value) {
        if (!username.value) {
            errorMessage.innerHTML = "<p>Enter a username</p>";
            username.classList.add("color-border-error");
            username.focus();
        } else {
            errorMessage.innerHTML = "<p>Enter a password</p>";
            password.classList.add("color-border-error");
            password.focus();
        }
    } else if (currentPath === "/pages/login.html") {
        if (username.value !== user?.username) {
            errorMessage.innerHTML = "<p>Username don't exist</p>";
            username.classList.add("color-border-error");
            password.classList.add("color-border-error");
            username.value = "";
            password.value = "";
            username.focus();
        } else if (password.value !== user.password) {
            errorMessage.innerHTML = "<p>Incorrect password</p>";
            password.classList.add("color-border-error");
            password.value = "";
            password.focus();
        } else {
            localStorage.setItem("token", username.value + password.value);
            window.location.replace("/pages/home.html");
        }
    } else if (currentPath === "/pages/signup.html") {
        if (username.value === user?.username) {
            errorMessage.innerHTML = "<p>Username already exist</p>";
            username.classList.add("color-border-error");
            password.classList.add("color-border-error");
            username.value = "";
            password.value = "";
            username.focus();
        } else {
            localStorage.setItem("user", JSON.stringify({ username: username.value, password: password.value }));
            localStorage.setItem("token", username.value + password.value);
            window.location.replace("/pages/home.html")
        }
    }

})