import React, { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { fetchImages }  from '../../Api/pixabayApi';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css'

export class ImageGallery extends Component {
  state = {
    response: '',
    error: null,
    status: null,
    showModal: false,
    modalImg: '',
    alt: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;

    if (prevSearchQuery !== nextSearchQuery) {
      this.setState({ status: 'pending' });

      fetchImages(nextSearchQuery, 1)
        .then(response =>
          this.setState(prevState => {
            return {
              response: response.hits,
              status: 'resolved',
              page: prevState.page + 1,
            };
          })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  getModalImg = (modalImg, alt) => {
    this.setState({
      modalImg,
      alt,
    });
  };

  loadMore = () => {
    fetchImages(this.props.searchQuery, this.state.page)
      .then(nextResponse =>
        this.setState(prevState => {
          return {
            response: [...prevState.response, ...nextResponse.hits],
            page: prevState.page + 1,
          };
        })
      )
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const { response, error, status, alt, modalImg, showModal } = this.state;

    if (status === 'pending') {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

      if (status === 'resolved')
        
      return (
        <div>
          <ul className={css.imageGallery}>
            {response.map(img => (
              <ImageGalleryItem
                onGetModalImg={this.getModalImg}
                toggleModal={this.toggleModal}
                key={img.id}
                img={img}
              />
            ))}
          </ul>

          <div>
            <Button onClick={this.loadMore}>Load more</Button>
          </div>
              {showModal && (
                  
            <Modal onClose={this.toggleModal}>
              <img src={modalImg} alt={alt} />
            </Modal>
          )}
        </div>
      );
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

