import React from "react";
import queryString from "query-string";

const SpotifyWebApi = require('spotify-web-api-node');

// TODO: FIX THIS SHIT
const spotify = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT,
    clientSecret: process.env.SPOTIFY_SECRET,
    redirectUri: process.env.REDIRECT_URI
});

const defaultAlbum = {
    album_type: "album",
    artists: [],
    available_markets: [],
    copyrights: [],
    external_ids: {},
    external_urls: {},
    genres: [],
    href: "",
    id: "",
    images: [],
    label: "",
    name: "",
    popularity: 0,
    release_date: "1971-01-01",
    release_date_precision: "",
    total_tracks: -1,
    tracks: {},
    type: "album",
    uri: ""
};

function SpotifyRedirectPage() {
    const [album, setAlbum] = React.useState(defaultAlbum);
    React.useEffect(() => {
        const func = async () => {
            const urlData = queryString.parse(window.location.hash);
            spotify.setAccessToken(urlData.access_token);

            const albumUrl = urlData.state.replace("https://open.spotify.com/albums/", "");
    
            const result = await spotify.getAlbum('5U4W9E5WsYb2jUQWePT8Xm');
            setAlbum(result.body);
        }

        func();
    }, []);

    Object.keys(album).forEach((key) => console.log(key, album[key]));

    return (
        <div className="content">
            <img src="" alt="" />
            <div className="data">
                <TrackList/>
                <InfoPanel albumData={album}/>
                <div className="info"></div>
            </div>
        </div>
    );
}

const arr = ["t1", "t2", "t3"];
const TrackList = () => (
    <div className="box">
        {
            arr.map((element, index) => <p key={index}>{index}. {element}</p>)
        }
    </div>
);

const InfoPanel = ({albumData}) => (
    <div className="box">
        {
            Object.keys(albumData).map((key, index) => <p key={index}>{key}={JSON.stringify(albumData[key])}</p>)
        }
    </div>
);

export default SpotifyRedirectPage;