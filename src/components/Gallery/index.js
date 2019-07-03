import React, { Component } from 'react';

class Gallery extends Component {

    render() {
        const { images } = this.props;
        if(!(Object.entries(images).length === 0 && images.constructor === Object)){
            return (
                <div className="gallery-container">
                    {Object.values(images).map(unit => {
                        // console.log(unit);
                        return <img className="gallery-item" key={unit.id} src={unit.url} alt="Cat" height={this.fixSize(unit.height)} width={this.fixSize(unit.width)}/>
                    })}
                </div>
            )
        }else{
            return <div>Loading...</div>
        }
    }

    fixSize = (value) => {
        value = parseInt(value);
        if(value < 800){
            return value/4;
        }else if(value < 1000){
            return value/5;
        }else if(value < 1200){
            return value/6;
        }else{
            return value/8;
        }
    }
}   

export default Gallery;
// export default connect((state) => {return {category: state.category}}, {getCategory})(Main);