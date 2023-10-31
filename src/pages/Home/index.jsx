import "./styles.css";
import Header from "../../componennts/Header";
import Footer from "../../componennts/Footer";
import FavoriteBook from "../../componennts/FavoriteBook";
import FavoriteAuthor from "../../componennts/FavoriteAuthor";
import Library from "../../componennts/Library";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-body">
        <section className="home-body-section01">
          <div className="home-body-navegation">
            <div className="home-body-navegation-selection">
              <h6>Meus livros</h6>
              <div className="home-body-navegation-line-selected"></div>
            </div>
            <div className="home-body-navegation-selection">
              <h6>Emprestados</h6>
              <div className="home-body-navegation-line"></div>
            </div>
          </div>
          <div className="home-body-line"></div>
          <div className="home-body-booth">
            <div className="home-body-booth-navegation">
              <h1>Livros favoritos</h1>
              <h2>ver todos</h2>
            </div>
            <div>
              <FavoriteBook />
            </div>
          </div>
        </section>
        <div className="home-body-section02">
          <section>
            <div className="home-body-author">
              <div className="home-body-author-navegation">
                <h1>Artistas favoritos</h1>
                <h2>ver todos</h2>
              </div>
              <div>
                <FavoriteAuthor />
              </div>
            </div>
            <div className="home-body-library">
              <h1>Biblioteca</h1>
              <div className="home-body-categories">
                <div className="home-body-categories-tag home-body-categories-tag-selected">Todos</div>
                <div className="home-body-categories-tag">Romance</div>
                <div className="home-body-categories-tag">Aventura</div>
                <div className="home-body-categories-tag">Comédia</div>
              </div>
              <div>
                <Library />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />

    </div>
  );
}
