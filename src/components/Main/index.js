import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import { getCategory, getImg } from '../../actions/dataActions';

import CatSmall from '../layout/loaders/CatSmall';
import Gallery from '../Gallery';

class Main extends Component {
    state = {
        amount: 10,
        category_id: "1",
        images_obj: {}
    }

    componentDidMount(){
        const { amount, category_id } = this.state;
        this.props.getCategory();
        this.props.getImg(amount, category_id)
    }

    componentDidUpdate(prevProps, prevState) {
        const { amount, category_id} = this.state;
        if(prevState.amount !== amount|| prevState.category_id !== category_id){
            this.props.getImg(amount, category_id)
        }

        const { images } = this.props;
        if(prevProps.images !== images){
            this.setState({images_obj: images})
        }
    }


    render() {
        const { category, images } = this.props;
        const { images_obj } = this.state;
    
        return (
            <div className="main-block">
                <div className="h-main">
                    <span className="h-unit">Cat solves your problems!</span>
                </div>
                <div className="b-main">
                    <div className="categories-b">
                        {this.getCategories(category)}
                    </div>
                    <div className="img-b">
                        <Gallery images={images_obj}/>
                    </div>
                </div>
                <div className="btn-more">
                    <span className="show-more" onClick={this.increaseAmount}>More</span>
                </div>
                <div className="f-main">
                    <div className="subtitle fancy"><span><i className="fas fa-cat"/></span></div>
                </div>
            </div>
        )
    }

    getCategories = (category) => {
        if(!(Object.entries(category).length === 0 && category.constructor === Object)){
            return(
                <ul className="category-list">
                    {Object.values(category).map(unit => {
                        return <li key={unit.id} id={unit.id} className="category-unit" onClick={this.changeCategory}>{this.makeCategoryName(unit.name)}</li>
                    })}
                </ul>
            )
        }else{
            return(
                <CatSmall/>
            )
        }
    }

    changeCategory = e => {
        this.setState({category_id: e.target.id, amount: 10})
    }

    makeCategoryName = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    increaseAmount = () => {
        const { amount } = this.state;
        const newAmount = amount + 10;
        this.setState({amount: newAmount});
    }
}

Main.propTypes = {
    getCategory: PropTypes.func.isRequired
}

export default connect((state) => {return {category: state.category, images: state.images}}, {getCategory, getImg})(Main);
// export default connect((state) => {return {customers: state.customers, vehicles: state.vehicles}},{getCustomers, getVehiclesStatus})(Dashboard);