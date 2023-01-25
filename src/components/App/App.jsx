import { Component } from 'react';
import './App.css';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';

export class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Searchbar></Searchbar>
        <ImageGallery></ImageGallery>
        <Loader></Loader>
      </>
    );
  }
}
