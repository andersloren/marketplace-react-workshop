import React from 'react';
import Header from './components/header/Header';
import SearchAd from './components/ads/SearchAd';
import { AdsList } from './components/ads/AdsList';

const App = () => {
    return (
        <div>
            <Header />
            <SearchAd />
            <AdsList />
        </div>
    );
};

export default App;