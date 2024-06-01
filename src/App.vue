<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" class="navbar-custom">
      <b-container>
        <b-navbar-brand :to="{name:'home'}" class="navbar-brand-custom">ANITAB</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name:'especies'}" class="nav-item-custom">Especies</b-nav-item>
            <b-nav-item :to="{name:'acercade'}" class="nav-item-custom">Acerca De</b-nav-item>
            <b-nav-item :to="{name:'contactanos'}" class="nav-item-custom">Contactanos</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <router-view/>

  </div>
</template>

<style>

.navbar-custom {
  background-color: #2467C2 !important;
}

.navbar-brand-custom {
  color: #fff !important;
}

.nav-item-custom {
  color: #fff !important;
}
</style>
