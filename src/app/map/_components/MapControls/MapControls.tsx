import Image from 'next/image'

export default function MapControls() {
  return (
    <>
      <div className='absolute left-4 top-4 z-[1000] grid gap-2 w-[3rem] *:px-2 *:py-4'>
        <div className='map__control'>
          <Image
            src='/icons/search.svg'
            alt='Search Icon'
            width={18}
            height={18}
          />
        </div>
        <div className='map__control'>
          <Image
            src='/icons/plus.svg'
            alt='Search Icon'
            width={18}
            height={18}
          />
          <br/>
          <Image
            src='/icons/minus.svg'
            alt='Search Icon'
            width={18}
            height={18}
          />
        </div>
        <div className='map__control'>
          <Image
            src='/icons/filter.svg'
            alt='Search Icon'
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className='absolute right-4 bottom-4 z-[1000]'>
        <div className='map__control grid-flow-col gap-2 px-6 py-2'>
          <Image
            className='rounded-sm'
            src='/ukrainianFlag.jpg'
            alt='Ukrainian Flag'
            width={25}
            height={16}
          />
          <div className='text-sm *:text-sm'>
            <a href='https://leafletjs.com/' target='_blank'>Leaflet</a> 
            {' | ⓒ '}
            <a href='http://www.openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a> 
            {' ⓒ '} 
            <a href='http://cartodb.com/attributions' target='_blank'>CargoDB</a>
          </div>
        </div>
      </div>
    </>
  )
}