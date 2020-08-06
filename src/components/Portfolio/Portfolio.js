import React from 'react'
import { PortfolioContainer, SubHeader, Video, VideoWrapper, VideoHeader, ProgressBar } from '../Portfolio/index'
import { ProjectsCard, BlogCard, GalerryCard } from '../Cards/Cards'
import baybayin from '../../videos/baybayintagalog.mp4'

export default function Portfolio() {
    return (
        <PortfolioContainer>

            <VideoWrapper>
                <Video playsInline autoPlay loop muted preload="none">
                    <source src={baybayin} />
                </Video>
                <VideoHeader>
                    <li>my workspace</li>
                </VideoHeader>
            </VideoWrapper>

            <SubHeader>This is my workspace and my personal station where I brainstorm and create my ideas. It’s also my productive area whenever I code or draw/edit photos and videos, in addition I can relax and play games.</SubHeader>
            <ProjectsCard />
            <BlogCard />
            <SubHeader>As much as I disliked reading and writing, a particular essay prompt given by my professor caught my attention when I went to study at LACC. Unexpectedly, I got a pretty high grade on this, hope you like it!</SubHeader>
            <GalerryCard />
            <ProgressBar>
                <div className="header">Technology</div>
                <ul>
                    <li className="html">Html5 | Css3 | Sass</li>
                    <li className="js">Javascript</li>
                    <li className="react">React</li>
                </ul>
                <br />
                <br />
                <div className="header">Skills</div>
                <ul>
                    <li className="photoshop">Photoshop</li>
                    <li className="illustrator">Illustrator</li>
                    <li className="premiere-pro">Premiere Pro</li>
                </ul>
            </ProgressBar>
        </PortfolioContainer>
    )
}