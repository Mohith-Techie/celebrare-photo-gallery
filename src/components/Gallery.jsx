import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import useFetchPhotos from '../hooks/useFetchPhotos'
import { favouritesReducer, loadFavourites, STORAGE_KEY } from '../reducers/favouritesReducer'
import LoadingSpinner from './LoadingSpinner'
import PhotoCard from './PhotoCard'
import SearchBar from './SearchBar'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()
  const [searchQuery, setSearchQuery] = useState('')
  const [favourites, dispatch] = useReducer(favouritesReducer, [], loadFavourites)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites))
  }, [favourites])

  const handleSearchChange = useCallback((event) => {
    setSearchQuery(event.target.value)
  }, [])

  const filteredPhotos = useMemo(() => {
    const query = searchQuery.toLowerCase()
    return photos.filter((photo) => photo.author.toLowerCase().includes(query))
  }, [photos, searchQuery])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return (
      <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
        {error}
      </p>
    )
  }

  return (
    <section>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />

      {filteredPhotos.length === 0 ? (
        <p className="py-10 text-center text-gray-500">No photos found for "{searchQuery}".</p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <li key={photo.id}>
              <PhotoCard
                photo={photo}
                isFavourite={favourites.includes(photo.id)}
                onToggleFavourite={() => dispatch({ type: 'TOGGLE_FAVOURITE', id: photo.id })}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Gallery
