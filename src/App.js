import React, { Component, PropTypes } from 'react';
import PostList from './components/PostList/PostList'
import FilterList from './components/FilterList/FilterList'
import posts from 'json-loader!./posts.json'; // eslint-disable-line
import users from 'json-loader!./users.json'; // eslint-disable-line

// App.css shouldn't contain all styles, style fyle per componenr
import './App.css';

class App extends Component {

  static defaultProps = {
    users
  }

  constructor(props) {
    super(props);

    this.state = {
      posts,
      filters: {
      }
    }
  }

  getPostsData = (posts, users, filters = {}, search = {}, sort) => {
    return posts.map(({ userId, id, title, body }) => {
      const user = users.find(({ id }) => parseInt(id, 10) === parseInt(userId, 10));
      return {
        id,
        title,
        body,
        authorName: user.name,
        company: user.company.name,
        city: user.address.city
      };
    }).filter((post) => {
      return Object.keys(filters).every((filter) => !filters[filter] || filters[filter] === post[filter].toLowerCase())
        && Object.keys(search).every((searchField) => !search[searchField] || (post[searchField]).toLowerCase().includes(search[searchField]));
    }).sort((post1, post2) => {
      return !!sort ? post1[sort].localeCompare(post2[sort]) : 0;
    });
  }

  onRemove = (deletedId) => {
    const posts = this.state.posts.filter(({ id }) => id !== deletedId);
    this.setState({ posts });
  }

  onFilter = (filter) => {
    const filters = Object.assign({}, this.state.filters, filter);
    this.setState({filters});
  }

  onSearch = (searchObject) => {
    const search = Object.assign({}, this.state.search, searchObject);
    this.setState({search});
  }

  onSort = (sort) => {
    this.setState({sort});
  }

  render() {
    const { users } = this.props;
    const { posts, filters, search, sort } = this.state;
    const postList = this.getPostsData(posts, users, filters, search, sort);

    return (
      <div className="App">
        <h1>Posts</h1>
        <FilterList users={users}
                    onFilterChange={this.onFilter}
                    onSearch={this.onSearch}
                    onSort={this.onSort}/>
        <PostList posts={postList} onRemove={this.onRemove} />
      </div>
    );
  }
};

App.propTypes = {
  users: PropTypes.array
}

export default App;
