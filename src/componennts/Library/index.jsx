import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Library() {
	const navigate = useNavigate();

	const GET_LIBRERY = gql`
    query {
        allBooks{
            id
            name
            author{
              id
              name
            }
            cover
          }
    }`;
	const { loading, error, data } = useQuery(GET_LIBRERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div className="library">{data.allBooks.map(book => (
			<div
				className="library-book"
				onClick={() => { navigate(`/book/${book.id}`) }}
				key={book.id}
			>
				<img src={`${book.cover}`} alt={`Capa de ${book.name}`} />
				<div className="library-description">
					<h3>{book.name}</h3>
					<p>{book.author.name}</p>
				</div>
			</div>
		))}
		</div>
	)
}