# 🧠 Smart Task Manager (React)

A production-style task management application built with React, focusing on clean architecture, performance optimization, and real-world UX patterns.

---

## 🚀 Features

- ✅ Create, Edit, Delete tasks (CRUD)
- ✅ Task status management (Todo → In Progress → Done)
- ✅ Priority system (Low, Medium, High)
- ✅ Search & Filter tasks
- ✅ Sorting (by Priority / Status)
- ✅ URL-based state (filters & sorting)
- ✅ Persistent data using localStorage
- ✅ Form validation with error handling
- ✅ Modal-based task editing
- ✅ Responsive UI using Chakra UI

---

## 🧱 Tech Stack

- **React (Hooks)**
- **React Router (v5)**
- **Chakra UI**
- **Context API (State Management)**
- **localStorage (Persistence)**

---

## 📂 Project Structure
src/
├── components/
│ ├── common/
│ │ ├── TaskCard.jsx
│ │ ├── EditTaskModal.jsx
│
├── context/
│ └── TaskContext.jsx
│
├── pages/
│ ├── Dashboard/
│ ├── Tasks/
│ ├── CreateTask/
│
├── utils/
│ └── validation.js
│
├── App.jsx
├── main.jsx


---

## 🧠 Key Concepts Implemented

### 1. State Management
- Global state handled using **Context API**
- Avoided prop drilling
- Centralized business logic

---

### 2. Derived State
- Filtering & sorting handled using **useMemo**
- No duplication of state
- Improved performance

---

### 3. URL-Driven State
- Filters & sorting stored in query params:

/tasks?search=bug&status=todo&priority=high&sort=priority


Benefits:
- Shareable links
- Browser navigation support
- Single source of truth

---

### 4. Immutability
- State updates done using:
  - `map`
  - `filter`
  - spread operator

Avoided:
- Direct mutation

---

### 5. Performance Optimization
- Used `useMemo` to prevent unnecessary recalculations
- Avoided unnecessary re-renders

---

### 6. Form Handling
- Controlled inputs
- Centralized form state
- Validation using reusable utility functions

---

### 7. useRef Usage
- Auto-focus input field in modal
- DOM interaction without re-render

---

### 8. Clean Architecture
- Separation of concerns:
  - UI → Components
  - Logic → Hooks / Utils
  - State → Context

---

## 🧪 Validation

- Required field validation
- Error state handling
- Disabled submit button for invalid input

---

## 💾 Persistence

- Tasks stored in **localStorage**
- Data persists across refresh

---

## ⚠️ Important Decisions

### ❌ Not using index as key
- Avoided unstable UI behavior

### ❌ Not storing derived state
- Prevented sync issues

### ❌ Not mutating state
- Ensured React re-render consistency

---

## 📈 Future Improvements

- Backend integration (Node.js / API)
- Authentication
- Drag & Drop tasks
- Pagination / Infinite scroll
- State management upgrade (Zustand / Redux)
- Unit testing

---

## ▶️ Getting Started

```bash
npm install
npm run dev
