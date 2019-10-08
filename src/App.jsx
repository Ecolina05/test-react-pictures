import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Category from './components/Category';
import Footer from './components/Footer';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    let categories = ['Music', 'Nature', 'Food'];

    const getFilterToSearch = filter =>{
        setSearch(filter);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) {
        return <SplashScreen />
    } else {
        return (
            <div className="container mx-auto pt-5 px-10 animated fadeIn">
                <section>
                    <Header handleSearch={getFilterToSearch}/>
                </section>
                <section className="mt-5">
                    <Category section={categories[0]} filterToSearch={search}/>
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        );
    }
}

export default App;