
import { useNavigate,Outlet } from 'react-router-dom';
export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit=()=>{
    console.log("-----");
    return navigate("/");
  }

  return (
    <>
    <Outlet/>
      <div className='contact'>Contact</div>
      
      <button onClick={handleSubmit}>Submit form</button>
    </>
  )
}
