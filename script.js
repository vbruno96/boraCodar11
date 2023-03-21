let passwordIsHidden = true

function toggleHiddenPassword() {
  const iconEye = document.getElementById('eye')
  const iconSlashEye = document.getElementById('slashEye')
  const inputPassword = document.getElementById('password')

  if (passwordIsHidden) {
    iconEye.style.display = 'block'
    iconSlashEye.style.display = 'none'
    passwordIsHidden = false
    inputPassword.setAttribute('type', 'text')
  } else {
    iconEye.style.display = 'none'
    iconSlashEye.style.display = 'block'
    passwordIsHidden = true
    inputPassword.setAttribute('type', 'password')
  }
}

function handleLogin(event) {
  event.preventDefault()
  const formDataRaw = new FormData(event.target)
  const formData = Object.fromEntries(formDataRaw)

  alert(`Essa é apenas uma página estática para demonstrar os conhecimentos em html, css e javascript.\nA parte do login não é funcional, mas é possivél visualizar os dados enviados pelo console do navegador!`)
  console.log(formData)
  console.log('Se você chegou até aqui significa que é curioso igual a mim.\nCaso tenha conhecimento de alguma vaga de emprego Dev Frontend Jr entre em contato comigo através do email: vbruno96@gmail.com\nSerei muito grato com sua ajuda :)')
}