import logo from "../../assets/logo.svg";
import lupa from "../../assets/lupa.svg";
import add from "../../assets/add.svg";
import favorito from "../../assets/favorito.svg";
import { gql, useQuery } from '@apollo/client';


import './styles.css';


export default function Header() {
    const GET_AVATAR = gql`
    query {
        userPicture
    }`;
    const { loading, error, data } = useQuery(GET_AVATAR);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;


    return (
        <div className="header">
            <div className="header-align">
                <div className="header-body">
                    <img className="header-logo" src={logo} alt="Logo" />
                    <div className="header-search">
                        <input type="text" placeholder="Busque um livro" />
                        <img src={lupa} alt="Pesquisar" />
                    </div>
                    <div className="header-add">
                        <img src={add} alt="Adicionar" />
                        Adicionar
                    </div>
                    <div className="header-favorite">
                        <img src={favorito} alt="Favoritos" />
                        Favoritos
                    </div>
                    <div className="header-bar"></div>
                    <div className="header-user">
                        <img src={data.userPicture} alt="Usuario" />
                        <h6 className="header-username">Jucicreide</h6>
                    </div>
                </div>
            </div>

        </div>
    );
}
