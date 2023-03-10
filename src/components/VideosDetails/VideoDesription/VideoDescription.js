import React from 'react'
import VideoLikeUnlike from './VideoLikeUnlike'

const VideoDescription = ({video}) => {
    const { title,description,author,avatar ,date,duration,views,thumbnail,tags,likes,unlikes } = video;
    return (
        <div>
            <h1
                className="text-lg font-semibold tracking-tight text-slate-800"
            >
                {title}
            </h1>
            <div
                className="pb-4 flex items-center space-between border-b"
            >
                <h2
                    className="text-sm leading-[1.7142857] text-slate-600 w-full"
                >
                    Uploaded on {date}
                </h2>

                {/* <!-- like/unlike --> */}
                <VideoLikeUnlike like={likes} unlikes={unlikes} />
            </div>

            <div
                className="mt-4 text-sm text-[#334155] dark:text-slate-400"
            >
                {description}
            </div>
        </div>
    )
}

export default VideoDescription