import React from 'react';
import styled from 'styled-components';
import userIcon from 'assets/windowsIcons/user.png';
import githubIcon from 'assets/windowsIcons/289(32x32).png';
import linkIcon from 'assets/windowsIcons/214(16x16).png';
import pdfIcon from 'assets/windowsIcons/404(16x16).png';
import folderSmall from 'assets/windowsIcons/318(16x16).png';
import network from 'assets/windowsIcons/693(16x16).png';
import remove from 'assets/windowsIcons/302(16x16).png';
import pullup from 'assets/windowsIcons/pullup.png';
import back from 'assets/windowsIcons/back.png';
import forward from 'assets/windowsIcons/forward.png';
import up from 'assets/windowsIcons/up.png';
import search from 'assets/windowsIcons/299(32x32).png';
import folderOpen from 'assets/windowsIcons/337(32x32).png';
import menu from 'assets/windowsIcons/358(32x32).png';
import InsightImage from 'assets/Insight.png';
import LabNectarImage from 'assets/LabNectar.png';
import MasterOfSfaxImage from 'assets/MasterOfSfax.png';
import RecruteMeImage from 'assets/RecruteMe.PNG';
import RentyImage from 'assets/Renty.png';
import pic from 'assets/pic.png';

const PROJECTS = [
  {
    title: 'RecruteMe',
    description:
      'A modern job recruitment platform connecting job seekers with their dream opportunities. Features include job listings, application tracking, and employer dashboards.',
    link: 'https://github.com/Omarallagui94/eLearning',
    tags: ['MERN STACK', 'REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    theme: ['#8b5cf6', '#6366f1'],
    image: RecruteMeImage,
  },
  {
    title: 'MasterOfSfax',
    description:
      'University management dashboard for Université de Sfax. Includes student management, course scheduling, teacher assignments, and academic calendar integration.',
    link: 'https://github.com/Omarallagui94/MasterSfaxLatest',
    tags: ['MERN STACK', 'REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    theme: ['#3b82f6', '#1e40af'],
    image: MasterOfSfaxImage,
  },
  {
    title: 'Renty',
    description:
      'Car rental platform providing easy and affordable car rental services. Features include car search, booking management, and secure payment processing.',
    link: 'https://github.com/Omarallagui94/renty',
    tags: ['MERN STACK', 'REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    theme: ['#0ea5e9', '#0284c7'],
    image: RentyImage,
  },
  {
    title: 'Insight',
    description:
      'A versatile Point of Sales platform tailored to manage sales, inventory, and customer transactions for various types of stores with ease and efficiency.',
    link: '#',
    tags: ['REACT', 'MONGODB', 'TAILWIND', 'NODE.JS', 'EXPRESS.JS'],
    theme: ['#fb7185', '#f43f5e'],
    image: InsightImage,
  },
  {
    title: 'Lab Nectar',
    description: 'Coming soon - A new project built with the MERN stack. Stay tuned for updates!',
    link: '#',
    tags: ['MERN STACK', 'REACT', 'NODE.JS', 'MONGODB', 'EXPRESS'],
    theme: ['#10b981', '#059669'],
    image: LabNectarImage,
  },
];

function AboutMe() {
  const INTRO = `Hi, I'm Omar Allagui, an aspiring cybersecurity engineer based in Tunisia. I am 
  currently a studying at the Tek-Up university and I am passionate about building innovative  solutions that solves problems.`;

  const WHYSITE = `I always love challenging myself to creating something different and interesting.
The main reason why I chose to create a website that resembles a Windows XP OS is because my 
software development journey first started early when I was creating simple 
apps such as calculators, message encrypters, phishing app and simple chatbot.
Now that I have more experience in software development, I decided to "recreate" the environment I used to work in back then and make
it feel as though you are accessing my computer directly.`;

  const INTERESTS = `Other than my interest in developing websites and apps for fun, I'm also deeply 
  passionate about cybersecurity. I love learning how systems work, how they can be exploited, and 
  most importantly, how to protect them. Cybersecurity combines technology, problem-solving, and 
  psychology — you have to think like both a defender and an attacker.

I'm fascinated by areas like ethical hacking, digital forensics, network security, and encryption.
 I enjoy exploring topics such as penetration testing, malware analysis, and the principles behind
  secure coding.`;

  const INTERESTS2 = `In addition to that, I've developed a strong passion for DevOps. I find myself 
  naturally skilled in this area because it blends perfectly with my background in web development 
  and cybersecurity. My experience in building and deploying web applications helps me understand 
  the development lifecycle from end to end, while my cybersecurity knowledge allows me to approach
   DevOps with a focus on security, automation, and reliability. I enjoy working with tools like 
   Docker, Kubernetes, CI/CD pipelines, and cloud platforms such as AWS to streamline development
    processes, improve scalability, and ensure systems are both efficient and secure.`;

  const SOCIAL_LINKS = [
    {
      icon: githubIcon,
      label: 'GitHub',
      url: 'https://github.com/Omarallagui94',
    },
    {
      icon: pdfIcon,
      label: 'Resume',
      url: '#',
      onClick: () => {
        window.dispatchEvent(
          new CustomEvent('winxp-open-app', {
            detail: {
              app: 'Resume',
            },
          })
        );
      },
    },
    {
      icon: network,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/omar-allagui1/',
    },
    {
      icon: linkIcon,
      label: 'Instagram',
      url: 'https://www.instagram.com/omar_allagui/',
    },
    {
      icon: folderSmall,
      label: 'Facebook',
      url: 'https://www.facebook.com/',
    },
    {
      icon: remove,
      label: 'Email',
      url: 'mailto:omarallagui94@gmail.com',
    },
  ];

  const SKILLS = [
    'Cybersecurity',
    'Penetration Testing',
    'Digital Forensics',
    'Secure Coding',
    'DevOps',
    'CI/CD Automation',
    'Cloud Infrastructure',
    'Docker & Kubernetes',
    'JavaScript & React',
    'Node.js',
  ];

  function openProjects() {
    window.dispatchEvent(
      new CustomEvent('winxp-open-app', {
        detail: {
          app: 'My Projects',
          options: {
            injectProps: {
              projects: PROJECTS,
            },
          },
        },
      })
    );
  }

  return (
    <Container>
      <Header>
        <img src={userIcon} alt="user" className="icon" />
        <span>About Me</span>
      </Header>
      <Toolbar>
        <ToolbarButton disabled>
          <img src={back} alt="back" />
          <span>Back</span>
          <ToolbarArrow />
        </ToolbarButton>
        <ToolbarButton disabled>
          <img src={forward} alt="forward" />
          <ToolbarArrow />
        </ToolbarButton>
        <ToolbarButton>
          <img src={up} alt="up" />
        </ToolbarButton>
        <ToolbarSeparator />
        <ToolbarButton onClick={openProjects}>
          <img src={search} alt="projects" />
          <span>My Projects</span>
        </ToolbarButton>
        <ToolbarButton>
          <img src={folderOpen} alt="folders" />
          <span>Folders</span>
        </ToolbarButton>
        <ToolbarSeparator />
        <ToolbarButton>
          <img src={menu} alt="dropdown" />
          <ToolbarArrow />
        </ToolbarButton>
      </Toolbar>
      <Body>
        <Left>
          <InfoPanel>
            <InfoHeader>
              <span>Connect With Me</span>
              <img src={pullup} alt="" />
            </InfoHeader>
            <InfoContent>
              {SOCIAL_LINKS.map(({ icon, label, url, onClick }) => (
                <InfoItem
                  href={url}
                  key={label}
                  target={onClick ? undefined : '_blank'}
                  rel="noreferrer"
                  onClick={e => {
                    if (onClick) {
                      e.preventDefault();
                      onClick();
                    }
                  }}
                >
                  <img src={icon} alt={label} />
                  <span>{label}</span>
                </InfoItem>
              ))}
            </InfoContent>
          </InfoPanel>
          <InfoPanel>
            <InfoHeader>
              <span>Skills & Tools</span>
              <img src={pullup} alt="" />
            </InfoHeader>
            <InfoContent>
              <SkillsList>
                {SKILLS.map(skill => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillsList>
            </InfoContent>
          </InfoPanel>
          <InfoPanel>
            <InfoHeader>
              <span>Highlights</span>
              <img src={pullup} alt="" />
            </InfoHeader>
            <InfoContent>
              <Highlight>
                <HighlightTitle>Passion</HighlightTitle>
                <HighlightText>
                  Building secure, resilient systems that balance usability and protection.
                </HighlightText>
              </Highlight>
              <Highlight>
                <HighlightTitle>Currently Exploring</HighlightTitle>
                <HighlightText>
                  Advanced penetration testing, container security, and cloud-native DevOps.
                </HighlightText>
              </Highlight>
              <Highlight>
                <HighlightTitle>Goal</HighlightTitle>
                <HighlightText>
                  Combine cybersecurity expertise with automation to create seamless defenses.
                </HighlightText>
              </Highlight>
            </InfoContent>
          </InfoPanel>
        </Left>
        <Right>
          <Section>
            <Title>Welcome To Omar Allagui&apos;s Personal Website</Title>
            <WelcomeContent>
              <div>
                <SubTitle>Who am I?</SubTitle>
                <Text>{INTRO}</Text>
              </div>
              <Image src={pic} alt="Omar Allagui" />
            </WelcomeContent>
          </Section>
          <Section>
            <SubTitle>Why a personal website like this?</SubTitle>
            <Text>{WHYSITE}</Text>
          </Section>
          <Section>
            <SubTitle>What are your interests?</SubTitle>
            <Text>{INTERESTS}</Text>
            <Spacer />
            <Text>{INTERESTS2}</Text>
          </Section>
        </Right>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .icon {
    width: 20px;
    height: 20px;
  }
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;
  font-size: 12px;
  background-color: #fff;
`;

const Toolbar = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  font-size: 11px;
  padding: 1px 3px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f5f4f0;
  gap: 2px;
`;

const ToolbarButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 6px;
  border: 1px solid transparent;
  border-radius: 3px;
  background: transparent;
  font-size: 11px;
  color: #000;
  cursor: pointer;
  img {
    width: 22px;
    height: 22px;
  }
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
  }
  &:active {
    border: 1px solid rgb(185, 185, 185);
    background-color: #dedede;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
  }
  &:active > * {
    transform: translate(1px, 1px);
  }
  &:disabled,
  &[disabled] {
    filter: grayscale(1);
    opacity: 0.7;
    cursor: default;
    border: 1px solid transparent;
    box-shadow: none;
  }
`;

const ToolbarSeparator = styled.div`
  height: 90%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ToolbarArrow = styled.span`
  display: flex;
  align-items: center;
  &:before {
    content: '';
    display: block;
    border-width: 3px 3px 0;
    border-color: #000 transparent;
    border-style: solid;
  }
`;

const Left = styled.div`
  width: 220px;
  padding: 12px;
  background: linear-gradient(to bottom, #748aff 0%, #4057d3 100%);
  color: #0c327d;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
`;

const Right = styled.div`
  flex: 1;
  padding: 16px;
  overflow: auto;
`;

const InfoPanel = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
  background: rgba(255, 255, 255, 0.1);
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    to right,
    rgb(240, 240, 255) 0,
    rgb(240, 240, 255) 30%,
    rgb(168, 188, 255) 100%
  );
  color: #0c327d;
  font-weight: 700;
  padding: 6px 10px;
  img {
    width: 18px;
    height: 18px;
    filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
  }
`;

const InfoContent = styled.div`
  background: linear-gradient(
    to right,
    rgb(180, 200, 251) 0%,
    rgb(164, 185, 251) 50%,
    rgb(180, 200, 251) 100%
  );
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #0c327d;
  font-size: 11px;
  text-decoration: none;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    color: #2b72ff;
    text-decoration: underline;
  }
  img {
    width: 16px;
    height: 16px;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const SkillTag = styled.span`
  background: rgba(255, 255, 255, 0.6);
  color: #0c327d;
  font-size: 10px;
  padding: 4px 6px;
  border-radius: 3px;
  border: 1px solid rgba(12, 50, 125, 0.2);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
`;

const Highlight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px 2px;
`;

const HighlightTitle = styled.span`
  font-weight: 700;
  font-size: 11px;
`;

const HighlightText = styled.span`
  font-size: 10px;
  line-height: 1.3;
`;

const Section = styled.div`
  margin-bottom: 16px;
`;

const Title = styled.h3`
  margin: 0 0 6px 0;
`;

const SubTitle = styled.h4`
  margin: 8px 0 6px 0;
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.5;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
  flex-shrink: 0;
  object-fit: cover;
`;

const WelcomeContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const Spacer = styled.div`
  height: 8px;
`;

export default AboutMe;
