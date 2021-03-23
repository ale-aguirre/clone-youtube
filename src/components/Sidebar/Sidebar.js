import React from 'react'
import './Sidebar.css'
import Iconos from '../Iconos/Iconos'
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import ExploreIcon from '@material-ui/icons/Explore';
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <Iconos selected Icon={HomeIcon} title="Inicio"/>
            <Iconos Icon={ExploreIcon} title="Explorar"/>
            <Iconos Icon={SubscriptionsIcon} title="Suscripciones"/>    
            <hr className="sidebar_separator"/>   
            <Iconos Icon={VideoLibraryIcon} title="Biblioteca"/> 
            <Iconos Icon={HistoryIcon} title="Historial"/> 
            <Iconos Icon={OndemandVideoIcon} title="Mis videos"/> 
            <Iconos Icon={WatchLaterIcon} title="Ver mas tarde"/> 
            <Iconos Icon={ThumbUpAltIcon} title="Videos que me gustaron"/> 
            <Iconos Icon={ExpandMoreIcon} title="Mostrar más"/> 
            <hr className="sidebar_separator"/>   
        </div>
    )
}

export default Sidebar
