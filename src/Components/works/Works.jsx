import "./works.scss"
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Back-end Developer",
      desc:
        "My expertise is programming websites using ASP.NET Core, ASP.NET MVC and PHP.",
      img:
        "https://monamedia.co/wp-content/uploads/2020/02/thiet-ke-phan-mem-theo-yeu-cau-2.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Front-end Developer",
      desc:
        "In addition, I'm also good at designing UI for websites using HTML5/CSS3/JS, Bootstrap 5...",
      img:
        "https://tamnguyen.com.vn/hinhanh/tintuc/nhung-chu-y-quan-trong-khi-thiet-ke-website.png",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Mobile Application",
      desc:
        "I can design and develop simple mobile apps using Flutter.",
      img:
        "https://litslink.com/wp-content/uploads/2020/03/flutter-app-featured.png",
    },
  ];
  const handleClick = (way)=>{
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
    : setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0)
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {data.map(d=>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
  )
}
