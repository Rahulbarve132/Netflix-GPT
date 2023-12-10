import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO , USER_AVATAR } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
          );
          navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  // unsubscribe when component unmount
    return() => unsubscribe();
  }, []);

  const handleSignOut =()=>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className='absolute px-8 bg-gradient-to-b from-black w-full z-10 flex justify-between '>
      <div>
      <img 
      className='w-44'
      src= {LOGO} 
      alt="logo" />
      </div>

      { user &&(<div className='flex items-center	m-2 gap-3 '>
        <img className='h-6 w-6' src={USER_AVATAR} alt="" />
        <button onClick={handleSignOut}  className='font-bold text-white'>Sign out</button>
      </div>
      )}
    </div>
  )
}

export default Header ;
