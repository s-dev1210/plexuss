import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import _ from 'lodash';
import {toastr} from 'react-redux-toastr'
import './styles.scss'
import InfiniteScroll from 'react-infinite-scroll-component';
import Carousles from '../Carousles'
import { setStep } from '../../actions/carousles'
import Loader from '../common/loading'
import Footer from '../Footer/Front_Footer'
import { Helmet } from 'react-helmet';

class Front_Dashboard extends Component{
  constructor(props){
    super(props);

    this.state = {
    }
    this.setVisible = this.setVisible.bind(this)
    this.setCookie = this.setCookie.bind(this)
  }

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  componentDidUpdate(prevProps){
    if (this.props.location !== prevProps.location)
      window.scrollTo(0, 0)
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillMount() {
  }
  componentWillUnmount() {
  }

  render() {
    return (
      <span>
          <div>
            <div className="front-page">
                <div className="front-first">
                  <div className="front-text mbl_none">
                    <div className="big-text">Connecting students with universities, students, and alumni</div>
                    <div className="small-text">Community of over 6 million and growing worldwide</div>
                  </div>
                  <div className="mbl_front_text">
                    <div className="big-text">Connecting students with universities, students, and alumni</div>
                    <div className="small-text">Community of over 6 million and growing worldwide</div>
                  </div>
                </div>
                <div className="front-second" style={secondClass}>
                  <a className="sign-up" href="/signup?utm_source=SEO&utm_medium=frontPage">Sign up</a>
                  <div className="or-txt">
                    <div className='orLine'></div>
                    <div className='ortxt'>Or Sign up with</div>
                    <div className='orLine'></div>
                  </div>
                  <div className="signup-with">
                    <a className="facebook-sign-up" href="/facebook?utm_source=SEO&utm_medium=frontPage">
                      <img src='/images/social/facebook_white.png' className="facebook-white"/>
                      {' Facebook'}
                    </a>
                    <a className="google-sign-up" href="/googleSignin?utm_source=SEO&utm_medium=frontPage">
                      <img src='/images/social/google-logo.svg' className="google-white"/>
                      {' Google'}
                    </a>
                    <a className="linkedin-sign-up" href="/linkedinSignin?utm_source=SEO&utm_medium=frontPage">
                      <img src='/images/social/LinkedIn-in.svg' className="linkedin-white"/>
                      {' LinkedIn'}
                    </a>
                  </div>
                  <a className="mbl-login" href="/signin">Login</a>
                </div>
                <div className="front-third">
                  <div className="fb-likes-container clearfix" style={thirdClass}>
                    <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FPlexusscom-465631496904278%2F&width=88&layout=button_count&action=like&show_faces=false&share=false&height=21&appId=663647367028747" 
                      width="100" height="25" style={{border:'none', overflow:'hidden'}} 
                      scrolling="no" frameBorder="0" allowtransparency="true"></iframe>
                  </div>
                </div>
            </div>
            <div className="carousles">
                {this.props.carousles.comps.map((item,index) => <Carousles key={index} tag={item}/>)}
            </div>
            <Footer/>
          </div>
      </span>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    carousles: state.carousles,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStep: (step) => {dispatch(setStep(step))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Front_Dashboard);
