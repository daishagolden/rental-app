import Rect from 'react'

function ProductTile(props){
    return(
        <div className="container">
            <a href={`/product/${props.id}`}><img src={"img/" + props.image} className="responsive"/></a>
        </div>
    )
}

export default ProductTile