import React, { Component } from 'react';

class Gallery extends Component {

    render() {
        const { images } = this.props;
        let id_num = 0;
        return (
            <div className="gallery-container">
                {images.map(unit => {
                    let id_prefix = unit.id+"_"+id_num;
                    id_num++;
                    return (
                        <a href={unit.url} target="_blank" rel="noopener noreferrer">
                            <img className="gallery-item" key={id_prefix} src={unit.url} alt="Cat"/>
                        </a>
                    )
                })}
            </div>
        )
    }
}   

export default Gallery;