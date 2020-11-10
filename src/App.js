import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Indices from './components/indices/Indices';

import Songs from './components/songs/Songs';
// import User from './components/users/User';
import Search from './components/songs/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import { filterByKeyword } from "./functions/search";

import OurSongs from './songData'; // Sample data of the Songs
import './App.css';

class App extends Component {
  state = {
    keyword: '',
    songs: OurSongs,
    indexedSongs: OurSongs,
    filteredSongs: OurSongs,

    loading: false,
    alert: null,
    selectedIndex: '',
  };

  setIndex = (index) => {

    let {selectedIndex} = this.state;

    console.log(`set ${index}`);

    // 如果点击的已经备选中了， 就清除选中。
    selectedIndex = selectedIndex === index ? '' : index;

    // 找出索引的曲目
    const indexedSongs = selectedIndex === '' ? OurSongs : 
    OurSongs.filter(song => song.index === selectedIndex);

    this.setState({
      selectedIndex,
      indexedSongs
    })
  }

  // Search songs
  searchSongs = key => {
    const filtered = filterByKeyword(key, OurSongs);
    // const filtered = filterByKeyword('天父', OurSongs);
    this.setState({filteredSongs : filtered})
  }

  render() {
    const { loading, selectedIndex, songs, indexedSongs, filteredSongs } = this.state;
    
    return (
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            {/* 索引页/Index */}
            <Route exact path='/' render={props => (
              <Fragment>
                <Indices selectedIndex={selectedIndex} 
                         setIndex={this.setIndex}/>
                <Songs  songs = {indexedSongs} 
                        loading= {loading} />
              </Fragment>
            )} />
            {/* 搜索页/Search */}
            <Route exact path='/search' render={props => (
              <Fragment>
                <Search searchSongs={this.searchSongs} />
                {/* <Songs  songs = {filterByKeyword("喜乐", songs)}  */}
                <Songs  songs = {filteredSongs} 
                        loading= {loading} />
                {/* <button onClick={this.searchSongs} >filter songs</button> */}
              </Fragment>
            )} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
