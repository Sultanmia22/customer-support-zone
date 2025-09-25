
import Card from './Card';
const IssueCard = ({currentData,handleData}) => {
    
     
   



    return (

        <div>
            <h1 className='text-2xl font-semibold mb-3 '>Customer Tickets</h1>
           <div  className='grid grid-cols-2 gap-5'>
             {
              currentData.map( data => <Card 
                key={data.id}
                data={data}
                handleData={handleData}
               
                ></Card> )
            }
           </div>
        </div>


       
    );
};

export default IssueCard;