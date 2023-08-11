import React, { useContext } from 'react';
import { MyContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import Navbar1 from './Navbar';


const Bloghome = () => {
  const { title } = useContext(MyContext);
  const ab = useNavigate();

  return (
    <div>
      <Navbar1 />
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          {title.map((t) => (
            <div key={t.id} className='col-md-6 mb-4'>
              <div
                className='card shadow border-0 rounded-0 custom-card'
                onClick={() => ab(`/view/${t.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className='card-body'>
                  <h3 className='card-title text-center'>{t.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bloghome;
