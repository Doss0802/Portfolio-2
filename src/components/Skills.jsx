import { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
    const skillsRef = useRef(null);

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

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    const technicalSkills = [
        'HTML / CSS / JS',
        'Bootstrap',
        'React / Redux',
        'Node / Express',
        'Git / GitHub',
        'MongoDB'
    ];

    const softSkills = [
        'Problem solving',
        'Team Work',
        'Adaptability',
        'Time Management',
        'Communication',
        'Curiosity & Initiative'
    ];

    return (
        <section className="skills section" id="skills" ref={skillsRef}>
            <div className="container">
                <h2 className="section-title">Skills</h2>

                <div className="skills-grid">
                    <div className="skills-category">
                        <h3 className="category-title">Technical Skills</h3>
                        <div className="skills-list">
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="skill-card glass-card">
                                    <div className="skill-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="16 18 22 12 16 6" />
                                            <polyline points="8 6 2 12 8 18" />
                                        </svg>
                                    </div>
                                    <span className="skill-name">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-category">
                        <h3 className="category-title">Soft Skills</h3>
                        <div className="skills-list">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="skill-card glass-card">
                                    <div className="skill-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <span className="skill-name">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
