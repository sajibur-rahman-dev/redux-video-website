import React from 'react'
import LikeLogo from '../../../assets/like.svg'
import unLikeLogo from '../../../assets/unlike.svg'

const VideoLikeUnlike = ({like,unlikes}) => {
    console.log(like);
    console.log(unlikes)
    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img
                        className="w-5 block"
                        src={LikeLogo}
                        alt="Like"
                    />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600"
                >
                    {like}
                </div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0">
                    <img
                        className="w-5 block"
                        src={unLikeLogo}
                        alt="Unlike"
                    />
                </div>
                <div
                    className="text-sm leading-[1.7142857] text-slate-600"
                >
                    {unlikes}
                </div>
            </div>
        </div>
    )
}

export default VideoLikeUnlike