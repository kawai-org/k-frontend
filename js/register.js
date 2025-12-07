// Import fungsi postJSON
import { postJSON } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js';
import { API_BASE_URL } from './config.js';

document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.querySelector("input[name='name']").value;
            const phone = document.querySelector("input[name='phone']").value;
            const email = document.querySelector("input[name='email']").value;
            const password = document.querySelector("#password").value;

            if (!name || !phone || !email || !password) {
                alert("Mohon isi semua data.");
                return;
            }

            const data = { name, phone, email, password };
            // TODO: Update URL with the actual register endpoint
            const target_url = `${API_BASE_URL}/register`;

            postJSON(
                target_url,
                "Content-Type",
                "application/json",
                data,
                function (response) {
                    if (response.status >= 200 && response.status < 300) {
                        alert("Registrasi berhasil! Silakan login.");
                        window.location.href = "login.html";
                    } else {
                        alert("Gagal registrasi: " + (response.data.message || "Kesalahan tidak diketahui"));
                    }
                }
            );
        });
    }
});
