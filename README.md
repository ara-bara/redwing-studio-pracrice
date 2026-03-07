# Redwing Studio Practice

A practice **React e-commerce project** built to improve frontend development skills and simulate a real online store product page.

The project focuses on working with API data, React hooks, UI layout, and basic e-commerce logic.

---

## Features

• Product catalog loaded from API
• Product details page
• Add to cart functionality
• Recently viewed products
• Automatic discount calculation
• Product reviews
• Responsive layout

---

## Technologies

- React
- React Router
- JavaScript
- SCSS Modules
- Vite
- localStorage
- DummyJSON API

---

## API

The project uses the public API:

https://dummyjson.com/products

This API provides product data such as:

- title
- description
- price
- discountPercentage
- images
- rating
- category
- stock
- reviews

---

## Project Structure

```
src
 ├── components
 ├── context
 │    └── CartContext
 ├── pages
 │    ├── Home
 │    ├── Product
 │    └── Cart
 ├── utils
 │    ├── productApi
 │    ├── pricing
 │    └── formatMoney
 ├── styles
 └── App.jsx
```

---

## Pages

### Home

Displays the product catalog loaded from the API.

Includes:

- product cards
- filtering
- sorting
- navigation to product page

---

### Product Page

Detailed product page with:

- product image
- price and discount
- description
- product details
- add to cart button
- recently viewed products
- customer reviews

---

### Cart

Simple shopping cart with:

- added products
- quantity management
- total price calculation

---

## Installation

Clone the repository

```
git clone https://github.com/ara-bara/redwing-studio-practice.git
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

---

## Author

**Dmytro Valetskiy**
Frontend Developer (Trainee / Junior)

GitHub
https://github.com/ara-bara
