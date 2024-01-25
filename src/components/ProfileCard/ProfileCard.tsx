import { Dispatch, FC, SetStateAction } from "react";
import { User } from "../../models/User";
interface ProfileCardProps {
  handleLogout: () => Promise<void>;
  //   interface inside interface || nested Interface.
  user: User;
  setResetPassword: () => void;
}

const ProfileCard: FC<ProfileCardProps> = ({
  handleLogout,
  //   destructure and create variable name photo URL and email check out.
  user: { photoUrl, email },
  setResetPassword,
}) => {
  return (
    <div className="w-screen h-[80vh] flex items-center justify-center bg-red-300">
      <div className="w-full p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex flex-col items-center pb-10">
          {photoUrl ? (
            <img className="" src={photoUrl.toString()} alt="Avatar" />
          ) : (
            <div className="bg-blue-200 w-24 h-24 mb-3 text-4xl font-bold grid place-content-center  rounded-full">
              {email[0].toUpperCase()}
            </div>
          )}

          <span className="text-sm text-gray-500">{email}</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button
              onClick={setResetPassword}
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-500"
            >
              Change Password
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
