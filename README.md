# **Portfolio Web Application**

## **Overview**

This portfolio web application, built with JavaScript, React, and Supabase, currently includes Home, About, Contact, and Portfolio pages and is designed with scalability in mind, with future plans to incorporate data structures, algorithms, and AI.
---

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
* MongoDB (as a potential alternative backend solution)

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

## **Known Issues**

The contact form is currently not functioning as intended due to a Supabase account expiration. The project exceeded the 90 day usage period. I am actively working on resolving the issue. 

All other features of the application remain functional.

---

## **Future Improvements**

* Integrate data structures and algorithms into application features
* Add AI driven functionality
* Implement authentication to restrict access to admin features
* Create a private Messages page accessible only within the application
* Restrict Portfolio page controls so only the owner can add or remove projects
* Replace the hero image

