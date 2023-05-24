import axios from "axios";
export const FindAll = async (setImages) => {
    axios.get("/upload")
        .then((res) => {
        setImages(res.data);
        })
        .catch((err) => {
        console.log(err.message);
    });
};

export const Add = async (formData, setImages, setErrors) => {
    axios.post("/upload", formData)
        .then((res) => {
        setImages(res.data);
        setErrors();
        })
        .catch((err) => {
            console.log(err.message);
    });
};

export const Delete = async (id, setImages) => {
        if (window.confirm("do you want to delete this image?")) {
        axios
            .delete(`/upload/${id}`)
            .then((res) => {
            setImages(res.data);
            })
            .catch((err) => {
            console.log(err.message);
            });
        }
    };