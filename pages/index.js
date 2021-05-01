import Link from 'next/link'
import Requests from '../components/Requests'
import style from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
      <div className={style.container}>
        <h1>Your Station Requests</h1>
      </div>
      <div>
        <Requests />
      </div>
    </>
  )
}