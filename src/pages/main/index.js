import ProductList from "components/ProductList";
import { productList } from "mock/products";

const Main = () => {
	return (
		<>
			<ProductList productList={productList} />
			{/* <AlertMessage />
			<ChatList />
			<ConsumerChat />
			<SellerChat />
			{/* <RecentlyClicked /> */}
		</>
	);
};

export default Main;
