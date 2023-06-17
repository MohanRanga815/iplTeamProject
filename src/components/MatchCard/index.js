// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails

  const getMatchStatus = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchStatusClassName = `match-status ${getMatchStatus(matchStatus)}`

  return (
    <li className="match-lists">
      <img
        src={competingTeamLogo}
        className="logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="compete-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
