import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Photo Gallery
          </h1>
          <p className="mt-2 text-gray-600">
            Browse photos from Lorem Picsum and save the ones you love.
          </p>
        </header>

        <main>
          <Gallery />
        </main>
      </div>
    </div>
  )
}

export default App
