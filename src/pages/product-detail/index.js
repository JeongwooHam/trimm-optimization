import RecentlyClicked from "components/RecentlyClicked/RecentlyClicked";
import styled from "styled-components";
import { primaryFont } from "styles/common";
import ProductInfo from "./components/product-info";
import OtherProducts from "./components/other-products/OtherProducts";

const ProductDetailPage = () => {
	return (
		<>
			<RecentlyClicked />
			<S.Container>
				<ProductInfo />
				<OtherProducts />
			</S.Container>
		</>
	);
};

export default ProductDetailPage;

const Container = styled.div`
	width: 1060px;
	margin: 0 auto;
	padding: 20px 0;
	${primaryFont}
`;

const S = {
	Container,
};
