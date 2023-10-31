import { gql, useQuery } from '@apollo/client';
import "./styles.css";


export default function FavoriteAuthor() {
    const GET_FAVORITE_AUTHORS = gql`
        query {
            favoriteAuthors {
            id
            name
            picture
            booksCount
        }
        }`;
    const { loading, error, data } = useQuery(GET_FAVORITE_AUTHORS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;


    return (
        <div className="favoriteauthor">{data.favoriteAuthors.map(author => (
            <div className="favoriteauthor-author" key={author.id}>
                <img src={`${author.picture}`} alt={`Capa de ${author.name}`} />
                <div className="favoriteauthor-description">
                    <h3>{author.name}</h3>
                    <p>{author.booksCount === 1 ? `${author.booksCount} Livro` : `${author.booksCount} Livros`}</p>
                </div>
            </div>
        ))}</div>
    );
};