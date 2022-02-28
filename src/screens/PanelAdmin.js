import './Styles/PanelAdmin.css'
import { Link } from "react-router-dom";
import ArticleForm from "../components/ArticleForm";
import ListArticles from '../components/ListArticles'


import logo from '../assets/logoW.png'
import Connexion from '../components/Connexion';
const PanelAdmin =()=>{
    return (
        <div className='panel-admin-container'>
            <div className='side-bar'>
              <img className='logo-panel' src={logo} alt="logo panel"/>
              <div className='bloc-link-side-bar'>
                <Link to="/ArticleForm">Les articles</Link>
                <Link to="">Les catégories</Link>
                <Link to="">Les sous-catégories</Link>
                <Link to="">Les villes</Link>
              </div>

            </div>
            <div className='content-container'>
                {/* <Connexion /> */}
                {/*<ArticleForm />*/}
              <ListArticles />
            </div>
        </div>
    )
}
export default PanelAdmin