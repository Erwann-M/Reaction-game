import './styles.scss';
import logo from '../../assets/img/time-logo.png';
import CustomButton from '../button/CustomButton';

const Header = () => (
    <div className="header">
      <img className='header__logo' src={logo} alt="logo time" />
      <div className='header__menu'>
        <CustomButton text='Accueil'/>
        <CustomButton text='Meilleurs score'/>
      </div>
    </div>
);

export default Header;
