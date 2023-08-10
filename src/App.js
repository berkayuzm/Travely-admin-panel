import logo from "./logo.svg";
import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { RequireAuth } from "react-auth-kit";
import AdminPanel from "./pages/AdminPanel";
import Places from "./components/Places";
import Categories from "./components/Categories";
import Cities from "./components/Cities";
import PlacesDetails from "./components/PlacesDetails";
import CreatePlace from "./components/CreatePlace";
import CategoryDetails from "./components/CategoryDetails";
import CreateCategory from "./components/CreateCategory";
import CityDetails from "./components/CityDetails";
import CreateCity from "./components/CreateCity";
function App() {
  console.log(document.cookie)
  return (
   
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/admin" element={
          <RequireAuth loginPath="/">
            <AdminPanel/>
          </RequireAuth>
        }>
          <Route index path="places" element={<Places/>}/>
          <Route  path="places/:id" element={<PlacesDetails/>}/>
          <Route  path="places/create" element={<CreatePlace/>}/>
          <Route  path="categories" element={<Categories/>}/>
          <Route  path="categories/:id" element={<CategoryDetails/>}/>
          <Route  path="categories/create" element={<CreateCategory/>}/>
          <Route  path="cities" element={<Cities/>}/>
          <Route  path="cities/create" element={<CreateCity/>}/>
          <Route  path="cities/:id" element={<CityDetails/>}/>
        </Route>
      </Routes>
  );
}

export default App;
