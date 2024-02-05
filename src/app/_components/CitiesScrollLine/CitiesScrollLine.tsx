export default function CitiesScrollLine({ cities }: { cities: string[] }) {
  const cityElements = cities.map(city => 
    <p key={city} className='text-base font-light transition-[color] cursor-pointer hover:text-primary'>{city}</p>
  )


  return (
    <div className='flex gap-20 flex-nowrap bg-primary/3 border-primary/15 border-1 w-screen py-4 *:text-nowrap'>{cityElements}</div>
  )
}