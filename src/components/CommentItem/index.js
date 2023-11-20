// Write your code here
import './index.css'

const CommentItem = props => {
  const {listOfItems} = props
  const {name, comment} = listOfItems
  const firstLetter = name[0]

  return (
    <li className="comment-container">
      <div className="top-comment-container">
        <p className="profile-picture">{firstLetter}</p>
        <div className="profile-text">
          <div className="profile-name">
            <h1 className="commenter">{name}</h1>
            <p>2 minutes ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="bottom-comment-container">
        <div className="like-container">
          <img
            className="like-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
          />
          <p>Like</p>
        </div>
        <img
          className="delete-image"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
