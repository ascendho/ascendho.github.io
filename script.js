'use strict';

const APIURL = 'https://api.github.com/users/ascendho';
const bio = document.querySelector(".bio");


fetch(APIURL).then(function (response) {
    // console.log(response);
    return response.json();
}).then(function (data) {
    // console.log(data)
    // console.log(data.bio)
    bio.textContent+=data.bio;
})

