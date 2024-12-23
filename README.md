# RPC Limo Service - Next.js Project

## Project Overview
This project demonstrates the use of **Next.js**, **Tailwind CSS**, and **Redux** to build a responsive, visually appealing, and user-friendly web application. The application replicates the design and functionality of the RPC Limo Service website, focusing on clean code and maintainability. The project is deployed on Vercel and includes a login page integrated with a provided API endpoint.

---

## Features
### Framework & Tools
- **Framework**: Next.js
- **State Management**: Redux
- **Styling**: Tailwind CSS

### Sections Implemented
1. **Header & Footer**
   - Fully responsive navigation bar with links such as Home, About, Service, Fleet, and Contact Us.
   - Footer with Quick Links, Services, social media integration, and app download buttons.

2. **Quick Price Check**
   - Displays starting prices for different services (hourly rates, airport transfers, etc.).

3. **Discover Our Fleet**
   - A carousel showcasing vehicles in the fleet with descriptions, capacities, and features.

4. **Frequently Asked Questions (FAQ)**
   - Interactive dropdowns that allow users to view detailed answers for each question. Only one answer is visible at a time.


6. **Login Page**
   - A responsive login form with:
     - Email and password input fields.
     - API integration to authenticate users via the provided endpoint.
     - Form validation and error handling.
     - Redux integration to store the authentication token.

---

## Technologies Used
- **Next.js**: For server-side rendering and routing.
- **Tailwind CSS**: For fast and responsive styling.
- **Redux**: For managing the application's state.
- **React-Multi-Carousel**: For fleet section carousels.
- **Axios**: For API calls.

---

## API Integration
### Login API
**Endpoint**: `POST https://api.zsimarketing.com/api/auth/user/login`

**Request Body**:
```json
{
  "email": "testuser@gmail.com",
  "password": "testuser@gmail.com"
}
```

**Response Handling**:
- Store the received `token` in Redux for future authenticated requests.
- Handle errors such as invalid credentials with user-friendly messages.

### Example API Response:
```json
{
  "data": {
    "token": "",
    "user": {
      "email": "testuser@gmail.com",
      "name": "Test User",
      "category": null,
      "email_verified": false
    }
  },
  "isError": false,
  "error": null,
  "status_code": 200
}
```

---

## Deployment
The project is deployed on Vercel. You can view the live application here:
[Live Demo](https://zsi-ai-eight.vercel.app)

---

## Folder Structure
```
src
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── login
│       └── page.jsx
├── components
│   ├── DiscoverFleet
│   │   ├── DiscoverFleet.jsx
│   │   └── FleetTab.jsx
│   ├── FrequentlyAskedQuestions
│   │   └── FrequentlyAskedQuestions.jsx
│   └── QuickPriceCheck
│       └── QuickPriceCheck.jsx
├── hooks
│   └── useTitle.jsx
├── provider
│   └── ReduxProvider.js
├── redux
│   ├── authSlice.js
│   └── store.js
├── shared
│   ├── Footer
│   │   └── Footer.jsx
│   └── navbar
│       └── Navbar.jsx

```

---


## Author
Developed by **MOSTOFA FATIN**

For any questions or feedback, please feel free to reach out to [mostofafatin.developer@gmail.com](mailto:mostofafatin.developer@gmail.com).



