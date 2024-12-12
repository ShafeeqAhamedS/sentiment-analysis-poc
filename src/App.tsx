import DashboardComponent from './components/DashboardComponent/DashboardComponent'
import TicketCategorization from './components/TicketCategorization/TicketCategorization'
import './components/TicketCategorization/TicketCategorization.css'

const App = () => {
  return (
    <div>
      <DashboardComponent/>
      <TicketCategorization></TicketCategorization>
    </div>
  )
}

export default App