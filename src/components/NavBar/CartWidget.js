import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { lime } from '@mui/material/colors';

function CartWidget() {
    return(
        <>
            <ShoppingCartRoundedIcon sx={{ fontSize: 50, color: lime["A200"]}} />
        </>
    )
};

export default CartWidget;