import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import ErrorBox from './ErrorBox';
import MyComputer from './MyComputer';
import Notepad from './Notepad';
import Winamp from './Winamp';
import Paint from './Paint';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import iePaper from 'assets/windowsIcons/ie-paper.png';
import ie from 'assets/windowsIcons/ie.png';
import mine from 'assets/minesweeper/mine-icon.png';
import error from 'assets/windowsIcons/897(16x16).png';
import computer from 'assets/windowsIcons/676(16x16).png';
import computerLarge from 'assets/windowsIcons/676(32x32).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import notepadLarge from 'assets/windowsIcons/327(32x32).png';
import winamp from 'assets/windowsIcons/winamp.png';
import paintLarge from 'assets/windowsIcons/680(32x32).png';
import paint from 'assets/windowsIcons/680(16x16).png';
import userIcon from 'assets/windowsIcons/user.png';
import folderOpen from 'assets/windowsIcons/337(32x32).png';
import cppsLogo from 'assets/windowsIcons/289(32x32).png';
import cppsImage from 'assets/cpps.PNG';
import awsCertLogo from 'assets/windowsIcons/aws-cert.svg';
import awsCertImage from 'assets/aws-saa-certificate.svg';
import esocCertLogo from 'assets/windowsIcons/esoc-cert.svg';
import esocCertImage from 'assets/esoc-certificate.svg';
import resumePdf from 'assets/CV Omar.pdf';

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};
const genId = gen();
const genIndex = gen();
export const defaultAppState = [
  // My Projects opens first (lower zIndex)
  {
    component: MyProjects,
    header: {
      icon: folderOpen,
      title: 'My Projects',
    },
    defaultSize: {
      width: 800,
      height: 560,
    },
    defaultOffset: {
      x: 160,
      y: 170,
    },
    resizable: true,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
  },
  // About Me opens on top of it
  {
    component: AboutMe,
    header: {
      title: 'About Me',
      icon: userIcon,
    },
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 220,
      y: 40,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
];

export const defaultIconState = [
  {
    id: 0,
    icon: userIcon,
    title: 'About Me',
    component: AboutMe,
    isFocus: false,
  },
  {
    id: 1,
    icon: ie,
    title: 'Internet Explorer',
    component: InternetExplorer,
    isFocus: false,
  },
  {
    id: 2,
    icon: mine,
    title: 'Minesweeper',
    component: Minesweeper,
    isFocus: false,
  },
  {
    id: 3,
    icon: computerLarge,
    title: 'My Computer',
    component: MyComputer,
    isFocus: false,
  },
  {
    id: 4,
    icon: notepadLarge,
    title: 'Notepad',
    component: Notepad,
    isFocus: false,
  },
  {
    id: 5,
    icon: winamp,
    title: 'Winamp',
    component: Winamp,
    isFocus: false,
  },
  {
    id: 6,
    icon: paintLarge,
    title: 'Paint',
    component: Paint,
    isFocus: false,
  },
  {
    id: 7,
    icon: cppsLogo,
    title: 'CPPS Certificate',
    component: InternetExplorer,
    appKey: 'CPPS',
    isFocus: false,
  },
  {
    id: 8,
    icon: awsCertLogo,
    title: 'AWS SAA Certificate',
    component: InternetExplorer,
    appKey: 'AWS Certificate',
    isFocus: false,
  },
  {
    id: 9,
    icon: esocCertLogo,
    title: 'eSOC Certificate',
    component: InternetExplorer,
    appKey: 'eSOC Certificate',
    isFocus: false,
  },
];

export const appSettings = {
  'Internet Explorer': {
    header: {
      icon: iePaper,
      title: 'InternetExplorer',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Minesweeper: {
    header: {
      icon: mine,
      title: 'Minesweeper',
    },
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 190,
      y: 180,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  'My Computer': {
    header: {
      icon: computer,
      title: 'My Computer',
    },
    component: MyComputer,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Notepad: {
    header: {
      icon: notepad,
      title: 'Untitled - Notepad',
    },
    component: Notepad,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 270,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Winamp: {
    header: {
      icon: winamp,
      title: 'Winamp',
      invisible: true,
    },
    component: Winamp,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  'About Me': {
    header: {
      icon: userIcon,
      title: 'About Me',
    },
    component: AboutMe,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 290,
      y: 80,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  'My Projects': {
    header: {
      icon: folderOpen,
      title: 'My Projects',
    },
    component: MyProjects,
    defaultSize: {
      width: 800,
      height: 560,
    },
    defaultOffset: {
      x: 180,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 900,
    multiInstance: false,
  },
  CPPS: {
    header: {
      icon: iePaper,
      title: 'CPPS Certificate',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 900,
      height: 600,
    },
    defaultOffset: {
      x: 160,
      y: 40,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 900,
    multiInstance: false,
    injectProps: {
      mode: 'image',
      imageUrl: cppsImage,
    },
  },
  'AWS Certificate': {
    header: {
      icon: awsCertLogo,
      title: 'AWS Solutions Architect Certificate',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 900,
      height: 650,
    },
    defaultOffset: {
      x: 180,
      y: 35,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 900,
    multiInstance: false,
    injectProps: {
      mode: 'image',
      imageUrl: awsCertImage,
      imageAlt: 'AWS Certified Solutions Architect - Associate certificate for Omar Allagui',
    },
  },
  'eSOC Certificate': {
    header: {
      icon: esocCertLogo,
      title: 'eSOC Certificate',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 820,
      height: 650,
    },
    defaultOffset: {
      x: 210,
      y: 45,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 900,
    multiInstance: false,
    injectProps: {
      mode: 'image',
      imageUrl: esocCertImage,
      imageAlt: 'eSOC Security Operations Certified certificate for Omar Allagui',
    },
  },
  Resume: {
    header: {
      icon: iePaper,
      title: 'Resume',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 800,
      height: 600,
    },
    defaultOffset: {
      x: 180,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 900,
    multiInstance: false,
    injectProps: {
      mode: 'pdf',
      pdfUrl: resumePdf,
    },
  },
  Paint: {
    header: {
      icon: paint,
      title: 'Untitled - Paint',
    },
    component: Paint,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 280,
      y: 70,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
};

export { InternetExplorer, Minesweeper, ErrorBox, MyComputer, Notepad, Winamp, AboutMe };
