import Navigation from "./Navigation/Navigation";
import { useLoadingWithRefreash } from "./CustomHooks/LoadingData";
const apiurl = "https://rentalsystem1998.herokuapp.com";

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
