import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';

import css from './App.module.css';

export class App extends Component {
  state = {};
  render() {
    return (
      <div className={css.app}>
        <Searchbar></Searchbar>
        <ImageGallery></ImageGallery>
        <Loader></Loader>
      </div>
    );
  }
}
