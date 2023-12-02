
import { Link } from 'react-router-dom';

const RegisterLink = () => {
  return (
    <span>
      Eres nuevo? <Link to="/register" className='hover:text-cyan-500 transition-colors duration-300'>regístrate aquí</Link>
    </span>
  );
};

export default RegisterLink;
