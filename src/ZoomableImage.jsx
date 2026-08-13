export function ZoomableImage({ src, alt, className, imageClassName = "", onPreview }) {
  const image = <img className={imageClassName || undefined} src={src} alt={alt} loading="lazy" />;

  if (!onPreview) {
    return image;
  }

  return (
    <button className={className} type="button" onClick={() => onPreview({ src, alt })} aria-label={`放大查看 ${alt}`}>
      {image}
    </button>
  );
}

