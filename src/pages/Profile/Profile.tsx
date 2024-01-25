import Header from "../../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { logout } from "../../features/authSlice";
import ResetPassword from "../../components/ResetPassword/ResetPassword";

const Profile = () => {
  const [resetPassword, setResetPassword] = useState<boolean>(false);

  const [resetPasswordEmail, setResetPasswordEmail] = useState("");
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState<
    string | null
  >(null);
  const [resetPasswordError, setResetPasswordError] = useState<string | null>(
    null
  );
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };

  const handlePasswordReset = async () => {
    if (!resetPasswordEmail.length) return;
    try {
      await sendPasswordResetEmail(auth, resetPasswordEmail);
      setResetPasswordSuccess(
        " Password Reset Email sent. Please check your inbox."
      );
      setResetPasswordError(null);
    } catch (error: any) {
      setResetPasswordError(error.message);
      setResetPasswordSuccess(null);
    }
  };

  useEffect(() => {
    if (Boolean(!user)) {
      navigate("/auth");
    }
  }, [navigate, user]);

  return (
    <div>
      <Header />
      <ResetPassword
        handlePasswordReset={handlePasswordReset}
        isOpen={resetPassword}
        onClose={() => setResetPassword(false)}
        resetPasswordEmail={resetPasswordEmail}
        resetPasswordError={resetPasswordError}
        resetPasswordSuccess={resetPasswordSuccess}
        setResetPasswordEmail={setResetPasswordEmail}
      />
      {user && (
        <ProfileCard
          user={user}
          handleLogout={handleLogout}
          setResetPassword={() => setResetPassword(true)}
        />
      )}
      <h1>This IS my Profile </h1>
    </div>
  );
};

export default Profile;
