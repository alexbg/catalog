import { useState } from "react";

interface PlaceHolderImage {
  url: string;
  alt: string;
}

/**
 * It component show a placeholder while the image is loading
 * It use the css property display to hide or show the image and the placeholder
 * @param url string
 * @param alt string
 * @returns 
 */
export default function PlaceHolderImage({url, alt}: PlaceHolderImage) {
  const [loaded, setLoaded] = useState(false);
  console.log(url);

  const displayPlaceholder = !loaded ? 'flex' : 'none';
  const displayImage = loaded ? 'block' : 'none';
  return (
    <>
      <img className='image' src={url} alt={alt} onLoad={() => setLoaded(true)} style={{display: displayImage}}/>
      <div className='placeholder placeholder--image' style={{display: displayPlaceholder}}>LOADING IMAGE</div>
    </>
  )
}