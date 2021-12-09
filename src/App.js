import { useState } from "react";
import "./App.css";
import Hook from "./Hook";
const srcIMG =
  "https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg";
const paragraf3 = "Selim Sevgi";
const srcIMGG =
  "https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg";

const srcIMGG1 =
  "https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg";
const srcIMG1 =
  "https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg";
const paragraf1 = "Fatih Colakel";

const srcIMGG2 = "https://avatars.githubusercontent.com/u/84101614?v=4";
const srcIMG2 = "https://picsum.photos/200/300";
const paragraf2 = "Serif Colakel";

export default function App() {
  const [count, setCount] = useState(false); // modal'ın pencere aç kapa
  const [paragraf, setParagraf] = useState(paragraf3); // modal içerisne gönderilen p
  const [img, setImg] = useState("defaultIMG"); // modal içerisne gönderilen img
  const [img1, setImg1] = useState("defaultIMG1"); // modal içerisne gönderilen 2.img
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(!count);
          setParagraf(paragraf3);
          setImg(srcIMG);
          setImg1(srcIMGG);
        }}
      >
        modal 1
      </button>
      <button
        onClick={() => {
          setCount(!count);
          setParagraf(paragraf1);
          setImg(srcIMGG1);
          setImg1(srcIMG1);
        }}
      >
        modal 2
      </button>
      <button
        onClick={() => {
          setCount(!count);
          setParagraf(paragraf2);
          setImg(srcIMG2);
          setImg1(srcIMGG2);
        }}
      >
        modal 2
      </button>

      <Hook img={img} img1={img1} paragraf={paragraf} sendCount={count} />
    </div>
  );
}
