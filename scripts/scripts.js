(function () {
    const token = localStorage.getItem("token");
    const userDetails = localStorage.getItem("username") + localStorage.getItem("password");
    const authenticated = token === userDetails;
    const currentPath = window.location.pathname;
    const allRoutes = ["/salarysense/", "/salarysense/pages/login.html", "/salarysense/pages/signup.html", "/salarysense/pages/home.html"];
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