import React from 'react'
import { useParams } from 'react-router-dom'

type MatchParams = {
  touristRouteId: string
}

export const DetailPage: React.FC = () => {
  const params = useParams<MatchParams>()
  return <h1>DetailPage, route id: {params.touristRouteId}</h1>
}