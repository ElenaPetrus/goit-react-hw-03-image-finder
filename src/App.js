import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Loader } from './components/Loader/Loader';
import { Button } from './components/Button/Button';
import { Modal } from './components/Modal/Modal';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { getPictures } from './services/apiService';

import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    query: '',
    setOfImages: [],
    page: 1,
    bigImg: null,
    showModal: false,
    status: 'idle',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.page !== page) {
      this.setState({ status: 'pending' });
      getPictures(query, page)
        .catch(error => this.setState({ error, status: 'rejected' }))
        .finally(() => this.setState({ loading: false }));
    }
    if (this.state.page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handlChangeQuery = e => {
    // console.log(e.currentTarget.value);
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.resetState();
    if (this.state.query.trim() === '') {
      toast.error('Nothing for request! Please type the word');
      return;
    }
    getPictures(this.state.query, this.state.page).then(response =>
      this.setState({ setOfImages: response, status: 'resolved' }),
    );
  };

  resetState = () => {
    this.setState({
      setOfImages: [],
      page: 1,
      error: null,
    });
  };

  onLoadMore = () => {
    const { query, page } = this.state;
    getPictures(query, page).then(img =>
      this.setState(prevState => ({
        setOfImages: [...prevState.setOfImages, ...img],
        page: prevState.page + 1,
        status: 'resolved',
      })),
    );
  };

  openModal = largeImageURL => {
    this.setState({
      showModal: true,
      bigImg: largeImageURL,
    });
  };

  closeModal = () => this.setState({ showModal: false });

  // toggleModal = largeImageURL => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  //   this.setState({ bigImg: largeImageURL });
  // };

  render() {
    return (
      <div>
        <Searchbar
          query={this.state.query}
          handleChange={this.handlChangeQuery}
          onSubmit={this.handleSubmit}
        />

        <ImageGallery
          images={this.state.setOfImages}
          page={this.state.page}
          onOpen={this.openModal}
          // onOpen={this.toggleModal}
        />

        {this.state.status === 'pending' && <Loader />}

        {this.state.setOfImages.length > 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        {this.state.showModal && (
          <Modal
            onClose={this.closeModal}
            // onClose={this.toggleModal}
            src={this.state.bigImg}
            alt={this.state.query}
          />
        )}
        <ToastContainer autoClose={2000} />
        {this.state.status === 'rejected' && (
          <ErrorMessage message={this.state.error} />
        )}
      </div>
    );
  }
}

export default App;