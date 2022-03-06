//Unsplash API

const count = 10;
const apiKey = 'sVRspmvYzb1DHKBBSR5iOG36eGq6mLa2ZX3Sp52a5DE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        //Catch error here
    }
}

// On load

getPhotos();

// Notes:
// To look for the content to pull & display - go to console view - select network - Ctrl+R - client - preview and open up the links