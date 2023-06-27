import './button.css'

function CreateButton({name, message}){

    function handleClick(){
        console.log(message)
    }
    return (
        <div>
            <button className='button' onClick={handleClick}>{name}</button>
        </div>

    );
}

export default CreateButton;