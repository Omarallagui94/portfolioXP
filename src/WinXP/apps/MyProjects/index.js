import React from 'react';
import styled from 'styled-components';
import InsightImage from 'assets/Insight.png';
import MasterOfSfaxImage from 'assets/MasterOfSfax.png';
import RecruteMeImage from 'assets/RecruteMe.PNG';
import RentyImage from 'assets/Renty.png';
import LabNectarImage from 'assets/LabNectar.png';

const DEFAULT_PROJECTS = [
  {
    title: 'RecruteMe',
    description:
      'A modern job recruitment platform connecting job seekers with their dream opportunities. Features include job listings, application tracking, and employer dashboards.',
    tags: ['MERN STACK', 'REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    link: 'https://github.com/omaraallagui/RecruteMe',
    image: RecruteMeImage,
    // No category - only shows in 'All'
  },
  {
    title: 'MasterOfSfax',
    description:
      'University management dashboard for Université de Sfax. Includes student management, course scheduling, teacher assignments, and academic calendar integration.',
    tags: ['MERN STACK', 'REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    link: 'https://github.com/omaraallagui/MasterOfsfax',
    image: MasterOfSfaxImage,
    category: 'Dev',
  },
  {
    title: 'Renty',
    description:
      'Car rental platform providing easy and affordable car rental services. Features include car search, booking management, and secure payment processing.',
    tags: ['MERN STACK', 'REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    link: 'https://github.com/omaraallagui/renty',
    image: RentyImage,
    category: 'Dev',
  },
  {
    title: 'Insight',
    description:
      'A versatile Point of Sales platform tailored to manage sales, inventory, and customer transactions for various types of stores with ease and efficiency.',
    tags: ['REACT', 'MONGODB', 'TAILWIND', 'NODE.JS', 'EXPRESS.JS'],
    link: '#',
    image: InsightImage,
    category: 'Dev',
  },
  {
    title: 'Lab Nectar',
    description: 'Coming soon - A new project built with the MERN stack. Stay tuned for updates!',
    tags: ['MERN STACK', 'REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    link: '#',
    image: LabNectarImage,
    category: 'Dev',
  },
];

function MyProjects({ projects = [], maximized = false, ...props }) {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  // Use provided projects or default
  const allProjects = projects.length ? projects : DEFAULT_PROJECTS;

  const getBackgroundStyle = project => {
    if (project.image) {
      const imagePath =
        typeof project.image === 'string' ? project.image : project.image.default || project.image;
      return {
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
    }
    return { backgroundColor: '#212121' };
  };

  // Get unique categories from projects
  const categories = ['All', ...new Set(allProjects.map(p => p.category).filter(Boolean))];

  // Filter projects by selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter(p => p.category === selectedCategory);

  // First project is featured
  const isFeatured = index => index === 0;

  return (
    <ProjectsWrapper>
      <ProjectsHeader>
        <ProjectsHeaderTitleRow>
          <YouTubeLogo>
            <YouTubePlay />
          </YouTubeLogo>
          <ProjectsHeaderTitle>My Projects</ProjectsHeaderTitle>
        </ProjectsHeaderTitleRow>
        <ProjectsHeaderSubtitle>
          {allProjects.length} {allProjects.length === 1 ? 'Project' : 'Projects'}
        </ProjectsHeaderSubtitle>
      </ProjectsHeader>

      {!maximized && (
        <CategoryTabs>
          {categories.map(category => (
            <CategoryTab
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryTab>
          ))}
        </CategoryTabs>
      )}

      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            href={project.link && project.link !== '#' ? project.link : undefined}
            target={project.link && project.link !== '#' ? '_blank' : undefined}
            rel={project.link && project.link !== '#' ? 'noreferrer' : undefined}
            as={project.link && project.link !== '#' ? 'a' : 'div'}
          >
            <ProjectThumbnail style={getBackgroundStyle(project)}>
              <ProjectThumbnailOverlay />
              {isFeatured(index) && (
                <FeaturedBadge>
                  <FeaturedIcon>★</FeaturedIcon>
                  FEATURED
                </FeaturedBadge>
              )}
            </ProjectThumbnail>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags?.map(tag => (
                  <ProjectTag key={tag}>{tag}</ProjectTag>
                ))}
              </ProjectTags>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsWrapper>
  );
}

// YouTube-style Styled Components
const ProjectsWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  background: #0f0f0f;
  color: #fff;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
`;

const ProjectsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 12px;
  border-bottom: 1px solid #272727;
`;

const ProjectsHeaderTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProjectsHeaderTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.5px;
`;

const ProjectsHeaderSubtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #aaaaaa;
  font-weight: 400;
`;

const YouTubeLogo = styled.div`
  width: 36px;
  height: 24px;
  border-radius: 6px;
  background: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.35);
`;

const YouTubePlay = styled.div`
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 12px solid #fff;
  margin-left: 2px;
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 0 24px 0;
  margin-bottom: 12px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  &::-webkit-scrollbar-thumb {
    background: #3a3a3a;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #4a4a4a;
  }
`;

const CategoryTab = styled.button`
  background: ${props => (props.active ? '#ff0000' : '#4a4a4a')};
  color: ${props => (props.active ? '#ffffff' : '#e0e0e0')};
  border: ${props => (props.active ? 'none' : '1px solid #666666')};
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: ${props => (props.active ? '600' : '500')};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;
  box-shadow: ${props =>
    props.active ? '0 2px 8px rgba(255, 0, 0, 0.3)' : '0 1px 3px rgba(0, 0, 0, 0.3)'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  line-height: 1.2;

  &:hover {
    background: ${props => (props.active ? '#cc0000' : '#5a5a5a')};
    color: #ffffff;
    border-color: ${props => (props.active ? 'none' : '#888888')};
    transform: translateY(-1px);
    box-shadow: ${props =>
      props.active ? '0 3px 10px rgba(255, 0, 0, 0.4)' : '0 2px 6px rgba(0, 0, 0, 0.4)'};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 24px 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const ProjectCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-decoration: none;
  color: #fff;
  cursor: ${props => (props.href ? 'pointer' : 'default')};
  transition: transform 0.2s ease;

  &:hover {
    transform: ${props => (props.href ? 'translateY(-2px)' : 'none')};
  }
`;

const ProjectThumbnail = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: 12px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #212121;
  transition: box-shadow 0.2s ease;

  ${ProjectCard}:hover & {
    box-shadow: 0 4px 16px rgba(255, 0, 0, 0.3);
  }
`;

const ProjectThumbnailOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  opacity: 0.6;
  transition: opacity 0.2s ease;

  ${ProjectCard}:hover & {
    opacity: 0.3;
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ff0000;
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const FeaturedIcon = styled.span`
  font-size: 14px;
  line-height: 1;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${ProjectCard}:hover & {
    color: #ff0000;
  }
`;

const ProjectDescription = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #aaaaaa;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

const ProjectTag = styled.span`
  font-size: 11px;
  padding: 4px 8px;
  background: #272727;
  color: #aaaaaa;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  transition: background 0.2s ease, color 0.2s ease;

  ${ProjectCard}:hover & {
    background: #3a3a3a;
    color: #ffffff;
  }
`;

export default MyProjects;
