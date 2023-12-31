import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function FavoriteBook() {
	const navigate = useNavigate();

	const GET_FAVORITE_BOOKS = gql`
		query {
			favoriteBooks {
			id
			name
			author {
				name
			}
			cover
			}
		}`;

	const { loading, error, data } = useQuery(GET_FAVORITE_BOOKS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div className="favoriteBook">{data.favoriteBooks.map(book => (
			<div
				className="favoriteBook-book"
				onClick={() => { navigate(`/book/${book.id}`) }}
				key={book.id}
			>
				<img src={`${book.cover}`} alt={`Capa de ${book.name}`} />
				<h3>{book.name}</h3>
				<p>{book.author.name}</p>
			</div>
		))}
		</div>
	);
}
