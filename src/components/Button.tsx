import React, {CSSProperties, FC} from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
    background: #727171;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 24px;
`

export enum ButtonType {
    Number,
    Operation
}

type Props = {
    type?: ButtonType
    label: string
    position?: [x: number, y: number]
    width?: number
    height?: number
}

const Button:FC<Props> = ({type=ButtonType.Operation, label, width, position, height}) => {
    const styles: CSSProperties = {}
    if (position){
       styles.gridColumnStart = position[0] + 1
       styles.gridRowStart = position[1] + 1
    }
    if (width){
       styles.gridColumnEnd = `span ${width}`
    }
    if (height){
        styles.gridRowEnd = `span ${height}`
    }
    if (type === ButtonType.Number){
        styles.background = '#E48900'
        styles.color = '#000'
    }
    return (
        <StyledButton style={styles}>
            {label}
        </StyledButton>
    );
};

export default Button;
