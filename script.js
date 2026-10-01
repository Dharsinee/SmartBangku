let seconds = 0;
let timer;
let reminderTimer;
let userPhone = "";


// ==============================
// MULA SESI
// ==============================

function startSession() {

    userPhone = document.getElementById("phoneNumber").value;

    if (userPhone === "") {
        alert("Sila masukkan nombor telefon anda 📱");
        return;
    }

    document.querySelector(".card").innerHTML = `

        <div class="active-status">
            🟢 SESI AKTIF
        </div>

        <h2>SmartBangku 🪑</h2>

        <div class="phone-display">
            📱 ${userPhone}
        </div>

        <div class="timer-box">

            <div class="timer-label">
                MASA ANDA DI BANGKU
            </div>

            <div id="timer" class="timer">
                00:00
            </div>

        </div>

        <div class="belongings">
            📦 Barang anda sedang disimpan dengan selamat.
        </div>

        <p>
            🔔 Anda akan menerima peringatan
            secara berkala untuk mengambil barang.
        </p>

        <button
            class="stay-button"
            onclick="stillSitting()">

            🪑 MASIH DUDUK

        </button>

        <button
            class="take-button"
            onclick="takeItems()">

            ✅ SUDAH AMBIL BARANG

        </button>
    `;

    startTimer();
}


// ==============================
// TIMER
// ==============================

function startTimer() {

    seconds = 0;

    timer = setInterval(function() {

        seconds++;

        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;

        minutes = String(minutes).padStart(2, "0");
        remainingSeconds = String(remainingSeconds).padStart(2, "0");

        document.getElementById("timer").innerText =
            minutes + ":" + remainingSeconds;

    }, 1000);


    // TEST REMINDER: 10 SAAT

    reminderTimer = setInterval(function() {

        alert(
            "🔔 PERINGATAN SMARTBANGKU\n\n" +
            "Jangan lupa ambil barang anda! 📦"
        );

    }, 30000);
}


// ==============================
// MASIH DUDUK
// ==============================

function stillSitting() {

    alert(
        "🪑 Baik!\n\n" +
        "Sesi anda masih aktif.\n" +
        "Reminder akan diteruskan."
    );

}


// ==============================
// SUDAH AMBIL BARANG
// ==============================

function takeItems() {

    clearInterval(timer);
    clearInterval(reminderTimer);

    document.querySelector(".card").innerHTML = `

        <div style="
            font-size: 60px;
            margin-bottom: 15px;
        ">
            🎉
        </div>

        <h2>TERIMA KASIH!</h2>

        <p>
            Barang anda telah diambil dengan selamat. 📦
        </p>

        <div class="belongings">
            ✅ Sesi SmartBangku telah tamat.
        </div>

        <button onclick="location.reload()">
            🪑 MULA SESI BAHARU
        </button>

    `;
}