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
    ability.innerHTML = profileData.skills.ability.map(ability => `<li><img src="${ability.logo}" alt="${ability.name}" title="${ability.name}"></li>`).join('')
}

function updateLanguages(profileData){
    const idioma = document.getElementById("profile.languages")
    idioma.innerHTML = profileData.languages.map(languages => `<li>${languages} </li>`).join('')
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById("profile.portfolio");
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `<li>
                    <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                    <a href="${project.url}" target="_blank">${project.url}</a>
                </li>`
    }).join('')
}

function updateProfessionalExpirience(profileData){
    const professional = document.getElementById("profile.professionalExperience")
    professional.innerHTML = profileData.professional.map(experience => {
        return `<li>
                    <h3 class="title">${experience.name}</h3>
                    <p class="period">${experience.period}</p>
                    <p>${experience.description}</p>
                </li>` 
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateCourses(profileData)
    updateAbility(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExpirience(profileData)
})()