import React, { useState } from 'react';
import Header from '../components/Header';
import Category from '../components/Category';
import Footer from '../components/Footer';

const Home = () => {

    const [search, setSearch] = useState('');
    let categories = ['Music', 'Nature', 'Food'];

    const getFilterToSearch = filter => {
        setSearch(filter);
    }

    return (
        <div className="container mx-auto pt-5 px-10 animated fadeIn">
            <section>
                <Header handleSearch={getFilterToSearch} />
            </section>
            <section className="mt-5">
                <Category section={categories[1]} filterToSearch={search} />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default Home;