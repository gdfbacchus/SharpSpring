import React from 'react'
import Moment from 'react-moment'
const axios = require('axios')

export default class Albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
    }
    componentDidMount() {
        axios.get(`https://itunes.apple.com/search?term=cage+the+elephant&entity=album&callback=`)
            .then(res => {
                this.setState({
                    albums: res.data.results});
            })
            .catch(err => [
                console.log(err)
            ]);
            
    };
    render() {
        return (
            <div className="row">
                {this.state.albums.map(album =>(
                    <div className="col-md-4 col-sm-6 card" key={album.collectionId}>
                        <img src={album.artworkUrl100} className="card-img-top" alt={album.collectionName} />
                        <div className="card-body">
                            <h5 className="card-tile">{album.collectionName}</h5>
                            <p className="card-text>{album.artistName}</p>
                            <p className="card-text"><Moment format="MMM D YYYY">{album.releaseDate}</Moment></p>
                        </div>
                        
                    </div> 
                ))}
            </div>
        )
    }
}            
