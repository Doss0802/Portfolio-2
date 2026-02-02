import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <section className="about section" id="about" ref={aboutRef}>
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text glass-card">
                        <h3>Objective</h3>
                        <p>
                            MERN Stack developer expertise in MongoDB, Express.js, React, and Node.js. Experienced
                            in building responsive, scalable web apps, creating REST APIs, and delivering user-centric
                            solutions with proven achievements in performance, deployment (Git/GitHub), and modern
                            end-to-end UI Framework to delivering innovative development skills.
                        </p>
                    </div>

                    <div className="about-info">
                        <div className="info-card glass-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <h4>Email</h4>
                                <a href="mailto:Yessudoss8056@gmail.com">Yessudoss8056@gmail.com</a>
                            </div>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <h4>Phone</h4>
                                <a href="tel:8056896694">8056896694</a>
                            </div>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <h4>Location</h4>
                                <p>Coimbatore, Tamil Nadu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
