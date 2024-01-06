import { useState, useEffect, createContext, useRef } from "react"
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Container } from "./components/Container/Container";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { Modal } from 'components/Modal/Modal';
import { getAllImages } from "./api/gallery";

export const MyContext = createContext();

export const App = () => {
  const [page, setPage] = useState(1);
  const [key, setKey] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEnd, setIsEnd] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [largeImg, setLargeImg] = useState('');

  const perPage = useRef(12);

  const handleOnSearch = (keyWord) => {
    setKey(keyWord);
    setPage(1);
    setImages([]);
  }

  const handleOnClick = () => {
    setPage((prev)=> prev+1)
  }

  const showModal = (url) => {
    setIsModal(true);
    setLargeImg(url);
  }

  const closeModal = () => {
    setIsModal(false);
    setLargeImg("");
  }

  useEffect(() => {
    if (!key) return;
    const getData = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await getAllImages({ key, page, perPage });
      setImages((prev) => [...prev, ...response.hits]);
      setIsEnd(true);
      if (Number.parseInt(response.totalHits / perPage.current) <= page) {
        setIsEnd(false);
      } 
      if (!response.totalHits) {
        Notify.info(`no images for this "${key}"`);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
    }
    getData()
  },[key,page])

  return (
    <MyContext.Provider value={{handleOnSearch,images,showModal,handleOnClick,closeModal,largeImg,}}>
      <Container>
        <Searchbar/>
        {isLoading && <Loader/>}
        {error&& <Error>{error}</Error>}
        {images.length !== 0 && <ImageGallery/>}
        {images.length !== 0 && isEnd && <Button/>}
        {images.length !== 0 && !isEnd && <p>No more images for "{key}"</p>}
        {isModal && <Modal closeModal={closeModal} largeImg={largeImg} />}
      </Container>
    </MyContext.Provider>
  )
}
