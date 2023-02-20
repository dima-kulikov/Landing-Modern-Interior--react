import React from 'react';
import '../Feedback/Feedback.scss';



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const data = [
    {
        id:1,
        text: 'Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma',
        img: './img/feedback-user-1.png',
        userName: 'Michelle Anna',
        userJob: 'CEO specialist'

    },
    {
        id:2,
        text: 'Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma',
        img: './img/feedback-user-1.png',
        userName: 'Michelle Anna',
        userJob: 'Frontend specialist'
    },
    {
        id:3,
        text: 'Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma',
        img: './img/feedback-user-1.png',
        userName: 'pasha',
        userJob: 'Backend specialist'
    },
    {
        id:4,
        text: 'Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma',
        img: './img/feedback-user-1.png',
        userName: 'Michelle Anna',
        userJob: 'PPC specialist'
    }
]


function Feedback() {
    return(
    <div className='wrapper'> 
        <div className='swiper__title'>Testimonials</div> 
        
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >

            {data.map( user => (
                <SwiperSlide key={user.id}>
                    <div className='slid'>
                        <div className='slid--text'>{user.text}</div>

                        <img src={user.img} alt={user.userJob} />
                        <div className='slide-name'>{user.userName}</div>
                        <div className='slide-job'>{user.userJob}</div>
                    </div>

                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </div>   
    )
};

export default Feedback;