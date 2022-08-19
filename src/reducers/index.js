import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: "Let it be", duration: "6:05"},
    {title: "Run to you", duration: "4:03"},
    {title: "I Will Drive You Home", duration: "4:20"},
    {title: "Prosthetic Love", duration: "4:15"}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
