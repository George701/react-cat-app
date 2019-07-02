import React, { Component } from 'react';

class Gallery extends Component {

    render() {
        const { images } = this.props; 
        if(images){
            return (
                <div>
                    Gallery
                </div>
            )
        }else{
            return <div>Loading...</div>
        }
    }
}

export default Gallery;
// export default connect((state) => {return {category: state.category}}, {getCategory})(Main);