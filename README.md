# 📋 Vue 3 Todo App with Vue Router
A simple Todo List application built with Vue 3 and Vue Router ([vercel deployed](https://todo-vue-gamma-one.vercel.app/)), featuring:

Add, remove, and mark tasks as completed ✅

Dynamic routing to view todo details 🔗

Persistent storage using LocalStorage 💾

Navigation between Home, About, and Todo Details pages 📄

# 🚀 Features
Vue 3 Composition API for reactive state management

Vue Router for multiple pages and dynamic routes

LocalStorage for data persistence between sessions

UUID for unique task IDs

Responsive and minimal UI

# 📂 Project Structure

```bash

src/
  pages/
    Home.vue         # Main Todo List
    About.vue        # About page
    TodoDetail.vue   # View details of a single todo
  router/
    index.js         # Vue Router setup
  App.vue            # Main app layout with navigation
  main.js            # Entry point
```

# 🛠 Installation
Make sure you have Node.js (v18 or higher) installed.
Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/vue-todo-router.git
cd vue-todo-router
npm install
```

# 🖥 Run the App (Development)
```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

# 📦 Build for Production
```bash
npm run build
```

The build will be generated in the dist/ folder.
You can deploy it to Netlify, Vercel, GitHub Pages, or any static hosting service.

# 📌 Usage
Home Page

Add a new todo via the input box.

Click a todo to view details.

Click ❌ to delete.

About Page

Static info about the app.

Todo Details Page

Shows text and status of the selected todo.

# 🔧 Tech Stack
Vue 3 (Composition API)

Vue Router

LocalStorage for persistence

# 📝 License
MIT License — feel free to use and modify as you wish.
