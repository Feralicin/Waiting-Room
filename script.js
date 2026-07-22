document.addEventListener("DOMContentLoaded", () => {
    const Target = new Date(Date.UTC(2032, 9, 1, 11, 21, 2))
    const Text = document.querySelector(".time")
    const Sound = new Audio("Tick.ogg")
    Sound.volume = 0.8

    let Old = Text.textContent
    
    function UpdateCountdown() {
        const Now = new Date()
        const Difference = Math.max(0, Math.floor((Target - Now) / 1000))
    
        const Days = Math.floor(Difference / 86400)
        const Hours = Math.floor((Difference % 86400) / 3600)
        const Minutes = Math.floor((Difference % 3600) / 60)
        const Seconds = Difference % 60

        const New = `${Days}:${String(Hours).padStart(2, "0")}:${String(Minutes).padStart(2, "0")}:${String(Seconds).padStart(2, "0")}`
        Text.textContent = New

        if (Old !== New) {
            Sound.currentTime = 0
            Sound.play()
            Old = New
        }
    }
    
    UpdateCountdown()
    setInterval(UpdateCountdown, 50)
})
