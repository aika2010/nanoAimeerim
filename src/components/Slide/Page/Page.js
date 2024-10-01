// import {React,useRef} from "react";
// import './Page.css'
// import bg1 from "../img/bg1.jpg"
// import bg2 from "../img/bg2.jpg"
// import bg3 from "../img/bg3.jpg"
// import bg4 from "../img/bg4.webp"


// const Page = () => {

//     let imageContainerRef = useRef(null)

//     const images = [bg1, bg2, bg3, bg4] // these could be coming from a db
    
//     const Prev = () => imageContainerRef.current.scrollLeft -= 250

//     const Next = () => imageContainerRef.current.scrollLeft += 250
    


//     return (
//         <div className="Page">
//           <div className="Page__Content">
//             <div className="Page__Prev" onClick={Prev}></div>
//             <div className="Page__panel" ref={imageContainerRef}>
//                 {images.map(image =>{return(<img src={image}/>)})}
//             </div>
//             <div className="Page__Next" onClick={Next}></div>
//           </div>
//         </div>
//     )
// }


// export default Page