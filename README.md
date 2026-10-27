# Photo Gallery

A small React + Vite + Tailwind CSS app for the Celebrare frontend internship assignment.

It fetches 30 photos from the [Lorem Picsum API](https://picsum.photos/v2/list?limit=30), shows them in a responsive grid, lets you search by author, and lets you mark favourites that are saved in `localStorage`.

## Run locally

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

## Structure

```
src/
  components/
    Gallery.jsx          search state, useCallback, useMemo, useReducer, grid
    PhotoCard.jsx        image, author name, heart button
    SearchBar.jsx        controlled search input
    LoadingSpinner.jsx   loading indicator
  hooks/
    useFetchPhotos.js    custom hook: returns { photos, loading, error }
  reducers/
    favouritesReducer.js TOGGLE_FAVOURITE reducer + safe localStorage loader
  App.jsx                page header and layout
  main.jsx               React entry point
  index.css              Tailwind import
```
