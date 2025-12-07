// Logic for Chat History
// Read-only view
document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("chat-list");

    loadHistory();

    function loadHistory() {
        // Mock data
        list.innerHTML = `
            <div style="background:white; padding:20px; border-radius:12px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                <div style="display:flex; flex-direction:column; gap:10px;">
                    <!-- User Message -->
                    <div style="align-self:flex-end; background-color:#e0e7ff; color:#3730a3; padding:10px 15px; border-radius:12px 12px 0 12px; max-width:80%;">
                        <strong>You:</strong> Simpan catatan belanja
                    </div>
                    <!-- Bot Message -->
                    <div style="align-self:flex-start; background-color:#f3f4f6; color:#1f2937; padding:10px 15px; border-radius:12px 12px 12px 0; max-width:80%;">
                        <strong>Kawai:</strong> Berhasil menyimpan catatan 'belanja'!
                    </div>
                </div>
                <small style="display:block; margin-top:10px; color:#9ca3af; text-align:right;">Yesterday, 14:00</small>
            </div>

            <div style="background:white; padding:20px; border-radius:12px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                 <div style="display:flex; flex-direction:column; gap:10px;">
                    <!-- User Message -->
                    <div style="align-self:flex-end; background-color:#e0e7ff; color:#3730a3; padding:10px 15px; border-radius:12px 12px 0 12px; max-width:80%;">
                        <strong>You:</strong> Ingatkan meeting jam 3
                    </div>
                    <!-- Bot Message -->
                    <div style="align-self:flex-start; background-color:#f3f4f6; color:#1f2937; padding:10px 15px; border-radius:12px 12px 12px 0; max-width:80%;">
                        <strong>Kawai:</strong> Reminder set for 3 PM.
                    </div>
                </div>
                <small style="display:block; margin-top:10px; color:#9ca3af; text-align:right;">Yesterday, 09:00</small>
            </div>
        `;
    }
});