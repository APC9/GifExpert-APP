

export const GifItems = ({title, url}) => {

    return (
        <div className="card-grid card">
            <img src={url}  alt={title}/>
            <p>{title}</p>
        </div>
    )
}
