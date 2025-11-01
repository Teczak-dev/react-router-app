# react-router-app

Lekka aplikacja demonstracyjna stworzona z użyciem React + Vite + React Router. Projekt pokazuje podstawowe wzorce routingu (w tym nested routes), prostą strukturę admina, przykład ładowania danych z lokalnych plików oraz podstawowe komponenty UI.

## Najważniejsze cechy
- Routing z użyciem `react-router-dom` (wersja używana w projekcie: ^7.x)
- Szybkie środowisko deweloperskie oparte na Vite
- Przykład nested routes (panel admina)
- Proste dane demonstracyjne w `data/posts.js` i `data/users.js`
- Obsługa stron: Home, Games, GameDetails, Blog, BlogPost, About, Contact, Login, NotFound

## Tech stack
- React 19
- Vite
- react-router-dom

## Wymagania wstępne
- Node.js (zalecana wersja LTS)
- NPM

## Szybkie uruchomienie (lokalnie)
1. Zainstaluj zależności:
```
npm install
```

2. Uruchom środowisko deweloperskie:
```
npm run dev
```
## Struktura projektu (ważniejsze pliki / katalogi)
- `index.html` — punkt wejściowy Vite
- `package.json` — skrypty i zależności
- `vite.config.js` — konfiguracja Vite
- `src/` — źródła aplikacji
  - `main.jsx` — bootstrap React
  - `index.css` — globalne style
  - `components/` — komponenty współdzielone (np. `Navigation`, `Layout`, `AdminLayout`, `GameCard`)
  - `pages/` — strony routowane (np. `Home.jsx`, `Games.jsx`, `GameDetails.jsx`, `Blog.jsx`, `BlogPost.jsx`, `Admin*`)
- `data/`
  - `posts.js` — przykładowe posty blogowe
  - `users.js` — przykładowi użytkownicy

## Routing — krótki przegląd
Aplikacja wykorzystuje `react-router-dom` do zarządzania trasami. W projekcie znajdziesz:
- Główne trasy użytkownika (Home, Games, Blog, About, Contact)
- Route z parametrem (`/games/:gameId` -> `GameDetails.jsx`)
- Sekcję admina z nested routes (np. `/admin`, `/admin/users`, `/admin/settings`)

Sprawdź `src/main.jsx` dla konkretnej konfiguracji routera.

## Dane demo
Aplikacja korzysta z lokalnych modułów z folderu `data/`:
- `data/posts.js` — przykładowe wpisy blogowe używane przez `Blog.jsx` i `BlogPost.jsx`
- `data/users.js` — przykładowa lista użytkowników dla widoku admina

## Styl i komponenty
- Prosty CSS w `src/index.css` oraz komponentowy plik `GameCard.css` dla karty gry.
- Komponenty są budowane jako funkcjonalne komponenty React (JSX).
