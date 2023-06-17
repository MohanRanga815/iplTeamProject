// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    <li className="team-card-con">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageURL} alt={name} className="image" />
        <p className="heading">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
