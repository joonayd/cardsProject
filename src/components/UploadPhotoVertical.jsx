import React from "react";
import { Link } from "react-router-dom";

const UploadPhotoVertical = () => {
  const [image, setImage] = React.useState(null);
  return (
    <div>
      <h3 className="upload-card-heading">Upload Your Own Card</h3>
      <section className="upload-photo-sec">
        <div className="blank-card">
          <h3>UPLOAD PHOTO</h3>
          <p>Recommended size is 5.25" x 7.25"</p>
          <input
            accept="image/*"
            type="file"
            value={image}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="upload-photo-card">
          <div className="upload-photo-card-heading">
            <h3>UPLOAD PHOTO</h3>
          </div>
          <p>Upload your photo here</p>
          <Link style={{ width: "90%" }} to="/upload-video-vertical">
            <button style={{ width: "90%", marginBottom: "1rem" }} className="btn-customize">
              Create card
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UploadPhotoVertical;
