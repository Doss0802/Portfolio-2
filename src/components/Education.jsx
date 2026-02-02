import { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
    const educationRef = useRef(null);

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

        if (educationRef.current) {
            observer.observe(educationRef.current);
        }

        return () => {
            if (educationRef.current) {
                observer.unobserve(educationRef.current);
            }
        };
    }, []);

    return (
        <section className="education section" id="education" ref={educationRef}>
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className="education-timeline">
                    <div className="timeline-item glass-card">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">B.Voc Data Science</h3>
                            <p className="timeline-institution">American College, Madurai</p>
                            <p className="timeline-year">2021 - 2024</p>
                        </div>
                    </div>

                    <div className="timeline-item glass-card">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">MERN Stack Development</h3>
                            <p className="timeline-institution">AITECH Academy</p>
                            <p className="timeline-description">
                                Completed a MERN Stack Development course with hands-on experience in building full-stack
                                web applications. Gained practical skills in developing responsive and dynamic web solutions
                                using MongoDB, Express.js, React.js, and Node.js. Built and deployed multiple real-world
                                projects using modern JavaScript.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
