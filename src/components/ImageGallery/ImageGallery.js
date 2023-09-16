import { Component } from 'react';
import axios from 'axios';
import { ImageCalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';

export class ImageCallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    status: `idle`,
  };

  componentDidUpdate(prevProps, prevState) {
    const query = this.props.query;
    if (prevProps.query !== this.props.query) {
      this.setState({ status: `pending` });

      fetch(
        `https://pixabay.com/api/?key=38416277-2f3b74029dfd524974848f805&q=${this.props.query}&image_type=photo`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Error`));
        })
        .then(images =>
          this.setState({ images: images.hits, status: `resolved` })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const images = this.state.images;
    if (this.state.status === `pending`) {
      return <Loader />;
    }

    if (this.state.status === `rejected`) {
      return <h1>{this.state.error.message}</h1>;
    }

    if (this.state.status === `resolved`) {
      return (
        <ImageGalleryList className="gallery">
          {images.map(image => (
            <ImageCalleryItem
              img={image.webformatURL}
              largeImageURL={image.largeImageURL}
              alt={image.tags}
              key={image.id}
            />
          ))}
        </ImageGalleryList>
      );
    }
    // return (
    //   <div>
    //     {this.state.error && <h1>{this.state.error.message}</h1>}
    //     {this.state.loading && <Loader />}
    //     <ImageGalleryList className="gallery">
    //       {images.map(image => (
    //         <ImageCalleryItem
    //           img={image.webformatURL}
    //           largeImageURL={image.largeImageURL}
    //           alt={image.tags}
    //           key={image.id}
    //         />
    //       ))}
    //     </ImageGalleryList>
    //   </div>
    // );
  }
}
