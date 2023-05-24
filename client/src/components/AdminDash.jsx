import React, { useEffect, useState } from 'react';
import { HiSwitchVertical } from 'react-icons/hi';
import {Add, FindAll} from "./actions/images";
import Image from './Image';
import {useForm} from 'react-hook-form';
import classnames from "classnames";


const UploadForm = () => {
    const [show, setShow] = useState(false);
    const [Images, setImages] = useState([]);
    const [Errors, setErrors] = useState({});
    const { register, handleSubmit } = useForm();   //a custom hook for managing forms with ease you can replace it with onchange function
    
    useEffect(() => {
        FindAll(setImages)
    }, []);

    // OnSubmit
    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('image', data.image[0])

        Add(formData, setImages,)
    }

    return (
            <div className="App container p-4">
        <div className="form__index">
            <div>
            <button
                className="btn btn-outline-primary sm"
                onClick={() => setShow(!show)}
            >
                <HiSwitchVertical style={{ width: "20px" }} />
            </button>
            </div>
            {show ? (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <input
                    type="text"
                    {...register("title")}
                    className={classnames("form-control mt-4", {
                    "is-invalid": Errors.title,
                    })}
                />
                {Errors.title && (
                    <div className="invalid-feedback">{Errors.title}</div>
                )}
                </div>
                <div className="form-group">
                <input
                    type="file"
                    {...register("image")}
                    className={classnames("form-control mt-4", {
                    "is-invalid": Errors.image,
                    })}
                />
                {Errors.image && (
                    <div className="invalid-feedback">{Errors.image}</div>
                )}
                </div>
                <button className="btn btn-outline-primary sm mt-4">Save</button>
            </form>
            ) : (
            ""
            )}
        </div>
        <div className="gallery__index">
            <div className="row">
            {Images.map(({ _id, title, image, path }) => (
                <Image id={_id} title={title} image={image} path={path} setImages={setImages}/>
            ))}
            </div>
        </div>
    </div>
    );
};

export default UploadForm;