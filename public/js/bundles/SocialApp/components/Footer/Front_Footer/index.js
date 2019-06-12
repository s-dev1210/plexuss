import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './styles.scss'

class Footer extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <span>
                <div className="white-color">
                    <div className="row first-footer">
                        <div className='text-center small-12 medium-6 large-6 column footerbox footer-section second-child'>
                            <div className="row collapse">
                                <div className='column small-12 small-text-center large-text-left business'>
                                    <h2>BUSSINESS SERVICES</h2>
                                </div>
                            </div>
                            <div className='row collapse second-section'>
                                <div className='column small-12 small-text-center large-text-left'>
                                    <ul>
                                        <li><a href="#">Join as a College</a></li>
                                        <li><a href="#">Join as College Prep</a></li>
                                        <li><a href="#">Scholarship Submission</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
