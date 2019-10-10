import React from 'react';
import bg from '../assets/images/bg-image-1.jpg';

const Header = props => {
    const { handleSearch } = props;

    const setFilterToSearch = e => {
        if (e.key === 'Enter') handleSearch(e.target.value);
    }

    return (
        <div className="text-white rounded-lg px-8 py-10 flex justify-center flex-col"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

            <p className="text-xs uppercase">PICTURES 2019</p>
            <p className="text-3xl font-bold text-italic leading-tight md:leading-relaxed">The simple taken to its maximun level becomes elgance.</p>
            <p className="text-lg mb-4 leading-relaxed md:leading-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <input type="search" name="search" id="search" className="search bg-orange-600 text-white text-sm rounded py-2 px-3 opacity-75 focus:outline-none md:w-64 lg:w-64" autoComplete="off" placeholder="&#xf002; Search picture" onKeyUp={setFilterToSearch} />
        </div>
    );
}

export default Header;