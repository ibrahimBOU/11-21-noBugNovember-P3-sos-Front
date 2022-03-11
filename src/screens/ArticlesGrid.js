import "./Styles/ArticlesGrid.css";

import { useContext } from "react";
import { Link } from "react-router-dom";

import CardArticle from "../components/CardArticle.js";
import Header from "../components/Header.js";
import ArtSearchBar from "../components/ArtSearchBar.js";

import { ArticleContext } from "../context/ArticleContext";

const ArticlesGrid = () => {
  const { articles } = useContext(ArticleContext);

  return (
    <>
      <Header />
      <div className="articleGridBgGreen">
        {" "}
        <div className="articleGridHolderSearchBar">
          <div className="articleGridSearchBar">
            <ArtSearchBar />
          </div>
        </div>
        {articles.map((result, id) => {
          return (
            <Link to={`articleDetail/${result.id}`}>
              <CardArticle
                key={result.id}
                id={result.id}
                titre={result.titre}
                intro={result.intro}
                image={result.image}
                para1={result.para1}
                nom_ville={result.nom_ville}
                nom_region={result.nom_region}
                nom_categorie={result.nom_categorie}
                nom_sous_categorie={result.nom_sous_categorie}
                nom_secteur={result.nom_secteur}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ArticlesGrid;
