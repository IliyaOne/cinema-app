import React from 'react';
import { Row, Col } from 'antd';

import classes from './FilterPage.scss';



const FilterPage = (props) =>{
 return(
  <div className={ props.toggleFilterPanel ? [classes.Container, classes.Active].join(" ") : classes.Container }>	
	  <Row gutter={16}>      

	        { 
	       
        	props.cinemaCollection.map( (item,index) => {
        	  return   <Col className="gutter-row" span={4} key={item.id} style={{ marginBottom: '70px'}}>
                         <div className={ classes.Container_Cinema }>
                           <div className={ classes.Container_Image }>
 							 <img  src={item.img} />
                           </div>
                            <div className={ classes.Container_Info_Cinema }>
                            	<div className={ classes.Title_Cinema }> { item.name }</div>
                            	<div className={ classes.Year_Cinema }>{ item.year }</div>
                            </div>
                         </div>
                       </Col>
              }) 
	        
	        }
	   </Row>
   </div>
 )
}

export default FilterPage;


