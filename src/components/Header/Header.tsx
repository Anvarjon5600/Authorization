import { headerClasses } from "./headerClasses";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeHooks";

const Header = () => {
  const { header } = headerClasses;
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className={header}>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center w-full ">
            <Link
              to="/"
              className="mr-2 px-4 py-3 bg-black text-white focus:outline-none font-medium rounded-lg text-sm"
            >
              Home
            </Link>
            {/* Implementation of Use selector.  */}
            {Boolean(!user) && (
              <Link
                to="/auth"
                className="mr-2 px-4 py-2.5 bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
              >
                Sign in
              </Link>
            )}
            {user ? (
              <Link
                to="/profile"
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300"
              >
                {user?.photoUrl ? (
                  <>
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      src={user.photoUrl.toString()}
                    />
                  </>
                ) : (
                  <div className="w-8 h-8 mb-3 text-sm font-bold grid place-content-center rounded-full bg-orange-200 text-gray-600">
                    {user?.email[0].toUpperCase()}
                  </div>
                )}
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
