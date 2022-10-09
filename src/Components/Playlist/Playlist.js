import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js'

class Playlist extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <TrackList />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
         );
    }
}
 
export default Playlist;