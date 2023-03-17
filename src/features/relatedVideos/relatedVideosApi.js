import axios from '../../utils/axios';

export const getRelatedVideos = async ({tags,id}) => {
    const tagsArr = tags.map((tag) => `tags_like=${tag}`).join('&');
    const queryStr = `${tagsArr}&id_ne=${id}&_limit=5`

    const response = await axios.get(`videos?${queryStr}`);
    return response.data;
};

