// import Film from '../../types/film';

import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  title: string;
  genre: string;
  releaseDate: number;
}

// function App({filmData, promoFilm}: AppScreenProps): JSX.Element {
//   return (
//     <MainScreen
//       filmData={filmData}
//       promoFilm={promoFilm}
//     />
//   );
// }
function App({ title, genre, releaseDate }: AppScreenProps): JSX.Element {
  return (<MainScreen title={title} genre={genre} releaseDate={releaseDate} />);
}

export default App;
