import {Outlet} from 'react-router-dom';
import Nav from './Nav';
import AppTitle from './AppTitle';

const MainLayout =() => {

    return (

       <div>

        <AppTitle Title = "Box-office" SubTitle = "xyz" />

        <Nav/>
         <Outlet/>
       </div>
    )
    
}






export default MainLayout ; 