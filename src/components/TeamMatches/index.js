// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {iplTeamsList: {}, isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  formattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getIplTeams = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedTeamData = await response.json()
    const formattedTeamIplData = {
      teamBannerURL: fetchedTeamData.team_banner_url,
      latestMatch: this.formattedData(fetchedTeamData.latest_match_details),
      recentMatches: fetchedTeamData.recent_matches.map(eachMatch =>
        this.formattedData(eachMatch),
      ),
    }
    this.setState({iplTeamsList: formattedTeamIplData, isLoading: false})
  }

  renderRecentMatches = () => {
    const {iplTeamsList} = this.state
    const {recentMatches} = iplTeamsList

    return (
      <ul className="recent-list">
        {recentMatches.map(eachMatch => (
          <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {iplTeamsList} = this.state
    const {teamBannerURL, latestMatch} = iplTeamsList

    return (
      <div className="bg-container">
        <img src={teamBannerURL} alt="team banner" className="team-banner" />
        <LatestMatch latestMatchData={latestMatch} />
        {this.renderRecentMatches()}
      </div>
    )
  }

  renderLoader = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  getRouteClassNameForTeams = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state

    const className = `match-con ${this.getRouteClassNameForTeams()}`

    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
