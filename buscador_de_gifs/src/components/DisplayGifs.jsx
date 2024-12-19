import useApi from "../hooks/useApi";
import ImageItem from "./ImageItem";

const DisplayGifs = ({category}) => {
    const apiKey = 'VDrT08ZDURrHK9LuQk59v4j00tVgJf5c'
    //definir el endPoint de la api
    const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`;

    const {loading,data} = useApi(urlApi)


    return (
        <>
        <div className="container-gifs">
            {
                loading ? data.map(img => (
                    <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url}/>
                )) : ''
            }
        </div>
        </>
    )
}

export default DisplayGifs;