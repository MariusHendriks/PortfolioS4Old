import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../actions/postActions";

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  render() {
    const { auth, showActions } = this.props;
    const {post} = this.props;
  
    return (
      <div className="">
        <div className="">
        {post.summary}
          <div className="">
            <br />
            <p className="">{post.name}</p>
          </div>
          <div className="">
          {post.text.startsWith("<iframe") ? <div dangerouslySetInnerHTML={{ __html: post.text }}></div> : <p className="">{post.text}</p>}
            
            {showActions ? (
              <span>
                <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                  Go to post
                </Link>
                {post.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-danger mr-1"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null}
              </span>
            ) : null}
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
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost }
)(PostItem);
