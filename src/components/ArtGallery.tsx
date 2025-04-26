import axios from "axios";
import ArtGalleryItem from "./ArtGalleryItem.tsx";
import {useEffect, useState} from "react";

function ArtGallery() {
    const [artData, setArtData] = useState<any[]>([])
    const getData = async () => {
        try {
            const result = await axios.get("https://cdn.moominworldwide.org/art.json");
            setArtData(result.data);
            console.log(artData);
        } catch (error) {
            console.error('Error fetching:', error);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return(
        <div id="galleryCard" className="card">
            <div className="cardHeader" style={{justifyContent: "center"}}>
                <span className="cardTitle">GALLERY</span>
            </div>
            <div id="galleryContent">
                {artData.map((artItem, idx) => (
                    <ArtGalleryItem key={idx} friendName={artItem.friendName}/>
                ))}
            </div>
        </div>
    );
}

export default ArtGallery;