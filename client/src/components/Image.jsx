import React from 'react';
import "./mix.css";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Delete } from "../components/actions/images";

const Image = ({id, title, image, path, setImages}) => {

    const DeleteHandler = (id) => {
        Delete(id, setImages);
    };
    return (
            <div className="col-md-4 mt-4">
        <div className="img-thumbnail head">
            <em>{title}</em>
            <RiDeleteBin6Line className="trash" onClick={() => DeleteHandler(id)} />
        </div>
        <img
            src={path}
            alt={title}
            className="rounded img-thumbnail"
            width="100%"
            height="70px"
        />
        </div>
    );
}

export default Image;
