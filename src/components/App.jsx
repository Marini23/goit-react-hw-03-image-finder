import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './SearchBar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from './api';
import { LoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    valueInput: ``,
    images: [],
    page: 1,
    loading: false,
    error: null,
    showBtnLoadMore: false,
    showModal: false,
  };

  componentDidMount() {}

  handleFormSubmit = valueInput => {
    this.setState({ valueInput, images: [], page: 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { valueInput, page } = this.state;

    if (
      prevState.valueInput !== this.state.valueInput ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const images = await fetchImages(valueInput, page);
        this.setState({
          // images: [...prevState.images, ...images.data.hits],
          images: images.data.hits,
          showBtnLoadMore: true,
        });
      } catch {
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <Loader />}
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 &&
          this.state.showBtnLoadMore &&
          !this.state.loading && <LoadMore onClick={this.onLoadMore} />}
        {this.state.showModal && (
          <Modal
            img={this.state.images.largeImageURL}
            alt={this.state.images.tags}
          />
        )}
        <GlobalStyle />
        <Toaster position="top-right" />
      </div>
    );
  }
}
