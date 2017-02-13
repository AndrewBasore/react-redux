import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';


const mapStateToProps = function(state){
  return {
    playlists: state.playlists.list
  };
}


const SidebarContainer = connect(
     mapStateToProps
     )(Sidebar);
export default SidebarContainer;
