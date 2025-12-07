export function checkAuth() {
    const token = localStorage.getItem("authToken"); // Or Cookie
    if (!token) {
        window.location.href = "login.html";
    }
}

// Run immediately
checkAuth();
