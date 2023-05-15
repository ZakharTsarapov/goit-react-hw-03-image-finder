import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import css from './App.module.css'
import { Searchbar } from './Searchbar/Searchbar';


 export class App extends Component {
   state = {
     searchQuery: '',
   };

   handleFormSubmit = searchQuery => {
     this.setState({ searchQuery });
   };

   render() {
     const { searchQuery } = this.state;
     return (
       <div className={css.app}>
         <Searchbar onSubmit={this.handleFormSubmit} />
         <ImageGallery searchQuery={searchQuery} />
       </div>
     );
   }
 }


