import NaviCalc from './Components/Forms/DefaultCalcForm.js';
import Header from './Components/Header.js';
import CalcResultDisplay from './Components/Displays/CalcResultDisplay.js';

import {
  Container,
  CssBaseline
} from '@mui/material';

function App() {
  return (
    <>
    <CssBaseline />
    <div className="App">
        <Container>
            <Header />
            <NaviCalc />
        </Container>
    </div>
    </>
  );
}

export default App;
