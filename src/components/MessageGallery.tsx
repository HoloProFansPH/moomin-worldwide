import axios from "axios";
import MessageGalleryItem from "./MessageGalleryItem";
import {useEffect, useState} from "react";

function MessageGallery() {
    const [messageData, setMessageData] = useState<any[]>([])
    const getData = async () => {
        try {
            const result = await axios.get("https://cdn.moominworldwide.org/messages.json");
            setMessageData(result.data);
            console.log(messageData);
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
                <span className="cardTitle">Thank you for the support!</span>
            </div>
            <div id="messageGalleryContent">
                {messageData.map((messageItem, idx) => (
                    <MessageGalleryItem key={idx} friendName={messageItem.friendName} message={messageItem.message} />
                ))}
            </div>
        </div>
    );
}

export default MessageGallery;