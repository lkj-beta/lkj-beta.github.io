import { useContext, useMemo } from 'react';
import { LanguageContext } from './LanguageContext';

const copy = {
  en: {
    about: {},
    audio: {},
    home: (
      <p>
        <mark>LARRY KING</mark> is a highly regarded American jazz PIANIST-SINGER who began
        appearing in leading Manhattan night spots and cabarets as a teenager in the 1970s and has
        performed continuously over four decades at an amazing variety of top New York venues with{' '}
        <em>The Larry King Jazz Trio</em> and his big dance band
        <em>The Larry King Orchestra</em>. <a href="about-larry-king-jazz.html">READ MORE</a>
      </p>
    ),
    videos: {},
    contact: {},
  },
  fr: {
    about: {},
    audio: {},
    home: (
      <p lang="fr">
        <mark>LARRY KING</mark> est un pianiste et chanteur de jazz tr&egrave;s
        appr&eacute;ci&eacute; qui a commenc&eacute; sa carri&egrave;re dans les bo&icirc;tes de
        nuit et les cabarets cot&eacute;s de Manhattan d&egrave;s son adolescence dans les
        ann&eacute;es 70. Il se produit r&eacute;guli&egrave;rement depuis 40 ans sur les
        sc&egrave;nes les plus fameuses de New York avec <em>Le Larry King Jazz Trio</em> et son
        grand orchestre de danse, <em>Le Larry King Orchestra</em>.
        <a href="about-larry-king-jazz.html">&nbsp;LIRE LA SUITE</a>
      </p>
    ),
    videos: {},
    contact: {},
  },
};

const useContent = section => {
  const { language } = useContext(LanguageContext);
  const content = useMemo(() => copy[language][section], [language]);

  return content;
};

export { useContent };
