import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Box from './children.js';

export default class Article extends Component{
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  render(){
    const {title, author, date, children} = this.props
    return(
      <section style ={{padding: 12, background: '#f2f2f2'}}>
        <h2>{title}</h2>
        <p><em>Escrito por {author}</em></p>
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}