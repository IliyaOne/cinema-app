import React from 'react';
import { Input, Icon  } from 'antd';
import clasess from './Search.scss';


const Search = (props) => {  
 return(    
   <Input placeholder="Начните искать любимые фильмы" 
          prefix={<Icon type="search" style={{ color: '#fff', fontSize: '25px' }} />}/>   
 )     
}

export default Search;     