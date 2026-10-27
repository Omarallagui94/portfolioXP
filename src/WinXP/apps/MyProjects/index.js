import React from 'react';
import styled from 'styled-components';
import projectsData from 'data/projects';

function MyProjects({ projects = [], maximized = false, ...props }) {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  // Use provided projects or default
  const allProjects = projects.length ? projects : projectsData;

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
  const categories = [
    'All',
    ...new Set(
      allProjects.flatMap(
        project => project.categories || (project.category ? [project.category] : [])
      )
    ),
  ];

  // Filter projects by selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter(project =>
          (project.categories || (project.category ? [project.category] : [])).includes(
            selectedCategory
          )
        );

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
          Cloud engineering, DevSecOps, and full-stack work · {allProjects.length}{' '}
          {allProjects.length === 1 ? 'project' : 'projects'}
        </ProjectsHeaderSubtitle>
      </ProjectsHeader>

      {!maximized && (
        <CategoryTabs>
          {categories.map(category => (
            <CategoryTab
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </CategoryTab>
          ))}
        </CategoryTabs>
      )}

      <ProjectsGrid>
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.title}
            href={project.link && project.link !== '#' ? project.link : undefined}
            target={project.link && project.link !== '#' ? '_blank' : undefined}
            rel={project.link && project.link !== '#' ? 'noreferrer' : undefined}
            as={project.link && project.link !== '#' ? 'a' : 'div'}
          >
            <ProjectThumbnail style={getBackgroundStyle(project)}>
              {!project.image && (
                <ProjectVisual accent={project.accent}>
                  <ProjectVisualMark>{project.visual}</ProjectVisualMark>
                  <ProjectVisualTitle>{project.title}</ProjectVisualTitle>
                  <ProjectVisualMeta>{project.tags.slice(0, 4).join('  /  ')}</ProjectVisualMeta>
                </ProjectVisual>
              )}
              <ProjectThumbnailOverlay />
              {project.featured && (
                <FeaturedBadge>
                  <FeaturedIcon>★</FeaturedIcon>
                  FEATURED
                </FeaturedBadge>
              )}
              {project.link && project.link !== '#' && (
                <ProjectLinkHint>
                  View project <span aria-hidden="true">↗</span>
                </ProjectLinkHint>
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
  flex-shrink: 0;
  gap: 4px;
  padding-bottom: 16px;
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
  color: #b8b8b8;
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
  flex-shrink: 0;
  gap: 12px;
  padding: 0 0 10px;
  margin-bottom: 2px;
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
  background: ${props => (props.active ? '#ff0000' : '#282828')};
  color: ${props => (props.active ? '#ffffff' : '#e0e0e0')};
  border: 1px solid ${props => (props.active ? '#ff3838' : '#454545')};
  padding: 8px 16px;
  border-radius: 18px;
  font-size: 13px;
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
    background: ${props => (props.active ? '#d90000' : '#3b3b3b')};
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
  gap: 20px 16px;
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
  gap: 0;
  padding: 6px;
  background: #171717;
  border: 1px solid #262626;
  border-radius: 14px;
  text-decoration: none;
  color: #fff;
  cursor: ${props => (props.href ? 'pointer' : 'default')};
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: ${props => (props.href ? 'translateY(-2px)' : 'none')};
    border-color: ${props => (props.href ? '#454545' : '#262626')};
    background: ${props => (props.href ? '#1c1c1c' : '#171717')};
  }
`;

const ProjectThumbnail = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: 9px;
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

const ProjectVisual = styled.div`
  position: absolute;
  inset: 0;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ accent = ['#2563eb', '#111827'] }) =>
    `radial-gradient(circle at 85% 20%, ${accent[0]}55, transparent 32%), linear-gradient(135deg, ${accent[1]}, #080b12)`};
  color: #fff;
`;

const ProjectVisualMark = styled.span`
  color: #9ec5ff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
`;

const ProjectVisualTitle = styled.strong`
  max-width: 92%;
  margin: 8px 0 14px;
  font-size: 24px;
  line-height: 1.08;
`;

const ProjectVisualMeta = styled.span`
  color: #cbd5e1;
  font-size: 10px;
  letter-spacing: 0.4px;
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

const ProjectLinkHint = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 2;
  padding: 6px 9px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 14px;
  background: rgba(10, 10, 10, 0.82);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.2s ease, transform 0.2s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 8px 10px;
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
