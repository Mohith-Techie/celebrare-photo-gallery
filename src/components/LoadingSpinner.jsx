function LoadingSpinner() {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-3 py-20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-gray-800" />
      <span className="text-sm text-gray-500">Loading photos...</span>
    </div>
  )
}

export default LoadingSpinner
