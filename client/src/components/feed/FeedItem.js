import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class PostItem extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="">
        <div className="">
          <div className="">
            {post.summary}
            <br />
          </div>
          <div className="">
            <p className="">{post.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(PostItem);
