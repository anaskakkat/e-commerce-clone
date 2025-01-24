import ErrorBoundary from "./ErrorBoundary";
import AppRouter from "./routes/AppRouter";
// import { store } from "./store/store";
// import { Provider } from "react-redux";

const App = () => {
  return (
    // <Provider store={store}>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    // </Provider>
  );
};

export default App;
