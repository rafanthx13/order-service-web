<template>
  <b-navbar type="is-light" centered>
      <template #brand>
        <b-navbar-item>
          <img
            src="./../assets/service-order-icon.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template #start>
        <!-- <b-navbar-item href="#">Home</b-navbar-item>
        <b-navbar-item href="#">Documentation</b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">About</b-navbar-item>
          <b-navbar-item href="#">Contact</b-navbar-item> -->
        <!-- </b-navbar-dropdown> -->
        <span class="my-span">Web Service - Preditor de Ordem de Serviço</span>
        <!-- <b-navbar-item href="#">Preditor de Ordem de Serviço de cliente Algar</b-navbar-item> -->
      </template>
      <!-- <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong></strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </b-navbar-item>
      </template> -->
    </b-navbar>
</template>

<script>

</script>

<style>
.my-span {
  align-self: center;
  font-size: 24px;
}

</style>
