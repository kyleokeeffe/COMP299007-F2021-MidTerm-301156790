// Filename:     javascripts/app.js
// Student name: Kyle O'Keeffe
// StudentID:    301156790
// Date:         Oct. 30, 2021 

console.log('Goes to the client side.');


//Create event listeners for delete button confirmation message
if(getTitle == "Book List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}