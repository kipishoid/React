import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
// import ThemeSwitcher from './components/ThemeSwitcher';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import AddProduct from './AddProduct';
import ProductsList from './ProductsList';

// const RootContainer = styled('div')(({ theme }) => ({
//   minHeight: '100vh',
//   backgroundColor: theme.palette.background.default,
//   color: theme.palette.text.primary,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// }));

// const AppContent = () => {
//   const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

//   const theme = createTheme({
//     palette: {
//       mode: isDarkTheme ? 'dark' : 'light',
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <RootContainer>
//         <ThemeSwitcher />
//       </RootContainer>
//     </ThemeProvider>
//   );
// };

function App() {
  return (
    <Provider store={store}>
      {/* <AppContent /> */}
      <div>
        <h1>Product Catalog</h1>
        <AddProduct />
        <ProductsList />
      </div>
    </Provider>
  );
}

export default App;