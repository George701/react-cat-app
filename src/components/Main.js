import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import { getCategory } from '../actions/dataActions';

class Main extends Component {

    componentDidMount(){
        this.props.getCategory();
    }

    render() {

        const { category } = this.props;
        console.log(typeof category);
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

Main.propTypes = {
    getCategory: PropTypes.func.isRequired
}

export default connect((state) => {return {category: state.category}}, {getCategory})(Main);
// export default connect((state) => {return {customers: state.customers, vehicles: state.vehicles}},{getCustomers, getVehiclesStatus})(Dashboard);