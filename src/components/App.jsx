import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from './Loader';
import { Button } from './Button';
import { Modal } from './Modal';
import axios from 'axios';
import { Component } from 'react';

export class App extends Component {
  state = {
    query: '',
    pictures: '',
  };

  parameters = {
    key: '36220225-498e2aaa7af1c41719481b4e5',
    query: null,
    image_type: 'photo',
    orientation: 'vertical',
    per_page: 40,
    page: 1,
  };

  handleSubmit = (_, searchText) => {
    if (!this.state.search.trim()) {
      return alert('ну напишіть щось, альо');
    }
    this.setState({ query: searchText });
    this.parameters.query = searchText;
  };

  // handleChange = event => {
  //   this.setState({ query: event.target.value });
  //   this.parameters.query = event.target.value;
  // };

  async componentDidUpdate() {
    const responce = await axios.get('https://pixabay.com/api/', {
      params: [{ ...this.parameters, ...this.state }],
    });
    this.setState({ pictures: responce.data.hits });
    this.parameters.query = this.state.query;
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal />
      </div>
    );
  }
}
