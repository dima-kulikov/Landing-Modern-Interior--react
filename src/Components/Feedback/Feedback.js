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
        title:'Testimonials',
        text: 'Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma',
        img: '',
        username: 'pasha',

    },
    {
        id:2,
        username: 'pasha',
        text: 'Donec eger vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam',
    },
    {
        id:3,
         title:'Testimonials',
        text: 'Donec eger vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam',
        img: '',
        username: 'pasha',
    },
    {
        id:4,
        title:'Testimonials',
        text: 'Donec eger vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam',
        img: '',
        username: 'pasha',
    },
    {
        id:5,
        title:'Testimonials',
        text: 'Donec eger vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam',
        img: '',
        username: 'pasha',
    }
]


function Feedback() {
    return(
        <div className='wrapper marg-bottom'>

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
                <div className='slid--title'>{user.title}</div>
                <div className='slid--text'>{user.text}</div>
                <div>{user.username}</div>
            </div>

        </SwiperSlide>
      ))}


    </Swiper>


        </div>
    )
};

export default Feedback;