function ArtGalleryItem(props: {friendName: string}) {
    return(
        <div className="artGalleryItem">
            <img className="artImg" src={`https://cdn.moominworldwide.org/art-webp/${props.friendName}.webp`} alt={props.friendName}/>
            <p className="artFriendName">{props.friendName}</p>
        </div>
    );
}

export default ArtGalleryItem;