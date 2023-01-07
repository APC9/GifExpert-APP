

export const getGifs = async(category)=>{

    const limit = 10;
    const key = import.meta.env.VITE_APY_GIF;
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}=${category}&limit=${limit}`)
    const { data } = await resp.json()
    
    const gifs = data.map(img =>({
        id: img.id, 
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}