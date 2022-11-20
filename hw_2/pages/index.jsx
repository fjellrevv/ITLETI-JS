import React, { useState, useEffect } from 'react'
import { List } from '../components/List/List';
import { Button } from '../components/Button/Button';

export default function IndexPage() {
  let [content, setContent] = useState(null, "");
  let [value, setValue] = useState(""); 
  let [urlPhoto, setUrlPhoto] = useState(""); 
  let [page, setPage] = useState(0); 

  function handleClick(e) {
    e.preventDefault();
    if (!value) return;
    setContent(LastState => [{ title: value, thumbnailUrl: urlPhoto } , ...(LastState || [])]); 
    setValue("");
    setUrlPhoto("");
  }
  
  useEffect (() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(obj => setContent(obj));
  }, []);
  
  return (

    <div>
      <form onSubmit = {handleClick}>
        Name: <p><input type="text" value = {value} onChange = {e => setValue (e.target.value)} /></p>
        Link:<p><input type="url" value = {urlPhoto} onChange = {e => setUrlPhoto (e.target.urlPhoto)} /></p>
        <Button type = "submit">Add photo</Button>
      </form>

      
      {content && <List content={content?.slice(page * 5, (page + 1) * 5)} />}

      <p></p>

      <Button type = "button" onClick={() => setPage(p =>  p + 1)}>
       To page {page+2}
        </Button>

      {page ? (
       <Button type = "button" onClick={() => setPage(p =>  p - 1)}>
       To page {page}
        </Button>
      ) : (
       []
      )}

    </div>
  );

 

}