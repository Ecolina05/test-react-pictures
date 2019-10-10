import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import bg from '../assets/images/bg-image-1.jpg';

const Profile = () => {
    const history = useHistory();
    const { userId, username } = useParams();

    return (
        <div className="w-full h-full container mx-auto pt-5 px-10 animated fadeIn">
            <div className="flex md:justify-start justify-center">
                <h1 className="text-2xl font-bold mb-4 md:text-left text-center mr-3">User profile</h1>
                <span>
                    <button className="bg-white text-gray-700 border rounded-lg hover:bg-gray-100 focus:outline-none px-3 py-2" onClick={() => history.goBack()}>
                        <i className="fas fa-arrow-left"></i> Go back
                    </button>
                </span>
            </div>

            <div className="rounded text-white px-10 py-5 md:flex"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>

                <div className="md:text-left text-center">
                    <i className="far fa-user-circle md:mr-3 md:px-5" style={{ fontSize: '100px' }}></i>
                </div>

                {/* <img src={pictureUser} alt="User profile" className="rounded-full w-32 h-32 md:mr-3 md:mx-0 mx-auto" /> */}
                <div className="md:text-left md:mt-5 text-center">
                    <h2 className="text-2xl font-semibold mt-2">{username}</h2>
                    <p className="text-base">ID: {userId}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;