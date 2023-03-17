import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../../features/relatedVideos/relatedVideosSlice';
import Video from './Video';
import Loading from '../../ui/Loading';

const RelatedVideos = ({ tags, currentVideoId }) => {
    console.log(tags, currentVideoId);

    const dispatch = useDispatch();
    const {isLoading,relatedVideos,isError,error} = useSelector((state) => state.relatedVideos);

    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
    }, [dispatch, currentVideoId, tags]);

    let content = null;

    if(isLoading) content = <Loading/>;

    if(!isLoading && isError) content = <div className="col-span-12">{error}</div>;

    if(!isLoading && !isError && relatedVideos?.length === 0) content = <div className="col-span-12">No data found</div>

    if(!isLoading && !isError && relatedVideos?.length > 0) content = relatedVideos.map((video) =>  <Video key={video.id} video={video} />)

    return (
        <div
            className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {
                content
            }
        </div>
    )
}
export default RelatedVideos