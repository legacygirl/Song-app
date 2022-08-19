import React from 'react'
import { connect } from 'react-redux'
const songDetail = (props) => {
  console.log(this.props);
  return (
    <div>songDetail</div>
  );
}
const mapStateToProps = (state)=>{
   return {song: state.selectedSong}
}
export default connect(mapStateToProps)(songDetail);