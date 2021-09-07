import { GlobalStyles } from './components';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage, SingInPage, NotFoundPage } from './pages';

const App = () => {
 return (
  <>
   <GlobalStyles />
   <HashRouter>
    <Switch>
     <Route exact path="/" component={HomePage} />
     <Route path="/login" component={LoginPage} />
     <Route path="/singin" component={SingInPage} />
     <Route path="*" component={NotFoundPage} />
    </Switch>
   </HashRouter>
  </>
 );
};

export { App };
