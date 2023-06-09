import {Fragment} from 'react';
import classes from './Header.module.css';
import Meals from '../../Assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header=Props=>{
    return(
        <Fragment>
            <header className={classes.header} >
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={Meals} alt='meals' />
            </div>
        </Fragment>
    )

}
export default Header;