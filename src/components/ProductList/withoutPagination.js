import styled from "styled-components";
import OneProduct from "./one-product";

const ProductListWithoutPagination = ({ productList }) => {
	if (productList)
		return (
			<>
				<S.Container>
					{productList.slice(0, 8).map((product, i) => (
						<OneProduct key={product.id} product={product} grid={"box" + i} />
					))}
				</S.Container>
			</>
		);
};

export default ProductListWithoutPagination;

const Container = styled.div`
	/* display: flex;
	width: 1060px;
	margin: 20px auto;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 20px 0; */
	width: 1060px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
`;

const S = { Container };
