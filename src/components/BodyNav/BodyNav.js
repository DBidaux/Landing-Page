import React, { useState } from 'react';
import './BodyNav.css';
import PostGuest from '../PostsComps/PostGuest';
import PostAbout from '../PostsComps/PostAbout';
import PostContent from '../PostsComps/PostContent';
import PostFeed from '../PostsComps/PostFeed';

export default function NavBar() {
    const [activeTab, setActiveTab] = useState('Feed');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="nav-container">
            <nav className="nav-bar">
                <ul className="tab-list" role="tablist">
                    <li role="presentation">
                        <a
                            href="#feed"
                            role="tab"
                            id="tab1"
                            className={activeTab === 'Feed' ? 'active' : ''}
                            onClick={() => handleTabChange('Feed')}
                            aria-selected={activeTab === 'Feed'}
                        >
                            <span className="tab-item">Feed</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a
                            href="#about"
                            role="tab"
                            id="tab2"
                            className={activeTab === 'About' ? 'active' : ''}
                            onClick={() => handleTabChange('About')}
                            aria-selected={activeTab === 'About'}
                        >
                            <span className="tab-item">About</span>
                        </a>
                    </li>
                    <li role="presentation">
                        <a
                            href="#content"
                            role="tab"
                            id="tab3"
                            className={activeTab === 'Content' ? 'active' : ''}
                            onClick={() => handleTabChange('Content')}
                            aria-selected={activeTab === 'Content'}
                        >
                            <span className="tab-item">Content</span>
                        </a>
                    </li>
                  
                </ul>
            </nav>
            <div className="tab-content">
                {activeTab === 'Feed' && <div><PostFeed /></div>}
                {activeTab === 'About' && <div><PostAbout /></div>}
                {activeTab === 'Content' && <div><PostContent /></div>}
               
            </div>
        </div>
    );
}
