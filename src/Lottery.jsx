import { useState } from "react"
import "./Lottery.css"
import { genTicket , sum} from "./helper";
import Ticket from "./Ticket";
import "./Ticket.css"


export default function Lottery({n=3 ,winCondition}){

  let [ticket , setTicket] = useState(genTicket(3));

  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n))
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket}/>
      <button onClick={buyTicket}> Buy new Ticket </button>
      <h3>{isWinning && "Congratulations!!"}</h3>
    </div>
  )
}