import styled, { css } from "styled-components";
import { primaryFont } from "styles/common";

const colorCSS = {
	primary: css`
		background-color: ${({ theme }) => theme.PALETTE.primary};
		border: none;
		color: ${({ theme }) => theme.PALETTE.white};
	`,
	black: css`
		background-color: ${({ theme }) => theme.PALETTE.black};
		border: none;
		color: ${({ theme }) => theme.PALETTE.white};
	`,
	gray: css`
		background-color: ${({ theme }) => theme.PALETTE.gray};
		border: none;
	`,
	white: css`
		background-color: ${({ theme }) => theme.PALETTE.white};
		border: 1px solid;
		border-color: ${({ theme }) => theme.PALETTE.primary};
	`,
};

const sizeCSS = {
	primary: css`
		padding: 6px 10px;
	`,
	medium: css`
		width: 140px;
		height: 50px;
	`,
	large: css`
		width: 500px;
		height: 56px;
	`,
	small: css`
		width: 80px;
		height: 40px;
	`,
	mediumLarge: css`
		width: 340px;
		height: 45px;
	`,
	mediumSecond: css`
		width: 160px;
		height: 42px;
	`,
	xsmall: css`
		width: 59px;
		height: 28px;
		font-size: 14px;
	`,
};

const Button = styled.button`
	${({ variant }) => colorCSS[variant]}
	${({ size }) => sizeCSS[size]}
    cursor: pointer;
	${primaryFont}
`;
export default Button;
