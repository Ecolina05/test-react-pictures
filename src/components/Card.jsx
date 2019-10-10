import React from 'react';
import { Link } from 'react-router-dom';
import Interaction from './Interaction';

const Card = props => {
    const { url, picture, title, likes, favorites, downloads, userId, username, pictureUser } = props;

    return (
        <div className="flex-none w-auto md:w-64 rounded shadow pb-2 md:mr-2 mt-2">
            <img src={picture} alt="Preview" className="md:w-64 md:h-40 w-full rounded-t" />
            <div className="py-3 px-3">
                <a href={url} className="text-xs text-gray-600 uppercase cursor-pointer" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-compress"></i> Picture in full screen
                </a>
                <p className="md:h-20 text-xl font-bold mb-2">{title}r</p>

                <div className="flex justify-center w-full text-sm mb-3 mt-2">
                    {/* Likes */}
                    <Interaction icon="far fa-thumbs-up" value={likes} color="text-blue-700" title="Likes" />
                    {/* Comments 
                    <Interaction icon="far fa-comment" value={comments} color="text-blue-400" title="Comments" />*/}
                    {/* Favorites */}
                    <Interaction icon="far fa-heart" value={favorites} color="text-red-600" title="Favorites" />
                    {/* Download */}
                    <Interaction icon="far fa-arrow-alt-circle-down" value={downloads} color="text-green-500" title="Downloads" />
                </div>

                <div className="flex items-center text-sm text-gray-800">
                    <img src={pictureUser} className="rounded-full mr-3" alt="Profile" width="35" />
                    <Link to={`user/${userId}-${username}`} title="View profile">{username}</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;