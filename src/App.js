import Navigation from "./Navigation/Navigation";
import { useLoadingWithRefreash } from "./CustomHooks/LoadingData";
const apiurl = "https://cardevlieryapp.herokuapp.com";

function App() {
  const { isLoading } = useLoadingWithRefreash();
  console.log(isLoading);
  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
export { apiurl };
