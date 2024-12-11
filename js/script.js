const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")
//Eventos
function geradorQrCode() {
    const qrCodeInputValue = qrCodeInput.value
    if (!qrCodeInputValue) return
    qrCodeBtn.innerHTML = "Gerando código..."
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("ativo")
        qrCodeBtn.innerHTML = "QR Code criado"
    })

}
qrCodeBtn.addEventListener("click", () => {
    geradorQrCode()
})
qrCodeInput.addEventListener("keydown", () =>{
    if(e.code === "Enter")
        geradorQrCode()
})
qrCodeInput.addEventListener("keyup", () =>{
    if(!qrCodeInput.value){
        container.classList.remove("ativo")
        qrCodeBtn.innerHTML = "Gerar Qrcode"
    }
})
