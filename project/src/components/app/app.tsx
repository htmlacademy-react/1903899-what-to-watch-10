import MainScreen from '../../pages/main-screen/main-screen';
// import Film from '../../types/film';

type AppScreenProps = {
  title: string;
  genre: string;
  releaseDate: number;
}

function App({ title, genre, releaseDate }: AppScreenProps): JSX.Element {
  return (<MainScreen title={title} genre={genre} releaseDate={releaseDate} />);
}

export default App;
