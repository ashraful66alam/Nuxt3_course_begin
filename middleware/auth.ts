

// export default defineNuxtRouteMiddleware((to, from) => {
//     const isLoggedIn = true;
//     if (isLoggedIn) {
//         return navigateTo(to.fullPath);
//     }
//     return navigateTo('/login');
// })
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Hello form middleware auth')
  // Replace with the route you're checking from, for example '/login'
  const allowedFromRoute = '/custom'

  if (from.path !== allowedFromRoute) {
    return navigateTo('/') // Redirect or block as needed
  }


})