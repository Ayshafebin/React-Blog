import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import Navbar1 from './Navbar';

const ViewBlog = () => {
  const { title } = useContext(MyContext);
  const navigate = useNavigate(); // Renamed 'ab' to 'navigate'
  const { id } = useParams();
  const blog = title.find((item) => item.id == id); // Renamed 'asd' to 'blog'

  if (!blog) {
    return <div>Loading...</div>; // Add a loading state or error handling
  }

  return (
    <>
      <Navbar1 /> {/* Removed unnecessary brackets */}
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card text-center'>
              <div className='card-body'>
                <h1 className='card-title'>{blog.title}</h1>
                <p className='card-text'>{blog.blog}</p>
                <button
                  type='button'
                  onClick={() => navigate('/')}
                  className='btn btn-primary'
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBlog;
