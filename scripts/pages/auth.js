const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const currentPath = window.location.pathname;
    const user = JSON.parse(localStorage.getItem("user"));
    const username = this.querySelector("#username");
    const password = this.querySelector("#password");
    const errorMessage = this.querySelector("#error-message");

    errorMessage.innerHTML = "";

    if (!username.value && !password.value) {
        username.focus();
    } else if (!username.value || !password.value) {
        if (!username.value) {
            errorMessage.innerHTML = "<p>Enter a username</p>";
            username.focus();
        } else {
            errorMessage.innerHTML = "<p>Enter a password</p>";
            password.focus();
        }
    } else if (currentPath === "/login.html") {
        if (username.value !== user?.username) {
            errorMessage.innerHTML = "<p>Username don't exist</p>";
            username.value = "";
            password.value = "";
            username.focus();
        } else if (password.value !== user.password) {
            errorMessage.innerHTML = "<p>Incorrect password</p>";
            password.value = "";
            password.focus();
        } else {
            localStorage.setItem("token", username.value + password.value);
            window.location.replace("/home.html");
        }
    } else if (currentPath === "/signup.html") {
        if (username.value === user?.username) {
            errorMessage.innerHTML = "<p>Username already exist</p>";
            username.value = "";
            password.value = "";
            username.focus();
        } else {
            localStorage.setItem("user", JSON.stringify({ username: username.value, password: password.value }));
            localStorage.setItem("token", username.value + password.value);
            window.location.replace("/home.html")
        }
    }

})