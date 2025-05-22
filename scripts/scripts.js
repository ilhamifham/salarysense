(function () {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const authenticated = token === user?.username + user.password;
    const currentPath = window.location.pathname;
    const allRoutes = ["/", "/login.html", "/signup.html", "/home.html"];
    const publicRoutes = allRoutes.slice(0, 3);
    const privateRoute = allRoutes[3];

    if (allRoutes.includes(currentPath)) {
        if (authenticated && publicRoutes.includes(currentPath)) {
            window.location.replace(privateRoute);
        } else if (!authenticated && currentPath === privateRoute) {
            window.location.replace(allRoutes[0]);
        }
    }
})();