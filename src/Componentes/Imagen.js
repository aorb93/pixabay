import React from 'react';

const Imagen = (props) => {
    const {largeImageURL, likes, previewURL, tags, views, id} = props.imagen;
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img id={"miniImg"+id} src={previewURL} alt={tags} className="card-img.top"/>
                <div className="card-body">
                    <p id={"lblLike"+id} className="card-text">{likes} Me gusta</p>
                    <p id={"lblView"+id} className="card-text">{views} Vistas</p>
                    <a id={"btnVerImagen"+id} href={largeImageURL} className="btn btn-primary btn-block">Ver imagen</a>
                </div>
            </div>
        </div>
    );
}

export default Imagen;