
export const getFilms = async (api,setFilms) => {
    console.log('call')
    const data = await fetch(api);
    const items = await data.json();
    setFilms(items.Search);
}