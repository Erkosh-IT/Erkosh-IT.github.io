const userProfile = {
    name: 'Student',
    birthYear: 2006,
    isDeveloper: false,
    hobbies: ['Reading', 'Music']
};

const currentYear = new Date().getFullYear();
const profileForm = document.getElementById('profile-form');
const usernameInput = document.getElementById('username');
const birthYearInput = document.getElementById('birth-year');
const profileMessage = document.getElementById('profile-message');
const hobbyInput = document.getElementById('new-hobby');
const hobbyList = document.getElementById('hobby-list');
const listMessage = document.getElementById('list-message');

birthYearInput.max = currentYear;
usernameInput.value = userProfile.name;
birthYearInput.value = userProfile.birthYear;

function showProfile() {
    const age = currentYear - userProfile.birthYear;

    document.getElementById('profile-name').textContent = userProfile.name;
    document.getElementById('profile-year').textContent = userProfile.birthYear;
    document.getElementById('profile-developer').textContent = userProfile.isDeveloper;
    document.getElementById('profile-hobbies').textContent = userProfile.hobbies.join(', ');
    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('profile-age').textContent = age;
    document.getElementById('hobby-count').textContent = userProfile.hobbies.length;

    console.log('Profile:', userProfile);
    console.log('Age this year:', age);
    console.log('Total hobbies:', userProfile.hobbies.length);
}

for (let i = 0; i < userProfile.hobbies.length; i++) {
    const item = document.createElement('li');
    item.textContent = userProfile.hobbies[i];
    hobbyList.appendChild(item);
}

showProfile();

profileForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = usernameInput.value.trim();

    if (name === '') {
        profileMessage.textContent = 'Please enter a username.';
        profileMessage.style.color = 'red';
        return;
    }

    userProfile.name = name;
    userProfile.birthYear = Number(birthYearInput.value);
    showProfile();
    profileMessage.textContent = 'Profile updated for ' + userProfile.name + '.';
    profileMessage.style.color = 'green';
});

document.getElementById('add-item').addEventListener('click', function () {
    const hobby = hobbyInput.value.trim();

    if (hobby === '') {
        listMessage.textContent = 'Please enter a hobby.';
        listMessage.style.color = 'red';
        return;
    }

    const item = document.createElement('li');
    item.textContent = hobby;
    hobbyList.appendChild(item);
    userProfile.hobbies.push(hobby);
    hobbyInput.value = '';
    showProfile();
    listMessage.textContent = 'Added: ' + hobby;
    listMessage.style.color = 'green';
});

document.getElementById('remove-item').addEventListener('click', function () {
    if (hobbyList.lastElementChild) {
        hobbyList.removeChild(hobbyList.lastElementChild);
        const removedHobby = userProfile.hobbies.pop();
        showProfile();
        listMessage.textContent = 'Removed: ' + removedHobby;
        listMessage.style.color = 'green';
    } else {
        listMessage.textContent = 'There are no hobbies to remove.';
        listMessage.style.color = 'red';
    }
});
