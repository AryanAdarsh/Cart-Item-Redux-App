import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
 const totalCount = useSelector(state => state.product.totalQuantity);
  const toggleHandler = () => {
    dispatch(uiActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCount}</span>
    </button>
  );
};

export default CartButton;
