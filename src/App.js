import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicForm from "./Components/BasicForm"
import FormikForm from "./Components/FormikForm";
import FormikFormWithValidation from "./Components/FormikFormWithValidation";
import NavBar from "./Components/NavBar";

const App = () => {
    return(
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/basicForm" component={BasicForm}/>
                <Route path="/formikForm" component={FormikForm}/>
                <Route path="/formikFormValidations" component={FormikFormWithValidation}/>
            </Switch>
        </Router>
    )
}

export default App