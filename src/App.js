import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/news';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apikey = "d103897c2d064c1c97184c261e626f5c";
  state = {
    progress: 0,
    searchQuery: "",
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    return (
      <div>
        <Navbar searchQuery={this.state.searchQuery} handleSearch={this.handleSearch} />
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                apiKey={this.apikey}
                category="general"
                searchQuery={this.state.searchQuery}
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                apiKey={this.apikey}
                category="business"
                searchQuery={this.state.searchQuery}
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                apiKey={this.apikey}
                category="entertainment"
                searchQuery={this.state.searchQuery}
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                apiKey={this.apikey}
                category="health"
                searchQuery={this.state.searchQuery}
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                apiKey={this.apikey}
                category="science"
                searchQuery={this.state.searchQuery}
              />
            }
          ></Route>
          <Route
            path="/sport"
            element={
              <News
                setProgress={this.setProgress}
                key="sport"
                apiKey={this.apikey}
                category="sport"
                searchQuery={this.state.searchQuery}
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                apiKey={this.apikey}
                category="technology"
                searchQuery={this.state.searchQuery}
              />
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}