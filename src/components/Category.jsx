import React, { useState, useEffect } from 'react';
import Card from './Card';

const Category = props => {
    const { section, filterToSearch } = props;

    const [category, setCategory] = useState(section);
    const [pictures, setPictures] = useState([]);
    const API_KEY = '13839725-20680b3928bf4565b9746bf22';

    const getDataByCategory = filter => {
        fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${filter}&image_type=photo`)
            .then(response => response.json())
            .then(data => {
                setPictures(data.hits);
            });
    }

    useEffect(() => {
        if (filterToSearch !== '') {
            setCategory(filterToSearch);
            getDataByCategory(filterToSearch);
        } else
            getDataByCategory(section);
    }, [filterToSearch, section]);

    return (
        <div className="mt-2 mb-5">
            <p className="text-2xl font-bold mb-2">{category}</p>
            <div className="md:flex md:justify-between md:flex-row md:overflow-x-visible md:overflow-y-hidden category">
                {
                    pictures.map((picture, i) => {
                        return (
                            <Card
                                key={i}
                                url={picture.largeImageURL}
                                picture={picture.previewURL}
                                title={picture.tags}
                                likes={picture.likes}
                                comments={picture.comments}
                                favorites={picture.favorites}
                                downloads={picture.downloads}
                                userId={picture.user_id}
                                username={picture.user}
                                pictureUser={picture.userImageURL}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Category;