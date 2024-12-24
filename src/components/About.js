import React from 'react'
import css from './com.css'
import img from '../components/img/creative-text-artwork.jpg'
import img2 from '../components/img/th.jfif'
export default function About() {
  return (
    <div className='about'>
      <div className="container1">
          <h1>About us</h1>
          <p>The Text Editor is a versatile and user-friendly application designed to streamline communication across various platforms</p>
      </div>
      <center>
      <div class="profile">
             <img src={img} alt="" />
            <p> With its intuitive interface and robust features, users can effortlessly send and receive text messages, share multimedia content, and engage in group conversations with ease. Whether for personal or professional use, the Text Editor offers seamless integration across devices, ensuring that users stay connected no matter where they are.</p>
        </div>
        <div class="profile">
             <img src={img2} alt="" />
            <p>From instant notifications to customizable settings, this app caters to the diverse needs of modern communication, empowering individuals and businesses to stay productive and connected in today's fast-paced world.</p>
        </div>
        </center>
    </div>
  )
}
