import './styles.scss';

const CustomButton = (props) => (
    <div>
      <button className="button" onClick={props.action}>{props.text}</button>
    </div>
);

export default CustomButton;
