const Comment=({comment})=>{
    return(
        <div className="card border-1">
            <div className="card-body">
                <h4 className="card-title">comment by: {comment.name} </h4>
                <p className="card-tet">{comment.text}</p>
                <p className="card-tet">Note: {comment.note}</p>
            </div>
        </div>
    )
}

export default Comment;