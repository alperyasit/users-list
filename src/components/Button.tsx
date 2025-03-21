import "./Button.scss";

interface ButtonPropTypes {
  handleClick: () => void;
  disabled: boolean;
}

const Button = ({ handleClick, disabled }: ButtonPropTypes) => {
  return (
    <button disabled={disabled} onClick={handleClick} className="button">
      Find A New User
    </button>
  );
};

export default Button;
