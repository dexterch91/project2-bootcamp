import { getAuth, sendPasswordResetEmail } from "firebase/auth";
function ResetPassword() {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent");
  };

  return (
    <div className="resetPassword-main">
      <button className="resetBtn" type="button" onClick={triggerResetEmail}>
        Ripristina password
      </button>
    </div>
  );
}

export default ResetPassword;
