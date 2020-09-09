const button = document.querySelector('button');
const audioElement = document.querySelector('audio');

// Toggling Button
const toggleButton = () => button.disabled = !button.disabled;

// Text to Speech function
const jokeTeller = (joke) => {
    VoiceRSS.speech({
        key: '<API KEY>',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}
    
// Get Joke from https://sv443.net/jokeapi/v2/ (Jokes API)
const getJokes = async () => {
    
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        jokeTeller(data.joke);
        toggleButton();
        
    }catch (e) {
        console.log ('Something went wrong!', e);
    }
};


button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);

