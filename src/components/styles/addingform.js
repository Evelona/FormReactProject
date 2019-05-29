import styled from 'styled-components'

export const StyledAddForm = styled.form`
	text-align: center;
	width: 30vw;
	background-color:  #f7bf47;/*#f7bf7e;*/
	border: 3px dashed #f27460;
	border-radius: 8%;
	position: fixed;
	top: 10px;
	right: 2%;
`
export const StyledDelForm = styled.form`
	text-align: center;
	width: 30vw;
	background-color:  #f7bf47;/*#f7bf7e;*/
	border: 3px dashed #f27460;
	border-radius: 8%;
	position: fixed;
	top: 211px;
	right: 2%;

`

export const StyledInput = styled.input`
	outline: none;
	width: 80%
	margin-bottom: 5px;
	border: 1px dotted linear-gradient(21deg, #f7bf47, #f27460);

	position:relative;
	font-size: 0.9em;
	background: linear-gradient(21deg, #f7bf47, #f27460);
	padding: 3px;
	display: inline-block;
	border-radius: 9999em;
`
export const StyledButton = styled.button`

	box-shadow: 0px 10px 14px -5px #f7bf47;
	border: none;
	background: #f7bf47;
	width: 25vw;
	border-radius: 8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:14px;
	font-weight:bold;
	padding:10px;
	margin-top: 5px;
	margin-bottom: 8px;
	text-decoration:none;
	outline: none;


	&:hover {
	background-color: #f27460;
	box-shadow: 0px 10px 14px -7px #f27460;
	color: white;
`
