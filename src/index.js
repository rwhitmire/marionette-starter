/**
 * Import bootstrap scss.
 */

import './styles/bootstrap/bootstrap.scss'

/**
 * Import custom scss separately. This drastically
 * improves rebuild times for custom scss
 */

import './styles/site.scss'

/**
 * Import bootstrap.js module - not to be confused
 * with bootstrap.css included above.
 */

import 'bootstrap'
import 'jquery-validation'

import Backbone from 'backbone'
import app from './app'

import './router'

app.start()
Backbone.history.start()
