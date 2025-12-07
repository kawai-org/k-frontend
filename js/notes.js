// Logic for Notes Page
import { postJSON } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js';

document.addEventListener("DOMContentLoaded", () => {
    const saveBtn = document.getElementById("save-note-btn");
    const notesList = document.getElementById("notes-list");
    const token = localStorage.getItem("authToken");

    // Load Notes
    loadNotes();

    saveBtn.addEventListener("click", () => {
        const title = document.getElementById("note-title").value;
        const content = document.getElementById("note-content").value;

        if (!title || !content) return alert("Please fill details");

        // Placeholder for API Call
        console.log("Saving note:", { title, content });
        alert("Note saved (Local Simulation)");
        // Reload list
    });

    function loadNotes() {
        // Placeholder data
        notesList.innerHTML = `
            <div style="background:white; padding:20px; border-radius:12px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); border-left: 4px solid #4f46e5;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <div>
                        <h4 style="margin:0; font-size:1.1rem; color:#1f2937;">Meeting Reminder</h4>
                        <p style="margin:5px 0 0; color:#6b7280; font-size:0.95rem;">Discuss project timeline with the team.</p>
                    </div>
                    <button style="background:none; border:none; color:#ef4444; cursor:pointer;" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }
});
