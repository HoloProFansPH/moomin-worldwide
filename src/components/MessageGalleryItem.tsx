function MessageGalleryItem(props: {friendName: string, message: string}) {
    return(
        <div className="messageGalleryItem">
            <span className="messageFriendName">{props.friendName}</span><br/>
            <span className="messageText">{props.message}</span>
        </div>
    );
}

export default MessageGalleryItem;