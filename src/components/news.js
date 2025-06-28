import React, { Component } from 'react';
import NewsUpdate from './NewsUpdate';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import './style.css';

export class News extends Component {
  static defaultProps = {
    category: "general",
  };

  static propTypes = {
    category: PropTypes.string,
    searchQuery: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      filteredArticles: [],
      loading: true,
      totalResults: 0,
      page: 1,
    };
  }

  async updatedNews() {
    this.props.setProgress(5);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=12`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      filteredArticles: parsedData.articles,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updatedNews();
    this.fetchNews(); // Call fetchNews here
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.filterArticles(); // Corrected method name
    }
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=12`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        filteredArticles: this.state.articles.concat(parsedData.articles),
      });
    } catch (error) {
      console.error("Error fetching more news articles:", error);
    }
  };

  fetchNews = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/endpoint`; // Replace '/api/endpoint' with your actual endpoint
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  filterArticles = () => {
    const { articles } = this.state;
    const { searchQuery } = this.props;

    if (!searchQuery) {
      this.setState({ filteredArticles: articles });
      return;
    }

    const filteredArticles = articles.filter((article) =>
      article.title && article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ filteredArticles });
  };

  render() {
    const { filteredArticles, totalResults, loading } = this.state;

    return (
      <div className="container my-3">
        <h2 className="text-center my-5 head" color="white">TOP HEADLINES</h2>
        <div className="container">
          <div className="horizontal-scrolling-items">
            <div className="horizontal-scrolling-items__item text-success">
              Exclusive News &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exclusive News &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Exclusive News &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Exclusive News &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Exclusive News
            </div>
          </div>
        </div>
        <InfiniteScroll
          dataLength={filteredArticles ? filteredArticles.length : 0}
          next={this.fetchMoreData}
          hasMore={filteredArticles ? filteredArticles.length !== totalResults : false}
          loader={<h4>Loading...</h4>}
        >
          <div className="row">
            {filteredArticles && filteredArticles.length > 0 ? (
              filteredArticles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsUpdate
                    title={element.title ? element.title.slice(0, 50) : 'No Title'}
                    newsUrl={element.url}
                    imageUrl={element.urlToImage || 'default-image-url.jpg'}
                    source={element.source ? element.source.name : 'Unknown Source'}
                    author={element.author || 'anonymous'}
                  />
                </div>
              ))
            ) : (
              !loading && <h2 className="text-center">No articles found</h2>
            )}
          </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between">
          <h5>Total Result: {totalResults}</h5>
        </div>
      </div>
    );
  }
}

export default News;