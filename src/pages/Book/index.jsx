import { gql, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import compartilhar from "../../assets/Content.svg";
import favoritar from "../../assets/favoritar-off.svg";
import favorito from "../../assets/favorito.svg";
import overflow from "../../assets/overflow.svg";
import salvar from "../../assets/salvar.svg";
import voltar from "../../assets/voltar.svg";
import Footer from "../../componennts/Footer";
import Header from "../../componennts/Header";
import "./styles.css";

export default function Book() {
	const navigate = useNavigate();
	const { id } = useParams();

	const GET_BOOK = gql`
    query {
      book(id:${id}){
                id
                name
                author{
                    id
                    name
                  }
                cover
                description
                isFavorite
              }
            }`;

	const { loading, error, data } = useQuery(GET_BOOK);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div className="book">
			<div className="book-body-background"></div>
			<div className="book-gradient">
				<div className="book-gradient-desktop"><Header /></div>
				<div className="book-gradient-mobile">
					<img
						src={voltar}
						alt="Voltar"
						onClick={() => { navigate(`/`) }}
					/>
					<img src={overflow} alt="Menu" />
				</div>
			</div>
			<div className="book-body">
				<section className="book-body-section01">
					<img src={data.book.cover} alt={`Capa de ${data.book.name}`} />
					<ul>
						<li>
							<img src={favorito} alt="Favoritar" />
							<h3>Favoritar</h3>
						</li>
						<li>
							<img src={compartilhar} alt="Compartilhar" />
							<h3>Compartilhar</h3>
						</li>
						<li>
							<img src={salvar} alt="Salvar em uma lista" />
							<h3>Salvar em uma lista</h3>
						</li>
					</ul>
				</section>
				<section className="book-body-section02">
					<div className="book-body-section02-book">
						<div className="book-body-section02-identification">
							<h1>{data.book.name}</h1>
							<img src={data.book.isFavorite ? favorito : favoritar} alt="Status de favorito" />
						</div>
						<h4>{data.book.author.name}</h4>
					</div>
					<div className="book-body-section02-book-description">
						<p>{data.book.description}</p>
						<div className="book-body-section02-author">
							<h2>Sobre o Autor</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Maxime dolore numquam labore non quam mollitia quos dolorem
								excepturi eaque assumenda similique vero laboriosam perferendis
								eligendi, enim illo, voluptatibus hic officia.</p>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}  
