type InfoCardProps = {
  title: string, 
  content: string,
}

export default function InfoCard({ 
  title, 
  content,
}: InfoCardProps) {
  return (
    <div className='flex flex-col items-center gap-5 bg-primary/3 px-8 py-[3rem] rounded-xl border-1 border-primary/15'>
      <h3>{title}</h3>
      <p className='text-center text-base font-light'>{content}</p>
    </div>
  )
}