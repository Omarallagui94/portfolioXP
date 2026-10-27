import React from 'react';
import styled from 'styled-components';
import projectsData from 'data/projects';

function MyProjects({ projects = [] }) {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const allProjects = projects.length ? projects : projectsData;
  const categories = [
    'All',
    ...new Set(
      allProjects.flatMap(
        project => project.categories || (project.category ? [project.category] : [])
      )
    ),
  ];
  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter(project =>
          (project.categories || (project.category ? [project.category] : [])).includes(
            selectedCategory
          )
        );

  const backgroundStyle = project => {
    if (!project.image) return {};
    const imagePath =
      typeof project.image === 'string' ? project.image : project.image.default || project.image;
    return { backgroundImage: `url(${imagePath})` };
  };

  return (
    <Page>
      <TopBar>
        <MenuButton aria-label="Open guide">☰</MenuButton>
        <Logo aria-label="YouTube Projects">
          <LogoYou>You</LogoYou>
          <LogoTube>Tube</LogoTube>
        </Logo>
        <SearchBox>
          <SearchInput aria-label="Search projects" value="Search projects" readOnly />
          <SearchButton aria-label="Search">⌕</SearchButton>
        </SearchBox>
        <UploadButton>Upload</UploadButton>
        <UserAvatar>OA</UserAvatar>
      </TopBar>

      <Layout>
        <Guide>
          <GuideTitle>GUIDE</GuideTitle>
          {categories.map(category => (
            <GuideItem
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              <GuideIcon>{category === 'All' ? '⌂' : '▶'}</GuideIcon>
              <span>{category === 'All' ? 'What to watch' : category}</span>
            </GuideItem>
          ))}
          <GuideDivider />
          <GuideTitle>PORTFOLIO</GuideTitle>
          <GuideMeta>{allProjects.length} projects</GuideMeta>
          <GuideMeta>Omar Allagui</GuideMeta>
        </Guide>

        <Content>
          <ChannelHeader>
            <ChannelAvatar>OA</ChannelAvatar>
            <ChannelCopy>
              <ChannelName>Omar's Projects</ChannelName>
              <ChannelMeta>Cloud Engineering · DevSecOps · Development</ChannelMeta>
            </ChannelCopy>
            <SubscribeButton>Subscribe</SubscribeButton>
            <SubscriberCount>{allProjects.length}</SubscriberCount>
          </ChannelHeader>

          <Shelf>
            <ShelfHeading>
              <ShelfTitle>
                {selectedCategory === 'All' ? 'Featured projects' : selectedCategory}
              </ShelfTitle>
              <ShelfCount>{filteredProjects.length} videos</ShelfCount>
            </ShelfHeading>
            <ProjectsGrid>
              {filteredProjects.map(project => {
                const linked = project.link && project.link !== '#';
                return (
                  <ProjectCard
                    key={project.title}
                    href={linked ? project.link : undefined}
                    target={linked ? '_blank' : undefined}
                    rel={linked ? 'noreferrer' : undefined}
                    as={linked ? 'a' : 'div'}
                  >
                    <Thumbnail style={backgroundStyle(project)}>
                      {!project.image && (
                        <GeneratedThumbnail accent={project.accent}>
                          <ThumbnailEyebrow>{project.visual}</ThumbnailEyebrow>
                          <ThumbnailTitle>{project.title.split(' - ')[0]}</ThumbnailTitle>
                          <ThumbnailTags>{project.tags.slice(0, 3).join(' · ')}</ThumbnailTags>
                        </GeneratedThumbnail>
                      )}
                      {project.featured && <FeaturedLabel>FEATURED</FeaturedLabel>}
                      <Duration>PROJECT</Duration>
                    </Thumbnail>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectOwner>Omar Allagui</ProjectOwner>
                    <ProjectDescription>{project.description}</ProjectDescription>
                  </ProjectCard>
                );
              })}
            </ProjectsGrid>
          </Shelf>
        </Content>
      </Layout>
    </Page>
  );
}

const Page = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f1f1f1;
  color: #333;
  font: 12px Arial, Helvetica, sans-serif;
`;
const TopBar = styled.header`
  z-index: 3;
  min-height: 48px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
`;
const MenuButton = styled.button`
  width: 25px;
  padding: 0;
  border: 0;
  background: transparent;
  color: #777;
  font-size: 18px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #222;
  font: 900 18px Arial Black, Arial, sans-serif;
  letter-spacing: -1.4px;
`;
const LogoYou = styled.span``;
const LogoTube = styled.span`
  margin-left: 2px;
  padding: 2px 4px 3px;
  border-radius: 3px;
  background: linear-gradient(#e52d27, #b31217);
  color: #fff;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.25);
`;
const SearchBox = styled.div`
  height: 28px;
  min-width: 150px;
  max-width: 360px;
  margin-left: 8px;
  display: flex;
  flex: 1;
`;
const SearchInput = styled.input`
  min-width: 0;
  flex: 1;
  padding: 5px 8px;
  border: 1px solid #b9b9b9;
  border-right: 0;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.12);
  color: #999;
  font: 12px Arial, sans-serif;
`;
const SearchButton = styled.button`
  width: 44px;
  border: 1px solid #b9b9b9;
  background: linear-gradient(#fff, #eee);
  color: #555;
  font-size: 18px;
`;
const UploadButton = styled.button`
  padding: 6px 11px;
  border: 1px solid #c6c6c6;
  border-radius: 2px;
  background: linear-gradient(#fff, #f2f2f2);
  color: #444;
  font: bold 11px Arial, sans-serif;
`;
const UserAvatar = styled.div`
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  border-radius: 2px;
  background: #3b78b4;
  color: white;
  font-size: 10px;
  font-weight: bold;
`;
const Layout = styled.div`
  min-height: 0;
  display: flex;
  flex: 1;
`;
const Guide = styled.nav`
  width: 145px;
  flex-shrink: 0;
  padding: 15px 0;
  overflow-y: auto;
  background: #fff;
  border-right: 1px solid #ddd;
`;
const GuideTitle = styled.div`
  padding: 5px 15px;
  color: #999;
  font-size: 10px;
  font-weight: bold;
`;
const GuideItem = styled.button`
  width: 100%;
  min-height: 30px;
  padding: 6px 10px 6px 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 0;
  border-left: 3px solid ${props => (props.active ? '#cc181e' : 'transparent')};
  background: ${props => (props.active ? '#e9e9e9' : 'transparent')};
  color: ${props => (props.active ? '#222' : '#555')};
  font: ${props => (props.active ? 'bold' : 'normal')} 11px Arial, sans-serif;
  text-align: left;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;
const GuideIcon = styled.span`
  width: 15px;
  color: #cc181e;
  font-size: 11px;
  text-align: center;
`;
const GuideDivider = styled.div`
  margin: 10px 12px;
  border-top: 1px solid #ddd;
`;
const GuideMeta = styled.div`
  padding: 4px 15px;
  color: #777;
  font-size: 11px;
`;
const Content = styled.main`
  min-width: 0;
  padding: 16px;
  flex: 1;
  overflow-y: auto;
`;
const ChannelHeader = styled.section`
  min-height: 48px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
`;
const ChannelAvatar = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 10px;
  display: grid;
  place-items: center;
  background: #315b7d;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;
const ChannelCopy = styled.div`
  min-width: 0;
  flex: 1;
`;
const ChannelName = styled.div`
  margin-bottom: 3px;
  color: #222;
  font-size: 15px;
`;
const ChannelMeta = styled.div`
  overflow: hidden;
  color: #888;
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const SubscribeButton = styled.button`
  padding: 6px 10px;
  border: 1px solid #b31217;
  border-radius: 2px 0 0 2px;
  background: #cc181e;
  color: #fff;
  font: bold 11px Arial, sans-serif;
`;
const SubscriberCount = styled.span`
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-left: 0;
  border-radius: 0 2px 2px 0;
  background: #fafafa;
  color: #777;
  font-size: 11px;
`;
const Shelf = styled.section`
  margin-top: 12px;
  padding: 12px;
  background: #fff;
  border: 1px solid #ddd;
`;
const ShelfHeading = styled.div`
  margin-bottom: 10px;
  padding-bottom: 8px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  border-bottom: 1px solid #e5e5e5;
`;
const ShelfTitle = styled.h1`
  margin: 0;
  color: #333;
  font-size: 14px;
  font-weight: bold;
`;
const ShelfCount = styled.span`
  color: #999;
  font-size: 10px;
`;
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 18px 10px;
  @media (max-width: 620px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }
`;
const ProjectCard = styled.a`
  min-width: 0;
  color: #333;
  text-decoration: none;
  cursor: ${props => (props.href ? 'pointer' : 'default')};
  &:hover h3 {
    color: #cc181e;
    text-decoration: underline;
  }
`;
const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;
  background-color: #222;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
`;
const GeneratedThumbnail = styled.div`
  position: absolute;
  inset: 0;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ accent = ['#cc181e', '#1f2937'] }) =>
    `linear-gradient(135deg, ${accent[1]}, #111 72%), ${accent[0]}`};
  color: white;
`;
const ThumbnailEyebrow = styled.span`
  color: #c9dfff;
  font-size: 8px;
  font-weight: bold;
  letter-spacing: 1px;
`;
const ThumbnailTitle = styled.strong`
  margin: 5px 0 8px;
  font-size: 16px;
  line-height: 1.05;
`;
const ThumbnailTags = styled.span`
  color: #ddd;
  font-size: 7px;
`;
const FeaturedLabel = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 3px 5px;
  background: #cc181e;
  color: #fff;
  font-size: 8px;
  font-weight: bold;
`;
const Duration = styled.span`
  position: absolute;
  right: 4px;
  bottom: 4px;
  padding: 2px 4px;
  background: rgba(0, 0, 0, 0.78);
  color: #fff;
  font-size: 8px;
  font-weight: bold;
`;
const ProjectTitle = styled.h3`
  margin: 6px 0 3px;
  overflow: hidden;
  color: #167ac6;
  font-size: 11px;
  line-height: 1.25;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ProjectOwner = styled.div`
  margin-bottom: 3px;
  color: #777;
  font-size: 9px;
`;
const ProjectDescription = styled.p`
  margin: 0;
  display: -webkit-box;
  overflow: hidden;
  color: #777;
  font-size: 9px;
  line-height: 1.35;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export default MyProjects;
