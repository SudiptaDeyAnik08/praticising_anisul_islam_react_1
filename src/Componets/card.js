const DateName = new Date().getDate();
const MonthName = new Date().getMonth();
const CurrentYear1 = new Date().getFullYear();

// const todoTitle = 'This is Family';
// const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum veritatis debitis officia dicta repudiandae! Quisquam cum sed molestias ea";




function Card(props){
  console.log(props)
    return(
      <div className='card'>
      <h3 className='cardTitle'>{props.title}</h3>
      <p className='cardDes'>{props.descrition}</p>
      <p className='cardFooter'>{DateName + '/' + MonthName + '/' +CurrentYear1}</p>
     </div>
    )
  }


export default Card;