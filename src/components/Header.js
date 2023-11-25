import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
      alt="logo" />
      </div>

      { user &&(<div className='flex items-center	m-2 gap-3 '>
        <img className='h-6 w-6' src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp" alt="" />
        <button onClick={handleSignOut}  className='font-bold text-white'>Sign out</button>
      </div>
      )}
    </div>
  )
}

export default Header
