import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedItem from "./FeedItem";

class FeedGenerator extends Component {
  render() {
    const { posts } = this.props;

    return posts.map(post => <FeedItem key={post._id} post={post} />);
  }
}

FeedGenerator.propTypes = {
  posts: PropTypes.array.isRequired
};

export default FeedGenerator;
