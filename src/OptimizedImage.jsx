export default function OptimizedImage({
  image,
  alt,
  sizes,
  loading = 'lazy',
  fetchPriority,
  dataPlx = false,
}) {
  const priorityAttribute = fetchPriority ? { fetchpriority: fetchPriority } : {}

  return (
    <picture>
      <source
        type="image/avif"
        srcSet={`/img/${image}-480.avif 480w, /img/${image}-866.avif 866w`}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={`/img/${image}-480.webp 480w, /img/${image}-866.webp 866w`}
        sizes={sizes}
      />
      <img
        src={`/img/${image}.jpg`}
        alt={alt}
        loading={loading}
        {...priorityAttribute}
        decoding="async"
        width="866"
        height="1300"
        data-plx={dataPlx ? '' : undefined}
      />
    </picture>
  )
}
