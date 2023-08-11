import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyContext } from '../Context/Context';

const AddBlog = () => {
  const { title, setTitle } = useContext(MyContext);
  const navigate = useNavigate();
  const [blog, setBlog] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    event.preventDefault();
    const title1 = event.target.title.value;
    const blog1 = event.target.blog.value;
    setTitle((s) => [...title, { id: Date.now(), title: title1, blog: blog1 }]);
    navigate('/');
    setShowModal(false); 
  };

  return (
    <div className="container mt-5">
      <span
        // type="button"
        className="btn btn-primary"
        onClick={() => setShowModal(true)}
      >
        create blog
      </span>

      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Blog</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleInputChange}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Blog Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter blog title"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="blog" className="form-label">
                      Blog Content
                    </label>
                    <textarea
                      className="form-control"
                      id="blog"
                      rows="5"
                      placeholder="Add your blog"
                    ></textarea>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                      Add
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBlog;
