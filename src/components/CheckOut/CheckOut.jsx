import React from 'react'
import { Payment } from './Payment'
import { Summary } from './Summary'

export function CheckOut() {
    const ticketDetails = JSON.parse(sessionStorage.getItem("BookingDetails"));
  return (
    <div>
        <Summary BookingDetails={ticketDetails} />
        <Payment />
    </div>
  )
}
