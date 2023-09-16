import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './SearchBar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './api';

export class App extends Component {
  state = {
    valueInput: ``,
    images: [],
    page: 1,
    loading: false,
    error: null,
    status: `idle`,
  };

  componentDidMount() {}

  handleFormSubmit = valueInput => {
    this.setState({ valueInput });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { valueInput, page } = this.state;

    if (
      prevState.valueInput !== this.state.valueInput ||
      prevState.page !== this.state.page
    ) {
      try {
        const images = await fetchImages(valueInput, page);
        this.setState({ images: images.data.hits });
      } catch {}
    }
  }
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        <GlobalStyle />
        <Toaster position="top-right" />
      </div>
    );
  }
}
