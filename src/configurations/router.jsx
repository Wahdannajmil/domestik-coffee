import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import DrinkPage from '../pages/DrinkPage'
import FoodPage from '../pages/FoodPage'
import Place from '../pages/Place'

const RouterComponent = () => {
    return (
        <>
            <Router> 
            <Routes>
                <Route path='/drink' element={<DrinkPage/>} />
                <Route path='/food' element={<FoodPage/>} />
                <Route path='/place' element={<Place/>} />
            </Routes>
            </Router>
        
        </>
    )

}

export default RouterComponent