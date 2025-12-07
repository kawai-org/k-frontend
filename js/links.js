// Logic for Links Page
import { postJSON } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js';

document.addEventListener("DOMContentLoaded", () => {
    const saveBtn = document.getElementById("save-link-btn");
    const linksList = document.getElementById("links-list");

    loadLinks();

    saveBtn.addEventListener("click", () => {
        const title = document.getElementById("link-title").value;
        const url = document.getElementById("link-url").value;

        if (!title || !url) return alert("Please fill details");

        // Placeholder
        alert("Link saved (Simulation): " + url);
    });

    function loadLinks() {
        linksList.innerHTML = `
            <div style="background:white; padding:20px; border-radius:12px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); border-left: 4px solid #ec4899; display:flex; justify-content:space-between; align-items:center;">
                <div style="flex:1;">
                    <h4 style="margin:0; font-size:1.1rem; color:#1f2937;">Google Search</h4>
                    <a href="https://google.com" target="_blank" style="color:#4f46e5; text-decoration:none; font-size:0.9rem; margin-top:5px; display:inline-block;">https://google.com</a>
                </div>
                <div>
                     <button style="background:none; border:none; color:#6b7280; cursor:pointer; margin-right:10px;" title="Copy">
                        <i class="fas fa-copy"></i>
                    </button>
                     <button style="background:none; border:none; color:#ef4444; cursor:pointer;" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }
});