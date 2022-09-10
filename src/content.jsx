import { useContext, useMemo } from 'react';
import { LanguageContext } from './LanguageContext';

const copy = {
  en: {
    page: {
      home: 'home',
      about: 'about',
      audio: 'audio',
      videos: 'videos',
      contact: 'contact',
    },
    about: {
      title: 'ABOUT LARRY KING',
      first: (
        <p>
          LARRY KING is a highly regarded American jazz PIANIST-SINGER who began appearing at
          leading Manhattan night spots and cabarets as a teenager and has performed continuously
          over five decades at an amazing variety of top New York venues with{' '}
          <em>The Larry King Jazz Trio</em> and his big dance band <em>The Larry King Orchestra</em>
          .
        </p>
      ),
      second: (
        <p>
          He has entertained enthusiastic audiences at The Oak Room at The Algonquin Hotel, The
          Rainbow Room, The Russian Team Room, Le Cirque, Tavern-on-the-Green and The River Café, to
          name a few.
        </p>
      ),
      third: (
        <p>
          His style is often favorably compared with the late, great Nat King Cole and the
          ever-popular Michaels (Feinstein and Bublé.) His pianistic influences include jazz greats
          like Bill Evans, Oscar Peterson, and Bud Powell and he has a Sinatra-like vocal style that
          his fans and admirers call "smooth, mellifluous, and mellow." He has a unique style and
          sophisticated presence along with a warm and humorous personality that makes him a
          frequently requested guest artist for a variety of events and situations. His repertoire
          runs the gamut of <em>The Great American Songbook</em> with jazz and pop standards,
          Broadway show tunes, and <em>Tin Pan Alley</em> classics plus international favorites.
        </p>
      ),
      fourth: (
        <p>
          He has worked with and for many notables including a stint as Musical Director for the
          late Maxene Andrews, one of the world-famous singing trio <em>The Andrews Sisters</em> of
          "Boogie Woogie Bugle Boy" fame. His first professional engagement was at the legendary
          Backstage, Ted Hook's popular star-studded restaurant in the Broadway theater district
          where Larry performed for a steady flow of Hollywood and Broadway legends of the day
          including Ann Miller, Ethel Merman, Ginger Rogers, Dolores Gray, Lena Horne, Lisa Kirk,
          Bette Davis, Mary Martin, and many others.
        </p>
      ),
      fifth: (
        <p>
          In recent years, Larry has been capturing the attention of new fans from around the world
          performing aboard luxury cruise ships for Holland America Line, Disney Cruise Lines, and
          most recently Princess Cruise Line where he is a featured guest entertainer in the spiffy
          new jazz venue, the Take Five lounge.
        </p>
      ),
    },
    audio: {
      subtitle: 'Click below to hear music samples:',
    },
    home: (
      <p>
        <mark>LARRY KING</mark> is a highly regarded American jazz PIANIST-SINGER who began
        appearing at leading Manhattan night spots and cabarets as a teenager and has performed
        continuously over five decades at an amazing variety of top New York venues with{' '}
        <em>The Larry King Jazz Trio</em> and his big dance band <em>The Larry King Orchestra</em>.{' '}
        <a href="/about">READ MORE</a>
      </p>
    ),
    videos: {
      title: 'VIDEOS',
    },
  },
  fr: {
    page: {
      home: 'accueil',
      about: 'à propos',
      audio: 'audio',
      videos: 'vidéos',
      contact: 'contact',
    },
    about: {
      title: 'À PROPOS DE LARRY KING',
      first: (
        <p lang="fr">
          LARRY KING est un pianiste et chanteur de jazz Américain très apprécié qui a commencé sa
          carrière dans les boîtes de nuit et les cabarets cotés de Manhattan dès son adolescence.
          Il se produit régulièrement pendant de nombeuses années sur les scènes les plus célèbres
          et variées de New York avec <em>The Larry King Jazz Trio</em> et son grand orchestre de
          danse, <em>The Larry King Orchestra</em>.
        </p>
      ),
      second: (
        <p>
          Larry a soulevé l'enthousiasme de ses spectateurs dans The Oak Room à l'Hôtel Algonquin,
          The Rainbow Room, The Russian Tea Room, Le Cirque, Tavern-on-the-Green et The River Café,
          pour n'en citer que quelques-un.
        </p>
      ),
      third: (
        <p>
          Le style de Larry a souvent été comparé élogieusement à celui du grand Nat King Cole ou
          des deux Michaels aujourd'hui si populaires (Feinstein et Bublé). Son style pianistique
          est influencé par les grands du jazz, comme Bill Evans, Oscar Peterson et Bud Powell, le
          tout avec un style vocal à la Frank Sinatra que ses fans et ses admirateurs disent « de
          velours ».
        </p>
      ),
      fourth: (
        <p>
          Cependant il a son propre style et une forte présence mêlée à une personnalité chaleureuse
          et drôle qui font de lui un artiste très recherché pour une grande variété d'événements et
          de spectacles. Son répertoire comprend tout le « Great American Songbook » avec des
          chansons parmi les plus connues: jazz, standards de pop, comédies musicales de Broadway et
          classiques du « Tin Pan Alley ». Ce répertoire grandit encore avec des hits
          internationaux.
        </p>
      ),
      fifth: (
        <p>
          Larry a travaillé avec de nombreuses célébrités et a été à un moment Directeur de Musique
          pour la grande Maxene Andrews, une des Andrews Sisters de renommée mondiale qui chantaient
          la fameuse <em>Boogie Woogie Bugle Boy</em>. Il débuta au légendaire Backstage, restaurant
          coté de Ted Hook, fréquenté par les stars dans le quartier des théâtres de Broadway. Là
          Larry a chanté et joué pour des gloires de Hollywood et de Broadway de l'époque, comme Ann
          Miller, Ethel Merman, Ginger Rogers, Dolores Gray, Lena Horne, Lisa Kirk, Bette Davis,
          Mary Martin et beaucoup d'autres.
        </p>
      ),
    },
    audio: {
      subtitle: 'Cliquez ci-dessous pour écouter des échantillons de musique:',
    },
    home: (
      <p lang="fr">
        <mark>LARRY KING</mark> est un pianiste et chanteur de jazz Américain très apprécié qui a
        commencé sa carrière dans les boîtes de nuit et les cabarets cotés de Manhattan dès son
        adolescence. Il se produit régulièrement pendant de nombeuses années sur les scènes les plus
        célèbres et variées de New York avec <em>The Larry King Jazz Trio</em> et son grand
        orchestre de danse, <em>The Larry King Orchestra</em>.
        <a href="/about">&nbsp;LIRE LA SUITE</a>
      </p>
    ),
    videos: {
      title: 'VIDÉOS',
    },
  },
};

const useContent = section => {
  const { language } = useContext(LanguageContext);
  const content = useMemo(() => copy[language][section], [language]);

  return content;
};

export { useContent };
