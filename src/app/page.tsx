import Image from 'next/image'
import InfoCard from './_components/InfoCard/InfoCard'
import CitiesScrollLine from './_components/CitiesScrollLine/CitiesScrollLine'
import PrimaryButton from './_components/PrimaryButton/PrimaryButton'


export default function Home() {
	return (
    <>
      <header className='fixed top-0 z-1 inset-x-0 flex justify-between items-center h-[5rem] px-8 font-medium backdrop-blur backdrop-brightness-[80%] shadow-xl'>
        <div>
          <p>Smart Cities Map</p>
        </div>
        <div className='flex items-center gap-8'>
          <p>UA</p>
          <PrimaryButton>Try it</PrimaryButton>
        </div>
      </header>
      <main className='grid place-items-center'>
        <section className='relative flex flex-col items-center justify-center bg-introduction-image bg-cover gap-[7.5rem] 
        [--wave-height:10rem] h-[calc(100dvh+var(--wave-height))] w-screen'>
          <div className='grid place-items-center gap-8 text-center'>
            <h1>Інтерактивна <br/> мапа розумних міст</h1>
            <p className='w-[36.2rem] text-base'>Інтерактивна мапа розумних міст - важливий та зручний інструмент для дослідження та розвитку сучасних міст.</p>
          </div>
          <PrimaryButton>Try it</PrimaryButton>
          <div className='absolute bottom-0 bg-[url(/waves/wave1.svg)] bg-cover h-[15vh] w-full'/>
        </section>
        <section className='grid gap-16 my-32'>
          <h2 className='text-center'>- Чому ми?</h2>
          <div className='grid grid-cols-3 gap-8 w-content'>
            <InfoCard
              title='Візуалізація'
              content='Оцінюйте інновації міст на зручній карті, яка забезпечує доступне та привабливе візуальне відображення.'
            />
            <InfoCard
              title='Порівняння'
              content='Порівнюйте інноваційні рішення розумних міст на нашій карті та знаходьте найефективніші підходи'
            />
            <InfoCard
              title='Гнучкість'
              content='Знаходьте необхідну та свіжу інформацію легко та швидко, з допомоги зручнії системі фільтрів.'
            />
          </div>
        </section>
        <section className='flex items-center justify-between w-content my-28'>
          <Image
            className='saturate-[15%] brightness-[300%] hue-rotate-[45deg] opacity-15'
            src='/logos/imd.png'
            alt=''
            width={530}
            height={194}
          />
          <div className='flex flex-col items-end'>
            <h2>- Дані взяті з</h2>
            <a target='_blank' href='https://imd.cld.bz/IMD-Smart-City-Index-Report-20231' 
            className='h2 text-primary'>
              IMD Smart City Index 
            </a>
          </div>
        </section>
        <section className='grid gap-9 my-28'>
          <div className='grid gap-4'>
            <CitiesScrollLine
              cities={[
                "Київ",
                "Лондон",
                "Париж",
                "Нью-Йорк",
                "Токіо",
                "Берлін",
                "Рим",
                "Сідней",
                "Торонто",
                "Істанбул",
                "Сан-Франциско",
                "Шанхай",
                "Мельбурн",
                "Дубай",
                "Дублін"
              ]}
            />
            <CitiesScrollLine
              cities={[
                "Барселона",
                "Сіетл",
                "Київ",
                "Сінгапур",
                "Ріо-де-Жанейро",
                "Стокгольм",
                "Амстердам",
                "Мюнхен",
                "Вашингтон",
                "Пекін",
                "Торонто",
                "Мадрид",
                "Осло",
                "Сідней",
                "Істанбул"
              ]}
            />
          </div>
          <p className='text-end m-auto w-content text-primary opacity-80'>- Дослідіть провідні міста світу</p>
        </section>
        <section className='relative my-10'>
          <div className='absolute top-6 inset-x-0 flex justify-center'>
            <p className='bg-background text-sm font-medium px-6 py-2 rounded-full'>Попередній перегляд</p>
          </div>
          <Image
            className='rounded-3xl test shadow-[0.25rem_0.25rem_2rem_0_rgba(0,0,0,0.5)] cursor-pointer'
            src='/tempMap2.png'
            alt='Map'
            width={985}
            height={541}
          />
        </section>
      </main>
      <footer>
        <div className='bg-[url(/waves/wave2.svg)] opacity-5 bg-cover h-[18vh] w-full'/>
        <div className='flex flex-col justify-between items-center h-32 bg-primary/5 pb-8'>
          {/* 
          <div className='flex gap-12 *:*:h-8 *:transition-[transform] *:duration-200'>
            <a className='hover:scale-[1.15]' href='https://www.youtube.com' target='_blank'>
              <img src='/logos/youtube.png' alt='YouTube Logo'/>
            </a>

            <a className='hover:scale-[1.15]' href='https://www.twitter.com' target='_blank'>
              <img src='/logos/twitter.png' alt='Twitter Logo'/>
            </a>

            <a className='hover:scale-[1.15]' href='https://www.instagram.com' target='_blank'>
              <img src='/logos/instagram.png' alt='Instagram Logo'/>
            </a>

            <a className='hover:scale-[1.15]' href='https://www.facebook.com' target='_blank'>
              <img src='/logos/facebook.png' alt='Facebook Logo'/>
            </a>
          </div> 
          */}
          <p className='text-sm'>Copyright © 2024 Smart Cities Map - All rights reserved || Created By: Me</p>
        </div>
      </footer>
    </>
  )
}