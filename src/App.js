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
  return (
   
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/admin" element={
          <RequireAuth loginPath="/">
            <AdminPanel/>
          </RequireAuth>
        }>
          <Route index path="places" element={<Places/>}/>
          <Route index path="places/:id" element={<PlacesDetails/>}/>
          <Route index path="places/create" element={<CreatePlace/>}/>
          <Route index path="categories" element={<Categories/>}/>
          <Route index path="categories/:id" element={<CategoryDetails/>}/>
          <Route index path="categories/create" element={<CreateCategory/>}/>
          <Route index path="cities" element={<Cities/>}/>
          <Route index path="cities/create" element={<CreateCity/>}/>
          <Route index path="cities/:id" element={<CityDetails/>}/>
        </Route>
      </Routes>
  );
}

export default App;
