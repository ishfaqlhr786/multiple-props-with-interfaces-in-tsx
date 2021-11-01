interface IProps{
    
invoiceData:{
  
    invoices:{id:number,name:string,city:string}[];
  
}
logo:string
}
const Invoice=(props:IProps)=>{
  //  const [invoices]=props.invoiceData.invoices;
    // <h3>{props.invoiceData.invoices[0].name}</h3>

    return(
        <>
        <h2>Invoices</h2>
       <h3>{props.logo}</h3>
   <table>   
       <thead>
           <tr>
               <th>city</th>
               <th>name</th>
               <th>id</th>
           </tr>
       </thead>
      <tbody>
       
           
{
    props.invoiceData.invoices.map(it=>{
        return (
           <tr key={it.id}> 
          <td>  {it.city}</td><td> {it.name}</td><td>    {it.id}</td>
          </tr>
        )
    })
}

</tbody>
</table>
        </>
    )
}
export const App = () => {
  const logo="pak"
    const data={
       
     invoices:   [{id:1,name:"asad",city:"lhr"},
         {id:2,name:"aslam",city:"lkhi"},
          {id:3,name:"asim",city:"khi"},]

    }
    return(

        <>
          <Invoice  invoiceData={data} logo={logo} />
        </>
    )
}
