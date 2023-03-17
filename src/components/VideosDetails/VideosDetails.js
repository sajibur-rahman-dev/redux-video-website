import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideo } from '../../features/video/videoSlice';
import Loading from '../ui/Loading';
import RelatedVideos from './RelatedVideos/RelatedVideos'
import VideoDescription from './VideoDesription/VideoDescription';
import VideoPlayer from './VideoPlayer';

const VideosDetails = () => {

    const { videoId } = useParams();
    console.log(videoId)
    const { isLoading, isError, error, video } = useSelector((state) => state.video);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideo(videoId));
    }, [dispatch, videoId]);

    let content;

    if (isLoading) content = <Loading />;

    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;

    if (!isLoading && !isError && !video?.id === 0) content = <div className="col-span-12">No data found</div>
    if (!isLoading && !isError && video?.id) content = <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
            <div class="grid grid-cols-3 gap-2 lg:gap-8">
                <div class="col-span-full w-full space-y-8 lg:col-span-2">

                    <VideoPlayer link={video.link} title={video.title} />
                    <VideoDescription video={video} />
                </div>

                <RelatedVideos  currentVideoId={video.id} tags={video.tags} />
            </div>
        </div>
    </section>

    return (
        <>
            {
                content
            }
        </>

    )
}

export default VideosDetails