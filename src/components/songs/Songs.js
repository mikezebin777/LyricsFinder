import React from 'react';
import SongItem from './SongItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Songs = ({ songs, loading }) => {
  
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {songs.map((song) => (
          <SongItem key={song.id} song={song}></SongItem>
        ))}
      </div>
    );
  }
};

Songs.propTypes = {
  songs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridGap: '1rem',
};

export default Songs;
