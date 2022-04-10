import "./testimonials.scss"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ngo Xuan Huy",
      title: "Junior Developer",
      img:
        "https://cdn.tgdd.vn/GameApp/1380979/tom-1-800x495.jpg",
      icon: "assets/twitter.png",
      desc:
        "Be strong as you fight your way to success, the difficulty you face is nothing compared to the joy of success.",
    },
    {
      id: 2,
      name: "Vo Ba Toan",
      title: "Student at NTU",
      img:
        "https://sc04.alicdn.com/kf/H5b0183557cec4043946f03208a7a29dat.jpg",
      icon: "assets/youtube.png",
      desc:
        "Here’s wishing you good luck as you move on to a new challenge. Though the road may be rocky and filled with difficulties, we know that you can fight whatever challenges you face",
      featured: true,
    },
    {
      id: 3,
      name: "Tran Ngoc Mai",
      title: "CEO of ABC",
      img:
        "https://static2.yan.vn/YanNews/2167221/202112/nhung-tinh-tiet-trai-nguoc-ve-vai-dien-cua-jisoo-trong-snowdrop-3026021f.jpg",
      icon: "assets/linkedin.png",
      desc:
        "You’re doing great! You’ve done a great job! Keep up the good work! ",
    },
  ];
  return (
    <div className='testimonials' id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          {data.map(d=>(
            <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}
