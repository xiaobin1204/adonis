'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/
const DB = use('Database')

const Route = use('Route')

Route.on('/').render('welcome')
//Route.get('/hello', ({ request }) => {
//  return `hello ~ ${ request.input('name') }`
//})
Route.get('/hello', 'HelloController.render')
Route.get('/posts', async () => {
  return await DB.table('posts').select('*')
})
