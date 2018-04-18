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

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/posts', 'PostController.index')
Route.post('/posts', () => 'post request.')
Route.get('/post/:id', ({ params }) => {
  return `You're watching post ${ params.id }.`
})
Route.patch('/post/:id', ({ params }) => {
  return `Post ${ params.id } has been updated.`
})
Route.delete('/post/:id', ({ params }) => {
  return `Post ${ params.id } has been removed.`
})

Route
  .resource('docs', 'DocController')
  //.except(['index', 'show']) // 不允许请求的路由
  //.only(['index', 'show']) // 只允许请求的路由
  // .apiOnly() // 过滤掉创建和编辑路由 只提供查询
  //

Route
  .get('/users', () => 'List of uers.')
  .as('users.index') // 路由别名
