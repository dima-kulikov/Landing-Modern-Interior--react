import React from 'react';
import '../Blog/Blog.scss';

function Blog() {
    return(
        <div className='wrapper blog'>
            <div id='blog'></div>
            <div className="blog__info">
            <div className="blog__info--title">Recent Blog</div>
            {/* <a href="#"> View All Posts</a> */}
            </div>
            
        <ul className="blog__list">
            <li className="blog__list__item">
                <img src="./img/blog-1.png" alt="img" />
                <div>
                <div className="blog__list__item--title">First Time Home Owner Ideas</div>
                <div className="blog__list__item--date">by <strong>Nana Ama</strong> on <strong>Nov 18th, 2022</strong></div>
                </div>
            </li>
        


            <li className="blog__list__item">
                <img src="./img/blog-2.png" alt="img" />
                <div>
                <div className="blog__list__item--title">First Time Home Owner Ideas</div>
                <div className="blog__list__item--date">by <strong>Nana Ama</strong> on <strong>Nov 18th, 2022</strong></div>
                </div>
            </li>



            <li className="blog__list__item">
                <img src="./img/blog-3.png" alt="img" />
                <div>
                <div className="blog__list__item--title">First Time Home Owner Ideas</div>
                <div className="blog__list__item--date">by <strong>Nana Ama</strong> on <strong>Nov 18th, 2022</strong></div>
                </div>
            </li>
        </ul>
            
        </div>
    )
}

export default Blog;