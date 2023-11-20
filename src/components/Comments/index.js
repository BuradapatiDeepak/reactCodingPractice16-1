import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  commenterName = event => {
    this.setState({name: event.target.value})
  }

  commenterComment = event => {
    this.setState({comment: event.target.value})
  }

  commentSubmission = event => {
    event.preventDefault()
    const {commentsList, name, comment} = this.state
    const profile = {
      id: uuidv4(),
      name,
      comment,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, profile],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state

    return (
      <div className="app-container">
        <div className="top-container">
          <div className="input-container">
            <h1 className="heading">Comments</h1>
            <p className="paragraph">Say something about 4.0 Technologies</p>
            <form onSubmit={this.commentSubmission}>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                className="input-element"
                onChange={this.commenterName}
              />
              <textarea
                value={comment}
                placeholder="Your Comment"
                className="textarea-element"
                onChange={this.commenterComment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <hr />
        <div className="bottom-container">
          <p>
            <span>0</span> Comments
          </p>
          <ul className="comments-count">
            {commentsList.map(eachItem => (
              <CommentItem key={eachItem.id} listOfItem={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
