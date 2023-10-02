import SignUp from "./minicomponents/SignUp"
import Login from "./minicomponents/Login"
import Language from "./minicomponents/Language"







 function Modal({state,dispatch}) {

   
 console.log(state.isOpen)
 console.log(state.language,'language')
 console.log(state.signUp, 'signup')
     const onClose = (e)=>{
        if(e.target.id === 'big'){
          dispatch({type:'close_modal'})
           
        }
     }
    if(!state.isOpen) return null;
  return (
    <div id='big' onClick={onClose} className='fixed inset-0 bg-modal_bg z-30 flex items-center justify-center'>
     
  {state.signUp ?(<SignUp></SignUp>) :null}
  {state.login ?(<Login dispatch={dispatch}></Login>):null}
  {state.language?(<Language></Language>):null}
    
        
    </div>
  )
}

export default Modal