import { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
    const projectsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        };
    }, []);

    const projects = [
        {
            title: 'YesuDoss.in - Personal Portfolio Website',
            description: 'Built a personal portfolio website using the MERN stack to showcase projects and skills. Developed responsive React UI with backend APIs using Node.js, Express.js, and MongoDB.',
            tech: ['React', 'Node.js', 'Express.js', 'MongoDB']
        },
        {
            title: 'AdoreExports.com - Business Website',
            description: 'Developed a full-stack export business website using the MERN stack. Implemented WhatsApp chat button integration to enable direct customer communication and inquiry handling.',
            tech: ['MERN Stack', 'WhatsApp API', 'REST APIs']
        },
        {
            title: 'Delight Foods',
            description: 'Developed a company website using the MERN stack to present products and business details. Implemented REST APIs and enquiry handling with MongoDB integration.',
            tech: ['MongoDB', 'Express.js', 'React', 'Node.js']
        }
    ];

    return (
        <section className="projects section" id="projects" ref={projectsRef}>
            <div className="container">
                <h2 className="section-title">Project Experience</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass-card">
                            <div className="project-number">0{index + 1}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
