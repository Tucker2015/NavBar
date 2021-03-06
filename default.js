const config = {
    server: {
        secret: 'kjVkuti2xAyF3JGCzSZTk0YWM5JhI9mgQW4ryEEE',
        port: 3000
    },
    rtmp_server: {
        rtmp: {
            port: 1935,
            chunk_size: 60000,
            gop_cache: false,
            ping: 60,
            ping_timeout: 30,
            
        },
        http: {
            port: 8888,
            mediaroot: './src/media',
            allow_origin: '*'
        },
        https: {
            port: 8443,
            mediaroot: './src/media',
            allow_origin: '*',

            key: '../server/security/cert.key',
            cert: '../server/security/cert.pem',
            
        },
        trans: {
            ffmpeg: '/usr/local/bin/ffmpeg',
            tasks: [
                {
                    app: 'live',
                    hls: true,
                    hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
                    dash: true,
                    dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
                }
            ]
        }
    }
};

module.exports = config;
