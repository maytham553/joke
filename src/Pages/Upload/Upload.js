import React from "react";

export default class Upload extends React.Component {
     previewFile = () => {
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
      
        reader.onloadend = function () {
          preview.src = reader.result;
        }
      
        if (file) {
          reader.readAsDataURL(file);
        } else {
          preview.src = "";
        }
      }

    render() {
        return (
            <div className="upload">
                <form>

                    <input className="publisher-name input-text" placeholder="اسم الناشر"></input>
                    <textarea className="paragraph input-text"  placeholder="النص"></textarea>
                    <input className="hashTag input-text" placeholder="هاشتاك#"></input>
                    <input className="image-upload " type="file" name="myImage" accept="image/*" onChange={this.previewFile} ></input>
                    <img className="image" src="de-img.png"></img>
                    <input className="btn-uploads" type="submit" value="نشر"></input>
                </form>
            </div>
        );
    }
}
