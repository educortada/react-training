import React, { Component } from 'react'

class Bitcoin extends Component {
  state = { bpi: {} }
  componentDidMount () {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())

    .then(myJson => {
        const {bpi} = myJson
        this.setState({ bpi })
    })
  }
  _renderCurrencies(){
    const {bpi} = this.state
    console.log(bpi)
    const currencies = Object.keys(bpi) // ['USD', 'GBP', 'EUR']
    console.log(currencies)
    return (
      currencies.map(currency => (       
        <div key={currency}>
          1 BTC is {bpi[currency].rate} {currency}
        </div>
      ))
    )
  }
  render(){
    return(
      <div>
        <h4>Bitoin</h4>
        {this._renderCurrencies()}
      </div>

    )
  }
}
export default Bitcoin
