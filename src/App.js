import React, { Component } from 'react';
import Header from './components/header/index';
import Headline from './components/headline/index';
import SharedButton from './components/button/index';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

function App(props) {

   const fetch = () => {
    props.fetchPosts();
  }

  const configButton = {
    buttonText: 'Get posts',
    emitEvent: fetch
  }
  
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr} />
        <SharedButton {...configButton} />
      </section>
    </div>
  );  
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

// const mapDispatchToProps = dispatch => {
//   return {fetchPosts: fetchPosts}
// }

export default connect(mapStateToProps, {fetchPosts})(App);
