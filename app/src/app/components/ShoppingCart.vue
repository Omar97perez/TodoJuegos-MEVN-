<template>
  <div>
    <div id="shoppingCart" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Shopping cart</h5>
            <button class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
                <tr v-for="(item, index) in cart">
                  <td>{{ item.titulo }}</td>
                  <td>{{ item.oferta}}€</td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>{{ total }}€</th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Seguir comprando</button>
            <router-link :to="{ name: 'Carrito' }"><button class="btn btn-primary" data-dismiss="modal">Pagar</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { dollars } from './filters';

export default {
  name: 'cart',
  data(){
    return{
      Productos: [],
    }
  },
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.Productos.find((forSaleItem) => {
          return cartItem === forSaleItem._id;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.oferta, 0);
    },
  },
  filters: {
    dollars,
  },
  created() {
    this.getProductos();
  },
  methods: {
    removeFromCart(index) { this.$store.dispatch('removeFromCart', index); },
    getProductos() {
      fetch('/api/TodoJuegos/Producto/')
        .then(res => res.json())
        .then(data => {
          this.Productos = data;
        });
    },
  },
};
</script>
