import React, {useState} from "react";
import RenderImage from "./RenderImage";

const Image = () => {
  try {
    const [value, setValue] = useState("");
    const [render, setRender] = useState(false);
    const [src, setSrc] = useState("");
    const handleValue = (e) => {
      const inputValue = e.target.value;
      setValue(inputValue);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      if (value) {
        setRender(true);
        setTimeout(() => {
          setRender(false);
          setSrc(
            `https://dummyjson.com/image/250x250/008080/ffffff?text=${value}&fontSize=16`,
          );
        }, 300);
      }
    };

    return (
      <div className="image__wr">
        <h2>Create your own image:</h2>
        <form onSubmit={handleSubmit} className="image__form">
          <input
            value={value}
            onChange={handleValue}
            className="image__input"
            type="text"
            placeholder="there would be text for your image"
          />
          <button className="image__button" type="submit">
            Create
          </button>
        </form>
        {render ? (
          <p
            style={{
              marginTop: "10px",
            }}
          >
            Loading...
          </p>
        ) : (
          ""
        )}
        <img
          width={"250px"}
          height={"250px"}
          className="image__img"
          src={src}
          alt="waiting"
        />
      </div>
    );
  } catch (error) {
    throw new Error(error);
  }
};

export default Image;
