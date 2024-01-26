import { smartCities } from "@/data/smartCities";

type MenuLineProps = {
  number: number,
  name: string,
  country?: string,
  HDI?: number,
  rank?: number,
  rankChange?: number,
  generalRating?: string,
  structuresRating?: string,
  technologiesRating?: string,
}

function MenuLine({ 
  number,
  name,
  country,
  HDI,
  rank,
  rankChange,
  generalRating,
  structuresRating,
  technologiesRating,
}: MenuLineProps) {
  return (
    <div className='menu__grid cursor-pointer transition-colors hover:bg-[#191919]'>
      <p>{number}</p>
      <p className='font-semibold'>{name}</p>
      <p>{country}</p>
      <p>{HDI}</p>
      <p>
        {rank}
        {' '}
        <span className={`${!rankChange ? 'hidden' : rankChange > 0 ? 'text-lime-400' : 'text-red-500'}`}>
          ({rankChange})
        </span> 
      </p>
      <p>{generalRating}</p>
      <p>{structuresRating}</p>
      <p>{technologiesRating}</p>
    </div>
  )
}

export default function MapPage() {
  const MenuElements = Object.values(smartCities).map((element, index) => 
    <MenuLine
      key={element.name}
      number={index+1}
      name={element.name}
      country={element.country}
      HDI={element.content.HDI}
      rank={element.content.rank}
      rankChange={element.content.shifted_place}
      generalRating={element.content.general_rating}
      structuresRating={element.content.structures_rating}
      technologiesRating={element.content.technologies_rating}
  />)

  return (
    <div className='bg-primary-background text-white h-full rounded-t-3xl text-sm'>
      <header className='menu__grid *:font-medium'>
        <p>№</p>
        <p>Місто</p>
        <p>Країна</p>
        <p>Індекс людського розвитку</p>
        <p>Рейтингове місце</p>
        <p>Загальна оцінка</p>
        <p>Оцінка структур</p>
        <p>Оцінка технологій</p>
      </header>
      <main className='text-sm'>
        {MenuElements}
      </main>
    </div>
  )
}
