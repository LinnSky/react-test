import React from 'react';
import Header from './components/header/index';
import Headline from './components/headline/index';
import SharedButton from './components/button/index';
import ListItem from './components/listItem/index';
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

  const { posts } = props;
  
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr} />
        <SharedButton {...configButton} />
        {posts.length > 0 && 
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              return <ListItem key={index} title={title} desc={body} />
            })}
          </div>
        }
      </section>
    </div>
  );  
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
