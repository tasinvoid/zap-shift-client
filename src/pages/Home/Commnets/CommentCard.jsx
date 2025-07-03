import React from "react";

const CommentCard = ({ comment }) => {
  comment;
  const {
    badgeOutline1,
    badgeOutline2,
    badgeSecondary,
    cardTitle,
    paragraphContent,
  } = comment;
  return (
    <div className="flex justify-center items-center mb-10 ">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">
            {cardTitle}
            <div className="badge badge-secondary">{badgeSecondary}</div>
          </h2>
          <p>{paragraphContent}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{badgeOutline1}</div>
            <div className="badge badge-outline">{badgeOutline2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
