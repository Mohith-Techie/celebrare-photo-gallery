function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  const imageUrl = `https://picsum.photos/id/${photo.id}/600/400`

  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md">
      <img
        src={imageUrl}
        alt={`Photo by ${photo.author}`}
        loading="lazy"
        className="h-56 w-full bg-gray-100 object-cover"
      />

      <div className="flex items-center justify-between gap-3 p-4">
        <p className="truncate font-medium text-gray-800">{photo.author}</p>

        <button
          type="button"
          onClick={onToggleFavourite}
          aria-label={
            isFavourite
              ? `Remove photo by ${photo.author} from favourites`
              : `Add photo by ${photo.author} to favourites`
          }
          className={`shrink-0 rounded-full p-2 transition-colors hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:outline-none ${
            isFavourite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill={isFavourite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default PhotoCard
