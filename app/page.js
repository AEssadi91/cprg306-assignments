
import Link from 'next/link'
import StudentInfo from './StudentInfo'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2"> Week 2</Link>
      <Link href="/week3"> Week 3</Link>
      <Link href="/week4"> Week 4</Link>
      <Link href="/week5"> Week 5</Link>
      <Link href="/week6"> Week 6</Link>
      <Link href="/week7"> Week 7</Link>
      <Link href="/week8"> Week 8</Link>
      <Link href="/week10"> Week 10</Link>
    </main>
  )
}
