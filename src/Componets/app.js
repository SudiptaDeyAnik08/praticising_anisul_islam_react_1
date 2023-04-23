import Card from './card';
import Cardest from './card';
import Data from './data.json'
import {v4 as uuidv4} from 'uuid'
import NestedMap from './nestedMap';
import UseEffect from './UseEffect/UseEffect';
import Notify from './Notification/Notify';

const a = "Hi this is Sudipta";

const currentYear = new Date().getFullYear();
const date1 = new Date().getDate();
const month = new Date().getMonth();



const HeadingStyle = {
    backgroundColor:'purple',
    color:"white",
    textAlign:'center',
    padding:'15px'
    
  }

function app(){

    // console.log(Data);

    return(
        <div>
        {/* <div>
            <h2 style={{color:'red',fontSize:'3rem'}}>Hi</h2>
            <h1 style={HeadingStyle}>{a}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vitae.</p>
            <p>{month}.{date1}.{currentYear}</p>
        </div>
        <hr /> */}
   
    {/* <Card title="Call Mother" descrition="this is description 1" ></Card>
    <Card title={Data[0].title} descrition={Data[0].des} />
    <Card title="Call Brother" descrition="this is description 3"></Card>
    <Card title="Call Sister" descrition="this is description 4"/>
    <Cardest title="Call Sadia" descrition="this is description 5"></Cardest>
    <Cardest title="Call Sadi" descrition="this is description 6"/> */}

    {/* Here Card and Cardest are same. Varible */}
    {/* <zd title={Data[2].title} descrition={Data[2].des}></Card> */}

    {/* {
        Data.map((res,) => <Card key={uuidv4()} title={res.title} descrition={res.des}></Card>)
    } */}

    {/* <NestedMap></NestedMap> */}

    <UseEffect></UseEffect>
    <Notify></Notify>
   </div>
    )
}

export default app; 