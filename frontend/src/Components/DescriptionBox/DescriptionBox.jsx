import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>

        <div className="descriptionbox-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae accusantium, numquam odit fugiat quam vero ullam excepturi nulla ipsa reprehenderit? Minus facere dolorem cumque velit tenetur neque suscipit voluptatem? Quaerat!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet et quis sunt a laudantium quo eius accusantium rerum. Quae ipsa praesentium provident voluptatem culpa doloribus vel commodi et enim. Itaque?</p>
        </div>
    </div>
  )
}

export default DescriptionBox