<template>

<div class="row">

  <!-- Lista del carrito -->
  <div class="col-md-3">
    <ShoppingCart />
  </div>
  <!-- Final de la lista -->

  <!-- Página de juegos -->
  <div class="col-md-12">
      <h2><b>Ps4</b></h2>
      <div id="carouselps4" class="carousel slide" data-ride="carousel" data-interval="0">
          <!-- Indicador del carousel -->
          <ol class="carousel-indicators">
            <li data-target="#carouselps4" data-slide-to="0" class="active"></li>
            <li data-target="#carouselps4" data-slide-to="1"></li>
            <li data-target="#carouselps4" data-slide-to="2"></li>
          </ol>
          <!-- Objetos del carousel -->
          <div class="carousel-inner">
            <div class="item carousel-item active">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="item in Productos_Ps4"
                  :key="item._id"
                  :invId="item._id"
                  :name="item.titulo"
                  :image="item.foto"
                  :price="item.precio"
                  :offer="item.oferta"/>
              </div>
            </div>
          </div>
          <!-- Control del carousel -->
          <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
            <i class="fa fa-angle-left"></i>
          </a>
          <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
            <i class="fa fa-angle-right"></i>
          </a>
      </div><!-- Final carousel -->

      <h2><b>PC</b></h2>
      <div id="carouselpc" class="carousel slide" data-ride="carousel" data-interval="0">
        <!-- Indicador del carousel -->
        <ol class="carousel-indicators">
          <li data-target="#carouselpc" data-slide-to="0" class="active"></li>
          <li data-target="#carouselpc" data-slide-to="1"></li>
          <li data-target="#carouselpc" data-slide-to="2"></li>
        </ol>
        <!-- Objetos del carousel -->
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
             <Item
                  v-for="item in Productos_Pc"
                  :key="item._id"
                  :invId="item._id"
                  :name="item.titulo"
                  :image="item.foto"
                  :price="item.precio"
                  :offer="item.oferta"/>
            </div>
          </div>
        </div>
        <!-- Control del carousel -->
        <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
          <i class="fa fa-angle-right"></i>
        </a>
      </div><!-- Final carousel -->

      <h2><b>Xbox-One</b></h2>
      <div id="carouselxbox" class="carousel slide" data-ride="carousel" data-interval="0">
        <!-- Indicador del carousel -->
        <ol class="carousel-indicators">
          <li data-target="#carouselxbox" data-slide-to="0" class="active"></li>
          <li data-target="#carouselxbox" data-slide-to="1"></li>
          <li data-target="#carouselxbox" data-slide-to="2"></li>
        </ol>
        <!-- Objetos del carousel -->
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
              <Item
              v-for="item in Productos_XBoxOne"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
            </div>
          </div>
        </div>

        <!-- Control del carousel -->
        <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
          <i class="fa fa-angle-right"></i>
        </a>
      </div><!-- Final carousel -->
  </div>
  <!-- Fin Página de Juegos -->
</div>

</template>

<script>
  import js from '../../store';
  import Item from '../../Item.vue';
  import ShoppingCart from '../../ShoppingCart.vue';

  export default {
    name: 'app',
    computed: {
      forSale() { return this.$store.getters.forSale; },
      inCart() { return this.$store.getters.inCart; },
    },
    components: {
      js,
      Item,
      ShoppingCart,
    },
    data() {
      return {
        Productos_Ps4: [],
        Productos_XBoxOne: [],
        Productos_Pc: [],
      }
    },
    created() {
      this.getProductos_Ps4();
      this.getProductos_XBoxOne();
      this.getProductos_Pc();
    },
    methods: {
      getProductos_Ps4() {
        fetch('/api/TodoJuegos/Producto/')
          .then(res => res.json())
          .then(data => {
            this.Productos_Ps4 = data.filter(data => data.plataforma == 'Ps4' && data.tipo == 'consola');
          });
      },
      getProductos_XBoxOne() {
        fetch('/api/TodoJuegos/Producto/')
          .then(res => res.json())
          .then(data => {
            this.Productos_XBoxOne = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'consola');
          });
      },
      getProductos_Pc() {
        fetch('/api/TodoJuegos/Producto/')
          .then(res => res.json())
          .then(data => {
            this.Productos_Pc = data.filter(data => data.plataforma == 'Pc' && data.tipo == 'consola');
          });
      },
    }
  };
</script>
