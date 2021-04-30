import Link from 'next/link'
import Videojs from './Video.js';
import style from '../styles/Home.module.css'

const videoJsOptions = {
    autoplay: true,
    fluid: true,
    controls: true,
    sources: [
        {
            src: 'https://live.mixshare.co.uk:8443/live/0uADklw0Q/index.m3u8',
            type: 'application/x-mpegURL',
        },
    ],
};

export default function Home() {
    return (
        <main className={style.container}>
            <h1> Live Video </h1>
            <div className={style.videoBox}>
                <Videojs {...videoJsOptions} />
            </div>
            <Link href="/">
                <a>Go Back</a>
            </Link>
        </main>
    )
}