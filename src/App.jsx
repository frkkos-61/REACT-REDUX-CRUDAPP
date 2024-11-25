import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  return (
    <div className="vh-100">
      <div className="container p-5">
        <h2 className="text-center">
          <span className="text-warning">Redux</span> CRUD
        </h2>

      <Form/>
      <List/>
      </div>
    </div>
  );
};

export default App;
