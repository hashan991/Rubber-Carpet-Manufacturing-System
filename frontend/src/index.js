import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Production/NavBar';
import Sidebar from './components/Production/SideBar';
import reportWebVitals from './reportWebVitals';
import OrderForm from './components/Production/OrderForm';
import OrderTable from './components/Production/OrderTable';
import DashOrderTable from './components/Production/DsahOrderTable';
import DashOrderForm from './components/Production/DashOrderForm';
import Footer from './components/Production/Footer';
import Sidebar2 from './components/Production/Sidebar2';
import Reports from './components/Production/Reports';
import Dashreports from './components/Production/Dsahreports';
import PlanForm from './components/Production/PlaneForm';
import DashPlanForm from './components/Production/DashPlanForm';
import PlaneTable from './components/Production/PlanTable';
import DashPlanTable from './components/Production/DashPlanTable';
import DashMachiForm from './components/Production/DashMachiForm';
import DashMachiTable from './components/Production/DashMachiTable';
import DashProForm from './components/Production/DashProForm';
import DashProTable from './components/Production/DashProTable';
import EmpDashOrderTable from './components/Production/EmpDashOrderTable';
import EmpDashPlanTable from './components/Production/EmpDashPlanTable';
import EmpDashMachiTable from './components/Production/EmpDashMachiTable';
import EmpDashProTable from './components/Production/EmpDashProTable';
import EmpDashreports from './components/Production/EmpDashreports';
import StartupPage from './components/Production/StartupPage';
import LoginPage from './components/Production/LoginPage';
import RegisterPage from './components/Production/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import Home from './components/Production/Home';



//Nishan
import Navbarr from './components/distributor/NavBar';
import Sidebarr from './components/distributor/SideBar';
import Dashuser from './components/distributor/user';
import Dashorder from './components/distributor/user2';
import Dashkpi from './components/distributor/user3';
import DashTransTable from './components/distributor/DashTransTable';
import DashOrderTablee from './components/distributor/DashOrderTable';
import DashKpiTable from './components/distributor/DashKpiTable';
import DashCostTable from './components/distributor/DashCostTable';
import Dashcost from './components/distributor/user4';
import DashReport from './components/distributor/DashReport';


//Shashiran
import DashSupForm from './components/supplier/DashSupForm';
import F1 from './components/supplier/F1';
import Navbarr1 from './components/supplier/NavBar';
import Sidebarr1 from './components/supplier/SideBar';
import F1T from './components/supplier/F1T';
import RMCTable from './components/supplier/RMCTable';
import OFTable from './components/supplier/OFTable';
import DashOFTable from './components/supplier/DashOFTable';
import DashOrderFormm from './components/supplier/DashOrderForm';
import RawMaterialCostForm from './components/supplier/RawMaterialCostForm';
import DashRawMaterialCostForm from './components/supplier/DashRawMaterialCostForm';
import OrderFormm from './components/supplier/OrderForm';
import DashF1T from './components/supplier/DashF1T';
import DashRMCtable from './components/supplier/DashRMCTable';
import SupReport from './components/supplier/SupReport';
import DashReportt from './components/supplier/DashSupReport';
import ReportTable from './components/supplier/ReportTable';


//Malindu
import NaviBar from './components/cusoperator/NaviBar';
import SideBar from './components/cusoperator/SideBar';
import DashCustomerForm from './components/cusoperator/DashCustomerForm';
import OrderForm1 from './components/cusoperator/OrderForm1';
import DashOrderFormm1 from './components/cusoperator/DashOrderFormm1'
import PlaceAnOrderForm from './components/cusoperator/PlaceAnOrderForm'
import DashPlaceAnOrderForm from './components/cusoperator/DashPlaceAnOrderForm'
import FeedbackForm from './components/cusoperator/FeedbackForm'
import DashFeedbackForm from './components/cusoperator/DashFeedbackForm'
import OrderFormTable from './components/cusoperator/OrderFormTable';
import CusDash from './components/cusoperator/cusDash';
import FeedbackTable from './components/cusoperator/FTable';
import Osidebar from './components/cusoperator/SB2';
import Viewordertable from './components/cusoperator/OLT';

import DashboardFormTable from './components/cusoperator/DashOrderFormTable';
import Dashcusdashboard from './components/cusoperator/Dashcusdsh';
import DashOLT from './components/cusoperator/DashOLT';
import DashFeed from './components/cusoperator/DashFeed';
import DashOpForm from './components/cusoperator/DashOpForm';
import OperatorFeeedTable from './components/cusoperator/OfeedT';
import SalesOrderForm from './components/cusoperator/CalFo';
import DashCalFo from './components/cusoperator/DashCalFo';
import CalTable from './components/cusoperator/CalTable';
import Dashcal from './components/cusoperator/Dashcal';
import RepTable from './components/cusoperator/Rep';
import DashRep from './components/cusoperator/DashRep';
import DashCReg from './components/cusoperator/DashCReg';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <BrowserRouter>
  <AuthProvider>
    <Routes>
    
      {/*Hashan*/}
      <Route path='/NavBar' element={<Navbar/>}/>
      <Route path='/SideBar' element={<Sidebar/>}/> 
      <Route path='/OrderForm' element={<OrderForm/>}/> 
      <Route path='/OrderTable' element={<OrderTable/>}/> 
      <Route path='/dashdrdertable' element={<DashOrderTable/>}/> 
      <Route path='/footer' element={<Footer/>}/> 
      <Route path='/sidebar2' element={<Sidebar2/>}/> 
      <Route path='/app' element={<Home/>}/> 
      <Route path='/dashdrderform' element={<DashOrderForm/>}/> 
      <Route path='/reports' element={<Reports/>}/> 
      <Route path='/dashreports' element={<Dashreports/>}/> 
      <Route path='/planform' element={<PlanForm/>}/> 
      <Route path='/dashplanform' element={<DashPlanForm/>}/> 
      <Route path='/plantable' element={<PlaneTable/>}/> 
      <Route path='/dashplantable' element={<DashPlanTable/>}/> 
      <Route path='/dashmachiform' element={<DashMachiForm/>}/> 
      <Route path='/dashmachitable' element={<DashMachiTable/>}/> 
      <Route path='/dashproform' element={<DashProForm/>}/> 
      <Route path='/dashprotable' element={<DashProTable/>}/> 
      <Route path='/empdashordertable' element={<EmpDashOrderTable/>}/> 
      <Route path='/empdashplantable' element={<EmpDashPlanTable/>}/> 
      <Route path='/empdashmachitable' element={<EmpDashMachiTable/>}/> 
      <Route path='/empdashprotable' element={<EmpDashProTable/>}/> 
      <Route path='/empdashreports' element={<EmpDashreports/>}/> 
      <Route path='/' element={<StartupPage/>}/> 
      <Route path="/login" element={<LoginPage />} /> {/* Login page */}
      <Route path="/register" element={<RegisterPage />} /> {/* Registration page */}


      {/*Nishan*/}
      <Route path='/NavBar' element={<Navbarr/>}/>
      <Route path='/SideBar' element={<Sidebarr/>}/>
      <Route path='/dashuser' element={<Dashuser/>}/>
      <Route path='/dashtranstable' element={<DashTransTable/>}/>
      <Route path='/dashorder' element={<Dashorder/>}/>
      <Route path='/dashkpi' element={<Dashkpi/>}/>
      <Route path='/dashordertable' element={<DashOrderTablee/>}/>
      <Route path='/dashkpitable' element={<DashKpiTable/>}/>
      <Route path='/dashcosttable' element={<DashCostTable/>}/>
      <Route path='/dashcost' element={<Dashcost/>}/>
      <Route path='/dashcosttable' element={<DashCostTable/>}/>
      <Route path='/dashreport' element={<DashReport/>}/>


      {/*Shashiran*/}
      <Route path='/DashSupForm' element={<DashSupForm/>}/>
      <Route path='/F1' element={<F1/>}/>
      <Route path='/F1T' element={<F1T/>}/>
      <Route path='/NavBar' element={<Navbarr1/>}/>
      <Route path='/SideBar' element={<Sidebarr1/>}/>
      <Route path='/F1T' element={<F1T/>}/>
      <Route path='/DashOFTable' element={<DashOFTable/>}/>
      <Route path='/OrderForm' element={<OrderFormm/>}/>
      <Route path='/OFTable' element={<OFTable/>}/>
      <Route path='/DashOrderForm' element={<DashOrderFormm/>}/>
      <Route path='/RawMaterialCostForm' element={<RawMaterialCostForm/>}/>
      <Route path='/DashRawMaterialCostForm' element={<DashRawMaterialCostForm/>}/>
      <Route path='/DashF1T' element={<DashF1T/>}/>
      <Route path='/RMCTable' element={<RMCTable/>}/>
      <Route path='/DashRMCtable' element={<DashRMCtable/>}/>
      <Route path='/SupReport' element={<SupReport/>}/>
      <Route path='/DashSupReport' element={<DashReportt/>}/>
      <Route path='/ReportTable' element={<ReportTable/>}/>


      {/*Malindu*/}
        <Route path = '/NaviBar' element = {<NaviBar/>}/>
        <Route path = '/SideBar' element = {<SideBar/>}/>
        <Route path = '/DashCustomerForm' element = {<DashCustomerForm/>}/>
        <Route path = '/OrderForm' element = {<OrderForm1/>}/>
        <Route path = '/DashOrderFormm1' element = {<DashOrderFormm1/>}/>
        <Route path = '/PlaceAnOrderForm' element = {<PlaceAnOrderForm/>}/>
        <Route path = '/DashPlaceAnOrderForm' element = {<DashPlaceAnOrderForm/>}/>
        <Route path = '/FeedbackForm' element = {<FeedbackForm/>}/>
        <Route path = '/DashFeedbackForm' element = {<DashFeedbackForm/>}/>
        <Route path = '/OrderFormTable' element = {<OrderFormTable/>}/>
        <Route path = '/DashOrderFormTable' element = {<DashboardFormTable/>}/>
        <Route path = '/cusDash' element = {<CusDash/>}/>
        <Route path = '/Dashcusdsh' element = {<Dashcusdashboard/>}/>
        <Route path = '/FTable' element = {<FeedbackTable/>}/>
        <Route path = '/FTable' element = {<FeedbackTable/>}/>
        <Route path = '/SB2' element = {<Osidebar/>}/>
        <Route path = '/OLT' element = {<Viewordertable/>}/>
        <Route path = '/DashOLT' element = {<DashOLT/>}/>
        <Route path = '/DashFeed' element = {<DashFeed/>}/>
        <Route path = '/DashOpForm' element = {<DashOpForm/>}/>
        <Route path = '/OfeedT' element = {<OperatorFeeedTable/>}/>
        <Route path = '/CalFo' element = {<SalesOrderForm/>}/>
        <Route path = '/DashCalFo' element = {<DashCalFo/>}/>
        <Route path = '/CalTable' element = {<CalTable/>}/>
        <Route path = '/Dashcal' element = {<Dashcal/>}/>
        <Route path = '/Rep' element = {<RepTable/>}/>
        <Route path = '/DashRep' element = {<DashRep/>}/>
        <Route path = '/DashCReg' element = {<DashCReg/>}/>




      
   


     

    </Routes>
    </AuthProvider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

