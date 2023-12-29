import axios from "axios"

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID ZF1hbYTESCFB9UNXUtPDyPH7Q2xeOT7v2mW4ZV5TM8Y',
        },
        params:{
            query:term,
        },
    });

    return response.data.results;
};

export default searchImages;