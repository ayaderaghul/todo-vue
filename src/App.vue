<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<style>
nav a {
  text-decoration: none;
  color: blue;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: darkblue;
}
</style>
