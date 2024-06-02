<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" class="navbar-custom">
      <b-container>
        <b-navbar-brand :to="{name:'home'}" class="navbar-brand-custom">ANITAB</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name:'home'}" class="nav-item-custom">Inicio</b-nav-item>
            <b-nav-item :to="{name:'especies'}" class="nav-item-custom">Especies</b-nav-item>
            <b-nav-item :to="{name:'acercade'}" class="nav-item-custom">Acerca De</b-nav-item>
            <b-nav-item :to="{name:'contactanos'}" class="nav-item-custom">Contactanos</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <router-view/>

    <b-container fluid class="footer-custom">
        <b-container>
            <br><br>
            <b-row cols="4" class="text-light">
                <b-col cols="3">
                    <h5>ANITAB</h5>
                    <p>Tabasco: Donde la vida marina cobra vida</p>
                </b-col>
                <b-col cols="3">
                    <h5>Visitar</h5>
                    <ul>
                        <li><b-nav-item :to="{name:'home'}">Inicio</b-nav-item></li>
                        <li><b-nav-item :to="{name:'especies'}">Especies</b-nav-item></li>
                        <li><b-nav-item :to="{name:'acercade'}">Acerca de</b-nav-item></li>
                        <li><b-nav-item :to="{name:'contactanos'}">Contáctanos</b-nav-item></li>
                    </ul>
                </b-col>
                <b-col cols="3">
                </b-col>
                <b-col cols="3">
                    <h5>© 2024 Alberto Barrientos Vera</h5>
                </b-col>
            </b-row>
            <br><br>
        </b-container>
    </b-container>
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

.footer-custom {
  padding-right: 0px !important;
  padding-left: 0px !important;
  background-color: #00214D;
}
</style>
