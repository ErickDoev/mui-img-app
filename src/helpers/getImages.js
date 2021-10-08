export const getImages = async( category, page=1 ) => {
       
    const url = `https://pixabay.com/api/?key=19430133-bf2d5057c513c4dafc3ac31f8&q=${category}&per_page=12&page=${page}`;
    //console.log(url);
    const res = await fetch(url);
    const {hits} = await res.json();
    const dataFiltered = hits.map(e => {
        return {
            id:e.id,
            likes:e.likes,
            previewURL:e.previewURL,
            largeImageURL:e.largeImageURL,
            tags:e.tags,
            views:e.views,
            user:e.user,
            userImg:e.userImageURL,
            type:e.type,
            favorite:false
        }
    })

    return dataFiltered;
} 