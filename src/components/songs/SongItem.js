import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SongItem = ({ song: { title, album, author, img_url, sources } }) => {
  return (
    <div className='card text-center '>
      <div>
        <h3 className='text-left'>{title}</h3>
        <h4 className='text-left'>
          {album} - {author}
        </h4>
      </div>
      <div>
      {sources.map(source => (
        <a key={source.platform}
          href={source.url} 
          target={"_blank"}
          className={
          source.platform === 'xiami' ? 'xiami_song' :
          source.platform === 'zanmeishi' ? 'zanmeishi_song' :
          ''
        }>
          <img src={img_url} alt='' className='round-img' style={{ width: 60 }} />  
        </a>
      ))}
      </div>
      
      {/* <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div> */}
    </div>
  );
};

SongItem.propTypes = {
  song: PropTypes.object.isRequired,
};

export default SongItem;
