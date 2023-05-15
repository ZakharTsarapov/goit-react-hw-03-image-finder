import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {
    onClick = () => {
        const { img } = this.props;
    this.props.onGetModalImg(img.largeImageURL, img.tags);
    this.props.toggleModal();
  };

    render() {
      const { img } = this.props;
    return (
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItem__image}
          onClick={this.onClick}
          src={img.webformatURL}
          alt={img.tags}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onGetModalImg: PropTypes.func.isRequired,
};

