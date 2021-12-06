import React, {FC, useState} from 'react';
import styled from "styled-components";
import Button, {ButtonType} from "./Button";
import Calc, {CalcInput, InputType, OperatorType} from "../modules/calc";

const Container = styled.div`
  
`

const Grid = styled.div`
    display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: 120px repeat(5, 80px);
`
const Display = styled.div`
    background: #fff;
  font-size: 48px;
  grid-column-end: span 4;
  padding: 30px 24px;
  border-radius: 8px;
  text-align: right;
 
`


const Calculator:FC<{}> = () => {

    const [inputs, setInputs] = useState<CalcInput[]>([])
    const state = Calc.getState(inputs)

    const appendInput = (input: CalcInput): void => {
        setInputs(prev => [...prev, input])
    }


    const handleNumerical = (value: number) => () => {
         appendInput({type: InputType.Numerical, value})
    }
    const handleOperation = (operator: OperatorType) => () => {
        appendInput({type: InputType.Operator, operator})
    }
    const handleAllClear = () => {
        setInputs([])
    }
    const handleOops = () => {
        setInputs(prev => prev.slice(0, -1))
    }

    return (
        <Container>
            <Grid>
                <Display>{state.displayValue}</Display>
                <Button  label={'AC'} position={[0, 1]} width={2} onClick={handleAllClear}/>
                <Button  label={'Oops'} position={[2, 1]} width={2} onClick={handleOops}/>
                <Button  label={'-'} position={[3, 2]} onClick={handleOperation(OperatorType.Subtract)}/>
                <Button  label={'+'} position={[3, 3]} onClick={handleOperation(OperatorType.Add)}/>
                <Button  label={'='} position={[3, 4]} onClick={handleOperation(OperatorType.Equals)} height={2}/>
                <Button buttonType={ButtonType.Number} label={'9'} position={[2, 2]} onClick={handleNumerical(9)}/>
                <Button buttonType={ButtonType.Number} label={'8'} position={[1, 2]} onClick={handleNumerical(8)}/>
                <Button buttonType={ButtonType.Number} label={'7'} position={[0, 2]} onClick={handleNumerical(7)}/>
                <Button buttonType={ButtonType.Number} label={'6'} position={[2, 3]} onClick={handleNumerical(6)}/>
                <Button buttonType={ButtonType.Number} label={'5'} position={[1, 3]} onClick={handleNumerical(5)}/>
                <Button buttonType={ButtonType.Number} label={'4'} position={[0, 3]} onClick={handleNumerical(4)}/>
                <Button buttonType={ButtonType.Number} label={'3'} position={[2, 4]} onClick={handleNumerical(3)}/>
                <Button buttonType={ButtonType.Number} label={'2'} position={[1, 4]} onClick={handleNumerical(2)}/>
                <Button buttonType={ButtonType.Number} label={'1'} position={[0, 4]} onClick={handleNumerical(1)}/>
                <Button buttonType={ButtonType.Number} label={'0'} position={[0, 5]} onClick={handleNumerical(0)} width={3}/>

            </Grid>
        </Container>
    );
};

export default Calculator;
