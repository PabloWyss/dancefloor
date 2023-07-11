import styled from 'styled-components';

const ColorDiv = styled.div`
        background-color: ${(props) => `rgb(`+[props.color[0], props.color[1], props.color[2]].join(',')+')'};
        height: 50px;
        width: 50px;
        border: 1px solid white ;
    `

const Cell = ({color}) => {
    return (
        <ColorDiv color={color}>
        </ColorDiv>
    )
}

export default Cell