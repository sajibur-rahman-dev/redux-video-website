import React, { useEffect, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideo } from '../../features/video/videoSlice';
import Loading from '../ui/Loading';
import VideoDescription from './VideoDesription/VideoDescription';
import VideoPlayer from './VideoPlayer';

const SingleVideoDetails = () => {
    const { videoId } = useParams();
    console.log(videoId)
    const {isLoading,isError,error,video} = useSelector((state) => state.video);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchVideo(videoId));
    },[dispatch,videoId])

    console.log(video);

    let content;

    if(isLoading) content = <Loading/>;

    if(!isLoading && isError) content = <div className="col-span-12">{error}</div>;

    if(!isLoading && !isError && !video?.id === 0) content = <div className="col-span-12">No data found</div>

    if(!isLoading && !isError && video?.id) content = <> {/* <!-- video player --> */}
    <VideoPlayer link={video.link}  />

    {/* <!-- video description --> */}
    <VideoDescription video={video} /></>

    return (
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
           {content}
        </div>
    )
}

export default SingleVideoDetails;