import React from 'react';
import classes from './SideMenuFilter.scss';
import { Input, Slider, Row, Col, Select } from 'antd';


const Option = Select.Option;
const genres = ['комедия', 'ужасы', 'триллер', 'мюзикл', 'боевик', 'драма', 'фильм-биография', 'фантастика', 'фэнтези','приключения','детектив'];

const SideMenuFilter = (props) =>{
 return(
   <div className={ props.toggleFilterPanel ? [classes.Container, classes.Active].join(" ") : classes.Container }>
     <div className={ classes.Inner }>
       <div className={ classes.Title }>фильмы</div>

       <div className={ [classes.Block, classes.Block_Genres].join(" ") }>
       	  <div className={ classes.Title_Block }>жанры</div>
       	  <ul>
            { genres.map( (genr,index) => {
                return  <li onClick = { () => props.choiceCinemaGenre(genr, props.genres[genr]) } key={ index }
                            className={ props.genres[genr] ? classes.Active_Genre : null }>{ genr }</li>
             })}
       	  </ul>
       </div>

       <div className={ [classes.Block, classes.Block_Genres].join(" ") }>
        <div className={ classes.Title_Block }>рейтинг</div>
          <Row>
            <Col className={ classes.Container_Slider }>
              <div className={ classes.Container_Slider_Attributes }>
                <span>imdb</span> 
                <span>{ props.filterData.imdb }</span>
              </div>
              <Slider min={1} tipFormatter={null} included={true} max={10}  onChange = { (e) => props.onChange(e,'imdb') } />
            </Col>
            <Col>
              <div className={ classes.Container_Slider_Attributes }>
                <span>кинопоиск</span> 
                <span>{ props.filterData.kinopoisk }</span>
              </div>
              <Slider min={1} tipFormatter={null} included={true} max={10}  onChange = { (e) => props.onChange(e,'kinopoisk') } />
            </Col>
          </Row>
        </div>

        <div className={ [classes.Block, classes.Block_Genres].join(" ") }>
          <div className={ classes.Title_Block }>Годы создания</div>
          <Row>
            <Col className={ classes.Container_Slider }>
              <span>год производства</span> 
              <Select defaultValue="-" style={{ width: '100%' }} onChange = { (e) => props.onChange(e, 'yearFilmProduction') }>
                <Option value="-">-</Option>
                <Option value="2000">2000</Option>
                <Option value="2001">2001</Option>
                <Option value="2002">2002</Option>
              </Select>
            </Col>
            <Col>
                <span>интервал производства</span>
                <div className={ classes.Container_Slider_Attributes }>
                   <span>{ props.filterData.productionInterval[0] }</span> 
                   <span>{ props.filterData.productionInterval[1] }</span>
                </div> 
                <Slider range defaultValue={[2000, 2018]} min={ 2000 } max={ 2018 } tipFormatter={null}  onChange = { (e) => props.onChange(e,'productionInterval') } />
            </Col>
          </Row>
       </div>

       <div className={ [classes.Block, classes.Block_Genres].join(" ") }>
          <div className={ classes.Title_Block }>Страны</div>
          <Row>
            <Col>
              <Select defaultValue="-" style={{ width: '100%' }} onChange = { (e) => props.onChange(e,'countryProduction') }>
                <Option value="-">-</Option>
                <Option value="Америка">Америка</Option>
                <Option value="Россия">Россия</Option>
                <Option value="Англия">Англия</Option>
              </Select>
            </Col>
          </Row>
       </div>

     </div>
   </div>
 )
}

export default SideMenuFilter;