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