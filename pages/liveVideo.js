import Link from 'next/link'
import Videojs from './Video.js';

const videoJsOptions = {
    autoplay: true,
    fluid: false,
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
        <main>
            <h1> Live Video </h1>
            <div >
                <Videojs {...videoJsOptions} />

            </div>
            <Link href="/">
                <a>Go Back</a>
            </Link>
        </main>
    )
}