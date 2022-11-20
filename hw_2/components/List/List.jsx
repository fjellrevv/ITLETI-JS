import React from 'react'
export const List = ({ content }) => {
  return (
    <div>
        {content && content.map(content => (
                <div className='photos-card'> <p>{content.title}</p> <img src={content.thumbnailUrl} alt={content.title} />
    </div>
   ))}
    </div>
  );
};
