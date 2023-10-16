import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import IconUser from "../utils/icons/IconUser";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR_URL, LOGO_URL } from "../utils/constants";
import IconHelp from "../utils/icons/IconHelp";
import IconLogout from "../utils/icons/IconLogout";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  return (
    <div className="absolute place-items-center w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div
          className="flex p-2"
          onMouseOver={() => setIsOpen((prev) => !prev)}
          onMouseOut={() => setIsOpen((prev) => !prev)}
        >
          <img className="w-12 h-12" alt="user-icon" src={AVATAR_URL} />
          {isOpen && (
            <div className="absolute right-6 z-10 mt-4 w-48 top-16 origin-top-right bg-black py-2 mx-4 focus:outline-none">
              <div className="flex flex-col w-full justify-between hover:cursor-pointer">
                <button className=" text-white text-left px-3 my-2 text-sm ">
                  <div className="flex">
                    <div className="flex items-center">
                      <IconUser />
                      <span className="mx-4 text-md">Account</span>
                    </div>
                  </div>
                </button>

                <button className=" text-white text-left px-3 my-2 text-sm">
                  <div className="flex">
                    <div className="flex items-center">
                      <IconHelp />
                      <span className="mx-4 text-md">Help Center</span>
                    </div>
                  </div>
                </button>

                <button
                  className="text-white px-3 my-2 text-center text-sm"
                  onClick={handleSignOut}
                >
                  <div className="flex">
                    <div className="flex items-center">
                      <IconLogout />
                      <span className="mx-4 text-md">Sign out</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
