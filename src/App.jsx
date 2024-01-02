import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Container } from "./components/Container/Container";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { Modal } from 'components/Modal/Modal';
import { getAllImages } from "./api/gallery";

export class App extends Component {
  state = {
    page: 1,
    per_page: 12,
    key: "",
    images: [],
    isLoading: false,
    error: "",
    isEnd: false,
    isModal: false,
    largeImg:"",
  }

  handleOnSearch = (keyWord) => {
    this.setState({
      key: keyWord,
      page: 1,
      images: [],
        })
  }

  handleOnClick = () => {
    this.setState((prevState)=>{
      return {
        page: prevState.page+1,
      }
      })
  }

  showModal = (url) => {
    this.setState({
        isModal: true,
        largeImg:url,
    })
  }

  closeModal = () => {
    this.setState({
        isModal: false,
    })
  }


  getData = async () => {
    try {
      this.setState({isLoading: true, error: "",})
      const response = await getAllImages(this.state)
      this.setState((prevState) => {
        return {
          images: [...prevState.images, ...response.hits],
          isEnd: true,
      }
      })
      if (Number.parseInt(response.totalHits / this.state.per_page) <= this.state.page) {
        this.setState({
        isEnd: false,
        })
      } 
      if (!response.totalHits) {
        Notify.info(`no images for this "${this.state.key}"`);
      }
    } catch (error) {
      console.log(error.message);
      this.setState({
        error:error.message,
      })
    } finally {
      this.setState({isLoading:false,})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.key !== this.state.key || prevState.page !== this.state.page) {
      this.getData()
    }
  }

  render() {
    const { images, isLoading ,error, isEnd,key, isModal} = this.state;
    return (
      <Container Container>
        <Searchbar handleOnSearch={this.handleOnSearch} />
        {isLoading && <Loader/>}
        {error&& <Error>{error}</Error>}
        {images.length !== 0 && <ImageGallery images={images} showModal={this.showModal} />}
        {images.length !== 0 && isEnd && <Button handleOnClick={this.handleOnClick} />}
        {images.length !== 0 && !isEnd && <p>No more images for "{key}"</p>}
        {isModal && <Modal closeModal={this.closeModal} largeImg={this.state.largeImg} />}
      </Container>
  )
  }
};
