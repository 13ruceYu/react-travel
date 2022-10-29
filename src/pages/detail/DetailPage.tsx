import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
  touristRouteId: string
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  return <h1>DetailPage, route id: {props.match.params.touristRouteId}</h1>
}