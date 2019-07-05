import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import { getCategory, getImg } from '../../actions/dataActions';

import CatSmall from '../layout/loaders/CatSmall';
import CatBig from '../layout/loaders/CatBig';

import Gallery from '../Gallery';

class Main extends Component {
    state = {
        category_id: "1",
        img_arr: []
    }

    componentDidMount(){
        const { category_id } = this.state;
        this.props.getCategory();
        this.props.getImg( category_id);
    }

    componentDidUpdate(prevProps, prevState) {
        const { category_id } = this.state;
        if(prevState.category_id !== category_id){
            this.props.getImg( category_id)
        }

        if(prevProps.images !== this.props.images){
            let final_arr = [];
            let arr_new = Object.values(this.props.images);
            const { img_arr } = this.state;

            for (let i = 0; i < img_arr.length; i++){
                final_arr.push(img_arr[i]);
            }
            for (let i = 0; i < arr_new.length; i++){
                final_arr.push(arr_new[i]);
            }
            
            this.setState({img_arr: final_arr})
        };
    }


    render() {
        const { category } = this.props;
        const { category_id, img_arr } = this.state;
        
        const chosen_category = this.getCategoryName(category, category_id);
    
        return (
            <div className="main-block">
                <div className="h-main">
                    <span className="h-unit">Cat solves your problems!</span>
                    <span className="h-unit">Chosen CATegory: {chosen_category}</span>
                </div>
                <div className="b-main">
                    <div className="categories-b">
                        {this.getCategories(category)}
                    </div>
                    <div className="img-b">
                        {this.checkImagesArray(img_arr)}
                    </div>
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
        this.setState({category_id: e.target.id, img_arr:[]})
    }

    makeCategoryName = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    increaseAmount = () => {
        const { category_id } = this.state;
        this.props.getImg(category_id);
    }

    getCategoryName = (cat, id) => {
        if(cat[id] !== undefined){
            return this.makeCategoryName(cat[id].name)
        }else{
            return "Loading..."
        }
    }

    checkImagesArray = (img_arr) => {
        if(img_arr.length !== 0){
            return(
                <React.Fragment>
                    <Gallery images={img_arr}/>
                    <div className="btn-more">
                        <span className="show-more" onClick={this.increaseAmount}>More</span>
                    </div>
                </React.Fragment>  
            )
        }else{
            return <CatBig/>
        }
    }
}

Main.propTypes = {
    getCategory: PropTypes.func.isRequired,
    getImg: PropTypes.func.isRequired
}

export default connect((state) => {return {category: state.category, images: state.images}}, {getCategory, getImg})(Main);