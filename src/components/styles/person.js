import styled from 'styled-components'

 const StyledPerson = styled.div`

	margin-bottom: 10px;

	border: 1px dotted black ;
	border-radius: 20%;

	text-align: center;
	width: 20vw;
	background-color: ${({ sex }) => (sex === 'man')||(sex === 'муж') ? '#f27460' : (sex === 'woman')||(sex === 'жен') ? '#f7bf47' : 'white'  };
`
export default StyledPerson
