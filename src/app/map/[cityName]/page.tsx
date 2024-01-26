import { smartCities } from '@/data/smartCities'
import { City } from '../../../data/cityType'

export default function Page({ params }: { params: { cityName: string } }) {
  const currentCity: City = smartCities[params.cityName];

  return (
    <div>
      <div>{currentCity.name} | {currentCity.country}</div>
    </div>
  )
}

