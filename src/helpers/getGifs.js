
export const giphyApiKey = "2ZYfVn4v0bxXYqI50NECcm2ru1oV5aWR";

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${category}&limit=6&rating=R`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}

