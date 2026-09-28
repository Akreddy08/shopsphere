# ShopSphere – Final React Frontend Project

A complete responsive e-commerce frontend built for the React training Task 15.

## Run

```bash
npm install
npm run dev
```

Open the URL shown by Vite, usually `http://localhost:5173`.

## Features / syllabus mapping

- Components: reusable Navbar, Footer, ProductCard, Loader, Modal-style UI
- Props: ProductCard receives product information
- useState: forms, filters, search, UI state
- useEffect: API loading and local persistence
- useRef: contact form focus
- useContext: authentication and theme
- useReducer: cart state reducer
- Conditional rendering: loading, empty states, authentication
- List rendering: products, categories, orders
- API integration: Fake Store API
- Custom hooks: useFetch and useLocalStorage
- React Router DOM: all main pages
- Nested routing: `/products/*` with category routes
- useParams: product detail and category routes
- useSearchParams: search and price filters
- CRUD: Admin Products page (create, read, update, delete)
- Form validation: login, register, contact, admin product form
- Redux Toolkit: cart and wishlist slices
- Responsive UI: mobile/tablet/desktop CSS

## Demo

The login is frontend-only for demonstration. Any valid email/password pair with 6+ characters can be used.

Admin CRUD changes are stored in localStorage under `shopsphere_admin_products`.

## API

Products are loaded from Fake Store API:
https://fakestoreapi.com/products

If the API is unavailable, the app falls back to built-in demo products.
