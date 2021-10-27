import retailProducts from './api/retailProducts';
import Retail from './RetailRedux/Retail';
import { RetailProvider } from './RetailContext';

const App = () => (
  <RetailProvider products={retailProducts}>
    <Retail />
  </RetailProvider>
);

export default App;
