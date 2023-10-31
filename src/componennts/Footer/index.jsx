import { useNavigate } from "react-router-dom";
import add from "../../assets/adicionar.svg";
import home from "../../assets/casinha.svg";
import favorito from "../../assets/coração.svg";
import logo from "../../assets/logo-branco.svg";
import lupa from "../../assets/lupa.svg";
import "./styles.css";

export default function Footer() {
	const navigate = useNavigate();

	return (
		<div className="footer">
			<div className="footer-body-desktop">
				<img
					src={logo} alt=""
					onClick={() => { navigate(`/`) }}
				/>
				<div className="footer-body-desktop-sapn">
					<span>Todos os direitos reservados. Studio Sol Books © 2023 </span>
				</div>
			</div>
			<div className="footer-body-mobile">
				<div className="footer-body-mobile-selections">
					<img
						src={home}
						onClick={() => { navigate(`/`) }}
						alt="Início"
					/>
					<h5 className="selected">Início</h5>
				</div>
				<div className="footer-body-mobile-selections">
					<img src={add} alt="Adicionar" />
					<h5>Adicionar</h5>
				</div>
				<div className="footer-body-mobile-selections">
					<img src={lupa} alt="Buscar" />
					<h5>Buscar</h5>
				</div>
				<div className="footer-body-mobile-selections">
					<img src={favorito} alt="Favoritos" />
					<h5>Favoritos</h5>
				</div>
			</div>
		</div>
	);
}
