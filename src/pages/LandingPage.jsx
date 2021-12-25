import React from "react";

function LandingPage() {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter your URL" />
        </form>
    );
}

export default LandingPage;

const onSubmit = (event) => {
    event.preventDefault();
    const userUrl = encodeURIComponent(event.target[0].value);
    const ACCESS_URL = `https://accounts.spotify.com/authorize?client_id=877a984bdbc048cd812e6243c78f116c&response_type=token&redirect_uri=http://localhost:3000/spotify&state=${userUrl}&scope=user-read-email user-read-private user-read-recently-played user-read-playback-state user-top-read user-read-currently-playing user-follow-read user-read-playback-position playlist-read-private user-library-read playlist-read-collaborative`;
    window.location.href = ACCESS_URL;

};  