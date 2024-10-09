import Link from 'next/link';

const header = () => {
  return(
    <header>
      <h1 className='text-5xl'>
        <Link href="/">
          Filmoteka
        </Link>
      </h1>
    </header>
  )
}

export default header;