# Project Documentation - Plane_Meals-Assignment

## Table of Contents

1. Introduction
   - Purpose
   - Scope
   - Technology Stack

2. Design
   - Overview
   - UI Elements
   - Responsiveness

3. Implementation Steps
   - Setting Up the Project
   - React Structure
   - API Endpoints

4. Screenshots

5. Conclusion

---

## 1. Introduction

### Purpose

The purpose of this project is to develop a responsive web application for Plane_Meals, replicating the provided UI design. The application allows users to get thier desired Meals and Drinks in thier Flight Duration with filtered options with Gmail authentication.

### Scope

The project's scope includes building the user interface using React, Redux, Firebase, Local Storage, Material UI, with Node.js APIs to fetch the dataset from a data store and do pagination on filtered meals.


### Technology Stack

The technology stack used for this project includes:

- React
- Redux
- Firebase
- Material UI
- Local Storage
- Specific API endpoints

---

## 2. Design

### Overview

The design provided serves as the basis for the user interface of the web application. It includes various sections, elements, and styles that need to be replicated in the final project.

### UI Elements

The design elements, such as headings, buttons, Meal List & Cards, and images, were carefully matched with the design to ensure visual consistency.

The UI elements present in the design include:

- NavBar
- Filtererd Tags
- Meals List
- Paination
- Cart

### Responsiveness

The design should be made fully responsive to ensure optimal user experience across different devices, such as desktops, tablets, and mobile phones.

---

## 3. Implementation Steps

### Setting Up the Project

1. npm install on both frontend and backend directories
2. npm start on frontend app to start the client webpage
3. node app.js on backend app to start ther server for taking requests

### React Structure

src
  - components
    - Header.js
    - Auth.js
    - Main.js
    - FilterTags.js
    - MealList.js
    - MealCard.js
    - Sidebar.js
    - Cart.js
    - CartCard.js
  - images
  - redux
    - store.js
    - cartSlice.js
  - utils
    - firebase.js
    - useFetch.js

### CSS Styling

1. Style the navigation bar, meals list, components, and cart elements to match the design.
2. Ensure responsiveness by using media queries and flexbox layout.

### API Endpoints

- GET /meals?page=1&limit=3&tag=all: Get a list of meals with pagination and filtering options.
- GET /labels: Get a list of available tags.

---


## 4. Screenshots

### Loading
-
    ![0](https://github.com/mayank-singh-care/Plane_Meals-Assignment/assets/31184015/bb68028a-95ed-4e7a-8bb4-8b5500c907f1)

### Main Page
-
    ![1](https://github.com/mayank-singh-care/Plane_Meals-Assignment/assets/31184015/f459ccc8-c9fc-46ec-a2b7-d33dad1f7aed)

### Pagination
-
    ![2](https://github.com/mayank-singh-care/Plane_Meals-Assignment/assets/31184015/5aa7164c-40c7-4931-b088-31ad5c275bfa)

### Firebase Gmail Login
-
    ![3](https://github.com/mayank-singh-care/Plane_Meals-Assignment/assets/31184015/6e5dc7dc-ada4-4003-a438-d217947739db)

### Meals & Drinks Selected according to Passengers
-
    ![4](https://github.com/mayank-singh-care/Plane_Meals-Assignment/assets/31184015/439e11dc-f03d-4f2b-b6ba-358601e9e5ee)

### Cart & Logout button
-
    ![5](https://github.com/mayank-singh-care/Plane_Meals-Assignment/assets/31184015/5c18f72a-1633-4908-a1da-f010771aca22)

### Filter Meals
-
    ![6](https://github.com/mayank-singh-care/Plane_Meals-Assignment/assets/31184015/ed5ed608-97ca-4b27-bce1-32f07bc8d83b)

### Cart
-
    ![7](https://github.com/mayank-singh-care/Plane_Meals-Assignment/assets/31184015/0932b26e-7803-492a-8052-47cee1ba49c3)

### Local Storage
-
    ![9](https://github.com/mayank-singh-care/Plane_Meals-Assignment/assets/31184015/7fed79ba-0129-4159-9627-058441e46803)

### Responsive
-
    ![10](https://github.com/mayank-singh-care/Plane_Meals-Assignment/assets/31184015/0112644d-2f68-4200-96f5-9affaf9b4910)
    ![11](https://github.com/mayank-singh-care/Plane_Meals-Assignment/assets/31184015/4cc39bff-af2b-426c-91a4-e7d21805c8bf)

---

## 5. Conclusion

In conclusion, the Plane_Meals Assignment was successfully completed by developing a responsive web application based on the provided design.

The final application is a fully functional and user-friendly solution that meets the requirements of the assignment and provides seamless user experience, and deploys to Netlify - [https://piramal-assignment.netlify.app/](https://plane-meals.netlify.app/) with Nodejs API Link - [https://plane-meals-backend.onrender.com/labels](https://plane-meals-backend.onrender.com/labels).
