import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './SearchBar/Searchbar';
import { ImageCallery } from './ImageGallery/ImageGallery';
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
    console.log(valueInput);
  };

  async componentDidUpdate(prevProps, prevState) {
    const { valueInput, page } = this.state;

    if (
      prevState.valueInput !== this.statr.valueInput ||
      prevState.page !== this.state.page
    ) {
      try {
        const { hits, totalHits } = await fetchImages(valueInput, page);
      } catch {}
    }
  }
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageCallery query={this.state.valueInput} />
        <GlobalStyle />
        <Toaster position="top-right" />
      </div>
    );
  }
}
