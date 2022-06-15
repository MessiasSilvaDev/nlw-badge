const linksSocialMedia = {
  github: 'messiassilvadev',
  youtube: 'UCKzDYFyMSgqfpRbAsoF4sxw',
  facebook: '',
  instagram: '',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    if (social === 'youtube') {
      li.children[0].href = `https://${social}.com/channel/${linksSocialMedia[social]}`
    } else {
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
