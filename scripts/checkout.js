import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {updateCartQuantityCheckout} from '../data/cart.js';

updateCartQuantityCheckout();
renderOrderSummary();
renderPaymentSummary();