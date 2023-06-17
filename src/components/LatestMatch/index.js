// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="match-container">
      <h1 className="match-head">Latest Matches</h1>
      <div className="latest-card">
        <div className="latest-match-con">
          <div className="latest-details">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue-res">{venue}</p>
            <p className="venue-res">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="image"
          />
        </div>
        <hr className="line" />
        <div className="latest-details-2">
          <p className="innings-label">First Innings</p>
          <p className="innings-value">{firstInnings}</p>
          <p className="innings-label">Second Innings</p>
          <p className="innings-value">{secondInnings}</p>
          <p className="innings-label">Man Of The Match</p>
          <p className="innings-value">{manOfTheMatch}</p>
          <p className="innings-label">Umpires</p>
          <p className="innings-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
