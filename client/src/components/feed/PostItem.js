import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class PostItem extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <br />
          </div>
          <div className="col-md-10">
            <p className="lead">{post.text}</p>
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
