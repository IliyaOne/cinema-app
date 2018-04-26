import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { notification } from 'antd';
import base from '../../api/base';
import Search from '../../components/Search/Search';
import Header from '../../components/UI/Header/Header';
import Menu from '../../components/UI/Menu/Menu';
import SideMenuPanel from '../../components/SideMenuPanel/SideMenuPanel';

import clasess from './Cinema.scss';




class Cinema extends Component {

  state = {
    genres: {},
    cinemaCollection: [],
    filterChoice: {},
    togglePanel:{
      toggleFilterPanel:false,
    },
    filterData:{
     imdb: 0,
     kinopoisk:0,
     yearFilmProduction:'-',
     productionInterval: [2000,2018],
     countryProduction: '-'
    },
    selected:false
  }




    addCinema = () => {
      let value = {
                    "actors" : "Кристиан Бэйл, Хит Леджер, Аарон Экхарт, Мэгги Джилленхол, Гари Олдман, МайклКей,                Морган Фриман,Чин Хань,Нестор Карбонелл, Эрик Робертс",
                    "country" : "США, Великобритания",
                    "description" : "Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы от преступности, отравляющей город. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным испуганным горожанам под именем Джокер.",
                    "director" : "Кристофер Нолан",
                    "duration" : 7340,
                    "genres" : [ "триллер", "боевик" ],
                    "imdb_rating" : 9,
                    "img" : "https://st.kp.yandex.net/images/film_iphone/iphone360_111543.jpg",
                    "kinopoisk_rating" : 8.5,
                    "name" : "Темный рыцарь",
                    "year" : "2008"
                  } 
                  
     for(var i =0 ; i< 20; i++){    
      base.push('cinema', {
        data: value
      }).then((response) => {


      }).catch(err => {

      });
    }
  }




  componentDidMount () {
    this.fetchCinema();
  }


  fetchCinema = () =>{
      let cinemaCollection = {};
      base.fetch('cinema', {
        context: this,
        state: 'cinemaCollection',
        asArray: false,
        then( data )  {
          for(let key in data){
            cinemaCollection[key] = { ...data[key], ...{ id:key, clicked:false } }
          }
          this.setState({ cinemaCollection: cinemaCollection }, () => {
            this.filterDataCinema();
          });
    
        },
        catch(error)  {

        }
      })
  }


  clickedAsideMenu = (menuButton) => {
    this.resetClickedAsideMenu();


    if(menuButton === this.state.selected){
       this.setState({ selected: false })
       return
    }
    this.asideMenuClicked(menuButton);
    this.setState({ selected: menuButton });
  }


  asideMenuClicked = (menuClicked) => {
      switch(menuClicked) {
        case 'filter':  
          this.toggleFilterPanel();
        break;

        case 'tr': 

        break;

        default:

        break;
      }
  }


  onChange = (value,key) =>{
    let filterData = this.state.filterData;
        filterData[key] = value;
    this.setState({
      filterData: filterData,
    });
    
  };


  toggleFilterPanel = () => {
    let togglePanel = this.state.togglePanel;
        togglePanel.toggleFilterPanel = !this.state.togglePanel.toggleFilterPanel;
        this.setState({ togglePanel: togglePanel })
  };

  resetClickedAsideMenu = () =>{
    let togglePanel = this.state.togglePanel;
    let keyTogglePanel = Object.keys(this.state.togglePanel);
        keyTogglePanel.forEach((item) => {
          togglePanel[item] = false;
          this.setState({ togglePanel: togglePanel })
        })

  };

  choiceCinemaGenre = (genre, action) => {

    let genres = this.state.genres;
    
    if( !(genre in genres)){
       genres[genre] = false;
     }
    genres[genre] = !genres[genre];
    this.setState({ genres });
    this.filterDataCinema(genre, !action);
 
  };

  filterDataCinema = (genre, action) => {


    this.filterChoiceCinema(genre, action);


   
  }

  filterChoiceCinema = (genre,action) => {
    let filterChoice = this.state.filterChoice; 
    let cinemaCollection = this.state.cinemaCollection;


    if(action === false){
           Object.keys(filterChoice).forEach(key => {
              if(this.filterTest(genre, filterChoice[key])){
                delete filterChoice[key];
              }
           })
       

       return
    }


    Object.keys(cinemaCollection).forEach(key => {

        cinemaCollection[key]['genres'].forEach( item => {
            if(item === genre){
              filterChoice[key] = cinemaCollection[key];
            }
        })
    }) 

    this.setState({ filterChoice });
  }


  filterTest = (genre, cinema) => {
    let filterChoice = Object.keys(this.state.filterChoice).map(key => {
      return this.state.filterChoice[key];
    });



    let genres = Object.keys(this.state.genres).filter(key => {
      return this.state.genres[key] === true;
    });

    let answer =  cinema['genres'].every((key,index) => {

               return genres.indexOf(key) === -1;
            })
   

    return answer;
  }



  render() {
    let cinemaCollection = [];
    let filterInfo = Object.keys(this.state.filterChoice).length > 0 ? this.state.filterChoice : this.state.cinemaCollection;

     if(Object.keys(filterInfo).length  > 0){
       cinemaCollection = Object.keys(filterInfo).map( key => {
         return filterInfo[key]
       });
     }


    return (
      <div className={ clasess.Container }>
        <Header>
          <Search />
        </Header>
        <SideMenuPanel clickedAsideMenu = { this.clickedAsideMenu }
                       selectedButtonMenu = { this.state.selected }
                       toggleFilterPanel = { this.state.togglePanel.toggleFilterPanel }
                       onChange = { this.onChange }
                       filterData = { this.state.filterData }
                       cinemaCollection = { cinemaCollection } 
                       choiceCinemaGenre = { this.choiceCinemaGenre }
                       genres = { this.state.genres }/>
      </div>
    )
  }
}

export default Cinema;