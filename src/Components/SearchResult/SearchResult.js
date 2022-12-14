import React from 'react';
import './SearchResult.css';
import TrackList from '../TrackList/TrackList.js';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResult} onAdd={this.props.onAdd} isRemoval={false} />
            </div>
         );
    }
}
 
export default SearchResult;