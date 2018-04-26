import React from 'react';
import classes from './SideMenuList.scss';

import allCinemaIcon from '../../../assets/images/icons/binoculars.svg';
import filterIcon from '../../../assets/images/icons/film-roll.svg';
import favoritesIcon from '../../../assets/images/icons/heart-shape-outline.svg';


let icons = [allCinemaIcon, filterIcon, favoritesIcon];
let nameItemMenu = ['allCinema','filter','favorites'];


const SideMenuList = (props) =>{
 return(
   <div className={ classes.Container }>
      <ul>
        { nameItemMenu.map( (item,index) => {
        	return <li key={ item } className={ props.selectedButtonMenu === item ? [classes.Active].join(" ") : null }  onClick = { () => props.clickedAsideMenu(item) }><img src={ icons[index] }  /></li>
        }) }
      </ul>
   </div>
 )
}

export default SideMenuList;

        // <li><img src={ binocularsIcon }  /></li>
        // <li onClick = { ev => props.toggleFilterPanel(ev) } 
        //     className={ props.togglePanel ? [classes.Active].join(" ") : null }><img src={ filmRollIcon }  /></li>
        // <li><img src={ heartIcon }  /></li>