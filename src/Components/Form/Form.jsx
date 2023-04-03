// import React, { useState } from "react";
// import Dropzone from "react-dropzone";

// function Form() {
//   const [images, setImages] = useState([]);
//   const [caption, setCaption] = useState("");
//   const [photographer, setPhotographer] = useState("");
//   const [model, setModel] = useState("");
//   const [designer, setDesigner] = useState("");
//   const [brand, setBrand] = useState("");
//   const [makeupArtist, setMakeupArtist] = useState("");
//   const [lighting, setLighting] = useState("");
//   const [studio, setStudio] = useState("");
//   const [otherCredits, setOtherCredits] = useState("");
//   const [isExclusive, setIsExclusive] = useState(false);
//   const [hasCopyright, setHasCopyright] = useState(false);

//   const handleDrop = (acceptedFiles) => {
//     setImages(images.concat(acceptedFiles));
//   };

//   const handleRemoveImage = (indexToRemove) => {
//     const newImages = [...images];
//     newImages.splice(indexToRemove, 1);
//     setImages(newImages);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     images.forEach((image) => {
//       formData.append("images", image);
//     });
//     formData.append("caption", caption);
//     formData.append("photographer", photographer);
//     formData.append("model", model);
//     formData.append("designer", designer);
//     formData.append("brand", brand);
//     formData.append("makeupArtist", makeupArtist);
//     formData.append("lighting", lighting);
//     formData.append("studio", studio);
//     formData.append("otherCredits", otherCredits);
//     formData.append("isExclusive", isExclusive);
//     formData.append("hasCopyright", hasCopyright);
//     // TODO: send form data to server
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <div className="Dropzone">
//           <Dropzone onDrop={handleDrop}>
//             {({ getRootProps, getInputProps }) => (
//               <div {...getRootProps()}>
//                 <input {...getInputProps()} />
//                 <p>
//                   Click or drag images here to upload
//                 </p>
//               </div>
//             )}
//           </Dropzone>
//         </div>
//         <div className="ImagePreviewContainer">
//           {images.map((image, index) => (
//             <div key={index} className="ImagePreview">
//               <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
//               <button
//                 type="button"
//                 className="CloseButton"
//                 onClick={() => handleRemoveImage(index)}
//               >
//                 X
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="InputContainer">
//           <label htmlFor="caption">Caption:</label>
//           <input
//             type="text"
//             id="caption"
//             value={caption}
//             onChange={(event) => setCaption(event.target.value)}
//           />
//         </div>
//         <div className="InputContainer">
//           <label htmlFor="photographer">Photographer:</label>
//           <input
//             type="text"
//             id="photographer"
//             value={photographer}
//             onChange={(event) => setPhotographer(event.target.value)}
//           />
//         </div>
//         <div className="InputContainer">
//           <label htmlFor="model">Model:</label>
//           <input
//             type="text"
//             id="model"
//             value={model}
//             onChange={(event) => setModel(event.target.value)}
//           />
//         </div>
//         <div className="InputContainer">
//           <label htmlFor="designer">Fashion Designer:</label>
//           <input
//             type="text"
//             id="designer"
//             value={designer}
//             onChange={(event) => setDesigner(event.target.value)}
//           />
//         </div>
//         <div className="InputContainer">
//           <label htmlFor="brand">Fashion/Clothing Brand:</label>
//           <input
//             type="text"
//             id="brand"
//             value={brand}
//             onChange={(event) => setBrand(event.target.value)}
//           />
//         </div>
//         <div className="InputContainer">
//           <label htmlFor="makeupArtist">Makeup Artist:</label>
//           <input
//             type="text"
//             id="makeupArtist"
//             value={makeupArtist}
//             onChange={(event) => setMakeupArtist(event.target.value)}
//           />
//         </div>
//         <div className="InputContainer">
//           <label htmlFor="lighting">Lighting:</label>
//           <input
//             type="text"
//             id="lighting"
//             value={lighting}
//             onChange={(event) => setLighting(event.target.value)}
//           />
//         </div>
//         <div className="InputContainer">
//           <label htmlFor="studio">Set/Studio Credits:</label>
//           <input
//             type="text"
//             id="studio"
//             value={studio}
//             onChange={(event) => setStudio(event.target.value)}
//           />
//         </div>
//         <div className="InputContainer">
//           <label htmlFor="otherCredits">Other Credits:</label>
//           <input
//             type="text"
//             id="otherCredits"
//             value={otherCredits}
//             onChange={(event) => setOtherCredits(event.target.value)}
//           />
//         </div>
//         <div className="InputContainer">
//           <label htmlFor="isExclusive">Is image exclusively submitted?</label>
//           <input
//             type="checkbox"
//             id="isExclusive"
//             checked={isExclusive}
//             onChange={(event) => setIsExclusive(event.target.checked)}
//           />
//         </div>
//         <div className="InputContainer">
//           <label htmlFor="hasCopyright">
//             Submitter holds the copyright or has the authority to submit from the copyright owner?
//           </label>
//           <input
//             type="checkbox"
//             id="hasCopyright"
//             checked={hasCopyright}
//             onChange={(event) => setHasCopyright(event.target.checked)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Form;


