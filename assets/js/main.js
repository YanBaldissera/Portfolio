function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto: ${profileData.email}`
}

function updateCourses(profileData){
    const courses = document.getElementById('profile.skills.courses')
    courses.innerHTML = profileData.skills.courses.map(course => `<li>${course}</li>`).join('')
}

function updateAbility(profileData) {
    const ability = document.getElementById("profile.skills.ability")
    ability.innerHTML = profileData.skills.courses.map(ability => `<li><img src="${ability.logo}" alt="${ability.name}" title="${ability.name}"></li>`).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateCourses(profileData)
    updateAbility(profileData)
})()