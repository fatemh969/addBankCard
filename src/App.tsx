import React, { Children, ReactElement, ReactNode } from 'react';
import AddBankCard from './component/AddBankCard';
// // const hedingFC: React.FC<{title : string}> = ({title}) => <h2>{title}</h2>


// function Heding({title} : {title : string}){
//     return(
//       <h2>{title}</h2>
//     )
// }

// function HedingChild({children} : {children : ReactNode}): ReactElement{
//   return(
//     <h2>{children}</h2>
//   )
// }

// //defaultProps
// const defaultContainerProps = {
//   heading: <strong>my hed</strong>
// }

// // function TextWithNumber ({children} : {children: (num: number) => ReactNode}){
// //   const [state , stateSet] = React.useState<number>(1);

// //   return(
// //     <>
// //        <h1>{children(state)}</h1>
// //        <button onClick={() => stateSet(state + 1)}>hi</button>
// //     </>
// //   )
// // }

// type ContainerProps = {children : ReactNode} & typeof defaultContainerProps;

// function Container({heading,children} : ContainerProps): ReactElement{
//   return(
//     <>
//     <h1>{heading}</h1>
//     <h2>{children}</h2>
//     </>
//   )
// }
// Container.defaultProps = defaultContainerProps; 

// function TextWithNumber ({children} : {children: (num: number) => ReactNode}){
//   const [state , stateSet] = React.useState<number>(1);

//   //useState<number> => اومدیم با این کار تایپشو تعریف کردیم

//   return(
//     <>
//     {children(state)}
//         <button onClick={() => stateSet(state + 1)}>btn clivk</button>
//     </>
//   )
// }

// function List<ListItem> ({items , render} : {
//   items: ListItem[] ,
//   render: (item: ListItem) => ReactNode
// }){
//   return(
//     <ul>
//       {items.map((item , index) => (
//         <li key={index}>
//             {render(item)}
//         </li>
//       ))}
//     </ul>
//   )
// }
// const fatemh =  () =>{
//   let val1 = document.querySelector("")
// }

function App() {
  return (
    <div>
      {/* <Heding title='hi'></Heding>
      <HedingChild><strong>k,fvk</strong></HedingChild>
      <Container>
        dcfjsd
      </Container>
      <button></button>
      <TextWithNumber>{(num: number) => <h1>slam {num}</h1>}</TextWithNumber>
      <List items={["ali", "mamad" , "shr"]} render={(item: string) => <div>{item}</div>}></List> */}


      <AddBankCard />
    </div>
  );
}

export default App;
