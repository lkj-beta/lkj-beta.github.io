import { useContent } from './content';

export default function Home() {
  const content = useContent('home');

  return <main id="main-cell-home">{content}</main>;
}
