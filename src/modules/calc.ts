

export enum InputType {
    Numerical,
    Operator
}
export enum OperatorType {
    Add = 'Add',
    Subtract = 'Subtract',
    Equals = 'Equals'
}

export type CalcInput = {
   type: InputType.Numerical,
    value: number
}
| {type: InputType.Operator,
    operator: OperatorType
}
export type CalcState = {
    displayValue: number
}
export type Operation = {
    operator: OperatorType
    value: number
}
export type OperationsBuilder = {
    operations: Operation[]
    working: Operation
}

 const getOperations = (inputs: CalcInput[]): Operation[] => {
    const builder: OperationsBuilder = inputs.reduce<OperationsBuilder>((builder, input) => {
     switch (input.type) {
         case InputType.Numerical:
             const prevValue = builder.working?.value || 0
             const newValue = prevValue * 10 + input.value
             return {...builder, working: {...builder.working,value: newValue}}
         case InputType.Operator:
             if (input.operator === OperatorType.Equals){
                 return {operations: [...builder.operations, builder.working, {operator: OperatorType.Equals, value: 0}],
                     working: {operator: input.operator, value: 0}
                 }
             }else {
                 return {operations: [...builder.operations, builder.working],
                     working: {operator: OperatorType.Add, value: 0}
                 }
             }

     }
    },
        {operations: [], working: {operator: OperatorType.Add, value: 0}})
    return builder.operations
}

const getState = (inputs: CalcInput[]): CalcState => {

   return {displayValue: 0}
}

const Calc = {
    getOperations,
    getState
}

export default Calc