import React from 'react';
import { Input } from 'antd';
import clasess from './SideMenuPanel.scss';
import SideMenuList from './SideMenuList/SideMenuList';
import SideMenuFilter from './SideMenuFilter/SideMenuFilter';
import FilterPage  from './FilterPage/FilterPage';


const SideMenuPanel = (props) =>{
 return(
   <div className={ clasess.Container }>
     <SideMenuList clickedAsideMenu = { props.clickedAsideMenu } 
                   selectedButtonMenu = { props.selectedButtonMenu } 
                   toggleFilterPanel = { props.toggleFilterPanel }/>
     <SideMenuFilter togglePanel = { props.togglePanel } 
     				 toggleFilterPanel = { props.toggleFilterPanel }
     				 onChange = { props.onChange } 
     				 filterData = { props.filterData } 
     				 choiceCinemaGenre = { props.choiceCinemaGenre }
     				 genres = { props.genres }/>
     <FilterPage cinemaCollection = { props.cinemaCollection }
                 toggleFilterPanel = { props.toggleFilterPanel } />				 
   </div>
 )
}

export default SideMenuPanel;