# **Portfolio Web Application**

## Overview 

This portfolio web application is built with JavaScript, React, and Supabase, and currently includes Home, About, Contact, and Portfolio pages. It is structured for scalability, with plans to incorporate data structures, algorithms, and AI in the future.

## **Features**

* Dynamic UI built with React
* Reusable component based architecture
* Portfolio page with dynamic project management (add/remove functionality)
* Contact form with Supabase integration for data persistence
* Form state management using React hooks (useState and useEffect)
* Scalable structure for future enhancements

---

## **Tech Stack**

* JavaScript
* React
* Supabase
* HTML
* CSS

**Planned Technologies:**

* Express
* MongoDB 

---

## **Problem**

The original version of this application was built using vanilla JavaScript, HTML, and CSS. As the project grew, the codebase became difficult to manage, reuse, and scale.

---

## **Solution**

The application was rebuilt using React to improve code organization, reusability, and scalability. This allows for more efficient development and easier expansion of features over time.

---

## **Getting Started**

### **Prerequisites**

* Node.js (includes npm)

Install dependencies:

```bash
npm install
```

---

## **Running the Application**

Start the development server:

```bash
npm start
```

The app will run locally at:

```
http://localhost:3000
```

---

## **Environment Variables**

To enable Supabase functionality, create a `.env` file in the root directory and add:

```bash
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_anon_key
```

---


## **Future Improvements**

* Make the layout responsive for mobile and tablet devices
* Replace the hero image
* Integrate data structures and algorithms into application features
* Add AI driven functionality
* Implement authentication to restrict access to admin features
* Create a private Messages page accessible only within the application
* Restrict Portfolio page controls so only the owner can add or remove projects


