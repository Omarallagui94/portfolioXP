import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import { WindowDropDowns, Google } from 'components';
import dropDownData from './dropDownData';
import ie from 'assets/windowsIcons/ie-paper.png';
import printer from 'assets/windowsIcons/17(32x32).png';
import go from 'assets/windowsIcons/290.png';
import links from 'assets/windowsIcons/links.png';
import search from 'assets/windowsIcons/299(32x32).png';
import favorite from 'assets/windowsIcons/744(32x32).png';
import back from 'assets/windowsIcons/back.png';
import earth from 'assets/windowsIcons/earth.png';
import edit from 'assets/windowsIcons/edit.png';
import forward from 'assets/windowsIcons/forward.png';
import history from 'assets/windowsIcons/history.png';
import home from 'assets/windowsIcons/home.png';
import mail from 'assets/windowsIcons/mail.png';
import msn from 'assets/windowsIcons/msn.png';
import refresh from 'assets/windowsIcons/refresh.png';
import stop from 'assets/windowsIcons/stop.png';
import windows from 'assets/windowsIcons/windows.png';
import dropdown from 'assets/windowsIcons/dropdown.png';

function InternetExplorer({
  onClose,
  mode = 'browser',
  projects = [],
  pdfUrl,
  imageUrl,
  imageAlt = 'Certificate',
}) {
  const initialRoute =
    mode === 'projects' ? 'projects' : mode === 'pdf' ? 'pdf' : mode === 'image' ? 'image' : 'main';
  const [state, setState] = useState({
    route: initialRoute,
    query: '',
  });
  const normalizedProjects = useMemo(
    () =>
      projects.length
        ? projects
        : [
            {
              title: 'Coming Soon',
              description:
                'Drop your next big idea here. This space showcases featured work in a cinematic Netflix-inspired layout.',
              tags: ['Stay Tuned'],
              link: '#',
              theme: ['#434343', '#000000'],
            },
          ],
    [projects]
  );
  function onSearch(str) {
    if (str.length) {
      setState({
        route: 'search',
        query: str,
      });
    }
  }
  function goMain() {
    setState({
      route:
        mode === 'projects'
          ? 'projects'
          : mode === 'pdf'
          ? 'pdf'
          : mode === 'image'
          ? 'image'
          : 'main',
      query: '',
    });
  }
  function onClickOptionItem(item) {
    switch (item) {
      case 'Close':
        onClose();
        break;
      case 'Home Page':
      case 'Back':
        goMain();
        break;
      default:
    }
  }
  return (
    <Div>
      <section className="ie__toolbar">
        <div className="ie__options">
          <WindowDropDowns items={dropDownData} onClickItem={onClickOptionItem} height={21} />
        </div>
        <img className="ie__windows-logo" src={windows} alt="windows" />
      </section>
      <section className="ie__function_bar">
        <div
          onClick={goMain}
          className={`ie__function_bar__button${state.route === 'main' ? '--disable' : ''}`}
        >
          <img className="ie__function_bar__icon" src={back} alt="" />
          <span className="ie__function_bar__text">Back</span>
          <div className="ie__function_bar__arrow" />
        </div>
        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={forward} alt="" />
          <div className="ie__function_bar__arrow" />
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src={stop} alt="" />
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src={refresh} alt="" />
        </div>
        <div className="ie__function_bar__button" onClick={goMain}>
          <img className="ie__function_bar__icon--margin-1" src={home} alt="" />
        </div>
        <div className="ie__function_bar__separate" />
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--normalize " src={search} alt="" />
          <span className="ie__function_bar__text">Search</span>
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--normalize" src={favorite} alt="" />
          <span className="ie__function_bar__text">Favorites</span>
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon" src={history} alt="" />
        </div>
        <div className="ie__function_bar__separate" />
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src={mail} alt="" />
          <div className="ie__function_bar__arrow--margin-11" />
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin12" src={printer} alt="" />
        </div>
        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={edit} alt="" />
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin12" src={msn} alt="" />
        </div>
      </section>
      <section className="ie__address_bar">
        <div className="ie__address_bar__title">Address</div>
        <div className="ie__address_bar__content">
          <img src={ie} alt="ie" className="ie__address_bar__content__img" />
          <div className="ie__address_bar__content__text">
            {state.route === 'projects'
              ? 'https://omar.dev/projects'
              : state.route === 'pdf'
              ? pdfUrl || '/Certificate.pdf'
              : state.route === 'image'
              ? imageUrl || ''
              : `https://www.google.com.tw${
                  state.route === 'search' ? `/search?q=${encodeURIComponent(state.query)}` : ''
                }`}
          </div>
          <img src={dropdown} alt="dropdown" className="ie__address_bar__content__img" />
        </div>
        <div className="ie__address_bar__go">
          <img className="ie__address_bar__go__img" src={go} alt="go" />
          <span className="ie__address_bar__go__text">Go</span>
        </div>
        <div className="ie__address_bar__separate" />
        <div className="ie__address_bar__links">
          <span className="ie__address_bar__links__text">Links</span>
          <img className="ie__address_bar__links__img" src={links} alt="links" />
        </div>
      </section>
      <div className="ie__content">
        <div className="ie__content__inner">
          {state.route === 'projects' ? (
            <ProjectsView projects={normalizedProjects} />
          ) : state.route === 'pdf' ? (
            <iframe
              title="CPPS Certificate"
              src={pdfUrl || '/Certificate.pdf'}
              style={{ border: 'none', width: '100%', height: '100%' }}
            />
          ) : state.route === 'image' ? (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#1b1b1b',
              }}
            >
              <img
                src={imageUrl || ''}
                alt={imageAlt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
                }}
              />
            </div>
          ) : (
            <Google route={state.route} query={state.query} onSearch={onSearch} goMain={goMain} />
          )}
        </div>
      </div>
      <footer className="ie__footer">
        <div className="ie__footer__status">
          <img className="ie__footer__status__img" src={ie} alt="" />
          <span className="ie__footer__status__text">Done</span>
        </div>
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__right">
          <img className="ie__footer__right__img" src={earth} alt="" />
          <span className="ie__footer__right__text">Internet</span>
          <div className="ie__footer__right__dots" />
        </div>
      </footer>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);

  .ie__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }
  .ie__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    border-right: 1px solid rgba(0, 0, 0, 0.15);
    padding-left: 2px;
    flex: 1;
  }
  .ie__windows-logo {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar {
    height: 36px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar__button {
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
    }
    &:hover:active {
      border: 1px solid rgb(185, 185, 185);
      background-color: #dedede;
      box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
      color: rgba(255, 255, 255, 0.7);
      & > * {
        transform: translate(1px, 1px);
      }
    }
  }
  .ie__function_bar__button--disable {
    filter: grayscale(1);
    opacity: 0.7;
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .ie__function_bar__text {
    margin-right: 4px;
  }
  .ie__function_bar__icon {
    height: 30px;
    width: 30px;
    &--normalize {
      height: 22px;
      width: 22px;
      margin: 0 4px 0 1px;
    }
    &--margin12 {
      height: 22px;
      width: 22px;
      margin: 0 1px 0 2px;
    }
    &--margin-1 {
      margin: 0 -1px;
      height: 30px;
      width: 30px;
    }
  }
  .ie__function_bar__separate {
    height: 90%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 2px;
  }
  .ie__function_bar__arrow {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 4px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .ie__function_bar__arrow--margin-11 {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 1px 0 -1px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .ie__address_bar {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 22px;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 0 2px 2px;
    box-shadow: inset 0 -2px 3px -1px #2d2d2d;
  }
  .ie__address_bar__title {
    line-height: 100%;
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .ie__address_bar__content {
    border: rgba(122, 122, 255, 0.6) 1px solid;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: white;
    position: relative;
    &__img {
      width: 14px;
      height: 14px;
    }
    &__img:last-child {
      width: 15px;
      height: 15px;
      right: 1px;
      position: absolute;
    }
    &__img:last-child:hover {
      filter: brightness(1.1);
    }
    &__text {
      position: absolute;
      white-space: nowrap;
      left: 16px;
      right: 17px;
      overflow: hidden;
    }
  }
  .ie__address_bar__go {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      height: 95%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-right: 3px;
    }
  }
  .ie__address_bar__links {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      position: absolute;
      right: 2px;
      top: 3px;
      height: 5px;
      width: 8px;
    }
    &__text {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .ie__address_bar__separate {
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 1px 0 rgba(255, 255, 255, 0.7);
  }
  .ie__content {
    flex: 1;
    overflow: auto;
    padding-left: 1px;
    border-left: 1px solid #6f6f6f;
    background-color: #f1f1f1;
    position: relative;
  }
  .ie__content__inner {
    position: relative;
    min-height: 800px;
    min-width: 800px;
    width: 100%;
    height: 100%;
  }
  .ie__footer {
    height: 20px;
    border-top: 1px solid transparent;
    box-shadow: inset 0 1px 3px rgba(50, 50, 50, 0.8);
    background-color: rgb(236, 233, 216);
    display: flex;
    align-items: center;
    padding-top: 2px;
  }
  .ie__footer__status {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 2px;
    &__text {
      font-size: 11px;
    }
    &__img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
  }
  .ie__footer__block {
    height: 85%;
    width: 22px;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: inset 1px 0 rgba(255, 255, 255, 0.7);
  }
  .ie__footer__right {
    display: flex;
    align-items: center;
    width: 150px;
    height: 80%;
    border-left: 1px solid rgba(0, 0, 0, 0.11);
    box-shadow: inset 1px 0 rgba(255, 255, 255, 0.7);
    padding-left: 5px;
    position: relative;
    &__text {
      font-size: 11px;
    }
    &__img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
    &__dots {
      position: absolute;
      right: 11px;
      bottom: -1px;
      width: 2px;
      height: 2px;
      box-shadow: 2px 0px rgba(0, 0, 0, 0.25), 5.5px 0px rgba(0, 0, 0, 0.25),
        9px 0px rgba(0, 0, 0, 0.25), 5.5px -3.5px rgba(0, 0, 0, 0.25),
        9px -3.5px rgba(0, 0, 0, 0.25), 9px -7px rgba(0, 0, 0, 0.25), 3px 1px rgba(255, 255, 255, 1),
        6.5px 1px rgba(255, 255, 255, 1), 10px 1px rgba(255, 255, 255, 1),
        10px -2.5px rgba(255, 255, 255, 1), 10px -6px rgba(255, 255, 255, 1);
    }
  }
`;

export default InternetExplorer;

function ProjectsView({ projects }) {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

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
    // Fallback to gradient if no image
    const gradient = getGradient(project.theme);
    return { backgroundImage: gradient };
  };

  // Get unique categories from projects
  const categories = ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];

  // Filter projects by selected category
  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory);

  // First project is featured
  const isFeatured = index => index === 0;

  return (
    <ProjectsWrapper>
      <ProjectsHeader>
        <ProjectsHeaderTitle>My Projects</ProjectsHeaderTitle>
        <ProjectsHeaderSubtitle>
          {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
        </ProjectsHeaderSubtitle>
      </ProjectsHeader>

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

function getGradient(theme = []) {
  if (theme.length >= 2) {
    return `linear-gradient(135deg, ${theme[0]}, ${theme[1]})`;
  }
  if (theme.length === 1) {
    return `linear-gradient(135deg, ${theme[0]}, ${theme[0]})`;
  }
  return 'linear-gradient(135deg, #1f1c2c, #928dab)';
}

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
`;

const ProjectsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 12px;
  border-bottom: 1px solid #272727;
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

const CategoryTabs = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #272727;
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
  background: ${props => (props.active ? '#ff0000' : '#272727')};
  color: ${props => (props.active ? '#ffffff' : '#aaaaaa')};
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: ${props => (props.active ? '600' : '500')};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  font-family: 'Segoe UI', Roboto, Arial, sans-serif;

  &:hover {
    background: ${props => (props.active ? '#cc0000' : '#3a3a3a')};
    color: #ffffff;
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
